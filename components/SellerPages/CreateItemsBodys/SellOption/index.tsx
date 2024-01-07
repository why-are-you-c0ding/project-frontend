import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Explain,
  ItemInfo,
  ItemInfoWrapper,
  OptionName,
  OptionValue,
  OptPlusBtn,
  SellOptionContainer,
  Option,
  OptDeleteBtn,
  MakeTableBtn,
  OptionButtonWrapper,
} from "@components/SellerPages/CreateItemsBodys/SellOption/styles";
import { ItemTitle } from "@components/SellerPages/CreateItems/styles";
import SellOptionTable from "@components/SellerPages/CreateItemsBodys/SellOptionTable";
import { makeOptionTableList } from "@utils/makeOptionTableList";
import {
  getOptionTableList,
  setItemInfos,
} from "@redux/reducers/createItemsSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import createItems from "@components/SellerPages/CreateItems";
import { useAppSelector } from "@redux/hooks";
import { OptionInfo } from "@typings/sellerPages";

export interface ItemInfo {
  id: number;
  name: string;
  values: string;
}

const SellOption = () => {
  const dispatch = useDispatch();
  const ItemId = useRef(1);
  const itemInfos = useAppSelector((state) => state.createItems.itemInfos);

  const addInput = useCallback(() => {
    if (itemInfos.length < 5) {
      const Item = {
        id: ItemId.current,
        name: "",
        values: "",
      };

      dispatch(setItemInfos([...itemInfos, Item]));
      ItemId.current++;
    }
  }, [itemInfos]);

  const deleteInput = useCallback(
    (index: number) => {
      if (itemInfos.length === 1) {
        toast.warning("옵션은 최소 1개 있어야 합니다.", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      dispatch(setItemInfos(itemInfos.filter((item) => item.id !== index)));
    },
    [itemInfos],
  );

  const onChangeItemName = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = e.target;
      if (value.length > 10) return;

      let temp: ItemInfo[] = JSON.parse(JSON.stringify(itemInfos));
      temp.find((v, idx) => {
        if (v.id === index) {
          temp[idx].name = value;
        }
      });

      dispatch(setItemInfos(temp));
    },
    [itemInfos],
  );

  const onChangeItemValues = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = e.target;
      if (value.length > 50) return;

      let temp: ItemInfo[] = JSON.parse(JSON.stringify(itemInfos));
      temp.find((v, idx) => {
        if (v.id === index) {
          temp[idx].values = e.target.value;
        }
      });

      dispatch(setItemInfos(temp));
    },
    [itemInfos],
  );

  const onClickOptionApply = useCallback(() => {
    let flag = 1;

    for (let item of itemInfos) {
      if (item.name === "" || item.values === "") {
        toast.warning("모든 옵션을 입력해주세요.", {
          position: toast.POSITION.TOP_CENTER,
        });
        flag = 0;
        break;
      }
    }

    // 옵션 개수가 150개 초과되면 안됨
    let optionMul = 1;
    const tempOptionTableList: {
      type: "createItems/getOptionTableList";
      payload: OptionInfo[];
    } = getOptionTableList(makeOptionTableList(itemInfos));

    tempOptionTableList.payload.map((option: OptionInfo) => {
      optionMul *= option.options.length;
    });

    if (optionMul > 125) {
      toast.warning("상품 옵션의 개수가 125개 초과될 수 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (flag) dispatch(tempOptionTableList);
  }, [itemInfos]);

  return (
    <SellOptionContainer>
      <h3>옵션</h3>
      <ItemInfoWrapper>
        <ItemInfo>
          <ItemTitle>옵션 입력</ItemTitle>
          <Explain>
            옵션은 필수로 입력해주세요.(최대 3개 입력 가능)
            <br /> 옵션은 ","을 기준으로 나눠주세요.
          </Explain>

          {itemInfos.map((item, idx) => {
            return (
              <Option key={item.id}>
                <OptionName
                  type="text"
                  value={item.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChangeItemName(e, item.id);
                  }}
                  placeholder={"예시) 색상"}
                />
                <OptionValue
                  type="text"
                  value={item.values}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChangeItemValues(e, item.id);
                  }}
                  placeholder={"예시) 화이트, 블랙(최대 5개)"}
                />
                <OptionButtonWrapper>
                  <OptDeleteBtn
                    icon={"-"}
                    onClick={() => deleteInput(item.id)}
                  ></OptDeleteBtn>
                  {idx === itemInfos.length - 1 && itemInfos.length < 3 && (
                    <OptPlusBtn icon={"+"} onClick={addInput} />
                  )}
                </OptionButtonWrapper>
              </Option>
            );
          })}

          <MakeTableBtn onClick={onClickOptionApply}>옵션 적용</MakeTableBtn>

          <ItemTitle>옵션 목록</ItemTitle>
          <SellOptionTable />
        </ItemInfo>
      </ItemInfoWrapper>
    </SellOptionContainer>
  );
};

export default SellOption;
