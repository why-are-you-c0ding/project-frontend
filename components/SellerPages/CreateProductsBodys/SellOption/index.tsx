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
} from "@components/SellerPages/CreateProductsBodys/SellOption/styles";
import { ItemTitle } from "@components/SellerPages/CreateProducts/styles";
import SellOptionTable from "@components/SellerPages/CreateProductsBodys/SellOptionTable";
import { makeOptionTableList } from "@utils/makeOptionTableList";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { getOptionTableList } from "@redux/reducers/signUpItemSlice";

export interface ItemInfo {
  id: number;
  name: string;
  values: string;
}

const SellOption = () => {
  const dispatch = useDispatch();
  // const { optionTableList } = useAppSelector((state: any) => state.sellOption);
  const optionTableList = [
    {
      options: [
        {
          name: "Option 1",
          price: 1000,
        },
        {
          name: "Option 2",
          price: 1500,
        },
      ],
    },
    {
      options: [
        {
          name: "Option A",
          price: 1200,
        },
        {
          name: "Option B",
          price: 1700,
        },
      ],
    },
  ];

  const ItemId = useRef(1);
  const [itemInfos, setItemInfos] = useState<ItemInfo[]>([
    { id: 0, name: "color", values: "black, white" },
    { id: 1, name: "sizee", values: "small,middle,   large" },
  ]);
  // const [itemInfos, setItemInfos] = useState<ItemInfo[]>([
  //   { id: 0, name: "", values: "" },
  // ]);

  const addInput = useCallback(() => {
    if (itemInfos.length < 5) {
      const Item = {
        id: ItemId.current,
        name: "",
        values: "",
      };

      setItemInfos([...itemInfos, Item]);
      ItemId.current++;
    }
  }, [itemInfos]);

  const deleteInput = useCallback(
    (index: number) => {
      setItemInfos(itemInfos.filter((item) => item.id !== index));
    },
    [itemInfos],
  );

  const onChangeItemName = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      let temp = [...itemInfos];
      temp.find((v, idx) => {
        if (v.id === index) {
          temp[idx].name = e.target.value;
        }
      });

      setItemInfos(temp);
    },
    [itemInfos],
  );

  const onChangeItemValues = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      let temp = [...itemInfos];
      temp.find((v, idx) => {
        if (v.id === index) {
          temp[idx].values = e.target.value;
        }
      });

      setItemInfos(temp);
    },
    [itemInfos],
  );

  const onClickOptionApply = useCallback(() => {
    let flag = 1;

    for (let item of itemInfos) {
      if (item.name === "" || item.values === "") {
        alert("모든 옵션을 입력해주세요.");
        flag = 0;
        break;
      }
    }

    if (flag) dispatch(getOptionTableList(makeOptionTableList(itemInfos)));
  }, [itemInfos]);

  useEffect(() => {
    let optionMul = 1;
    optionTableList?.map((option: any) => {
      optionMul *= option.options.length;
    });

    if (optionMul > 150) {
      dispatch(getOptionTableList([]));
      alert("상품 옵션의 개수가 150개 초과될 수 없습니다.");
    }
  }, [optionTableList]);

  return (
    <SellOptionContainer>
      <h3>옵션</h3>
      <ItemInfoWrapper>
        <ItemInfo>
          <ItemTitle>기본 옵션</ItemTitle>
          <Explain>
            기본 옵션은 필수로 입력해주세요. <br />
            옵션은 ","을 기준으로 나눠주세요.
          </Explain>
          <Option key={itemInfos[0].id}>
            <OptionName
              type="text"
              value={itemInfos[0].name}
              onChange={(e: any) => {
                onChangeItemName(e, 0);
              }}
              placeholder={"예시) 색상"}
            />
            <OptionValue
              type="text"
              value={itemInfos[0].values}
              onChange={(e: any) => {
                onChangeItemValues(e, 0);
              }}
              placeholder={"예시) 화이트, 블랙"}
            />
            {itemInfos.length === 1 && (
              <OptPlusBtn icon={"+"} onClick={addInput} />
            )}
          </Option>

          {itemInfos.length > 1 && (
            <div>
              <ItemTitle>추가 옵션</ItemTitle>
              <Explain>추가 옵션은 선택입니다.(최대 4개 입력 가능)</Explain>

              {itemInfos.map((item, idx) => {
                if (item.id === 0) return;

                return (
                  <Option key={item.id}>
                    <OptionName
                      type="text"
                      value={item.name}
                      onChange={(e: any) => {
                        onChangeItemName(e, item.id);
                      }}
                      placeholder={"예시) 색상"}
                    />
                    <OptionValue
                      type="text"
                      value={item.values}
                      onChange={(e: any) => {
                        onChangeItemValues(e, item.id);
                      }}
                      placeholder={"예시) 화이트, 블랙"}
                    />
                    <OptDeleteBtn onClick={() => deleteInput(item.id)}>
                      -
                    </OptDeleteBtn>
                    {idx === itemInfos.length - 1 && itemInfos.length < 5 && (
                      <OptPlusBtn icon={"+"} onClick={addInput} />
                    )}
                  </Option>
                );
              })}
            </div>
          )}

          <MakeTableBtn onClick={onClickOptionApply}>옵션 적용</MakeTableBtn>

          <ItemTitle>옵션 목록</ItemTitle>
          <SellOptionTable />
        </ItemInfo>
      </ItemInfoWrapper>
    </SellOptionContainer>
  );
};

export default SellOption;
