import React, { ChangeEvent, FC, useCallback, useRef, useState } from "react";
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
} from "@components/SignUpItemBodys/SellOption/styles";
import { ItemTitle } from "@components/SignUpItem/styles";

interface Props {}

interface ItemInfo {
  id: number;
  name: string;
  values: string;
}

const SellOption: FC<Props> = ({}) => {
  const ItemId = useRef(2);
  const [itemInfos, setItemInfos] = useState<ItemInfo[]>([
    { id: 0, name: "", values: "" },
    { id: 1, name: "", values: "" },
  ]);

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
    [itemInfos]
  );

  const onChangeItemValues = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      if (index >= itemInfos.length) return;

      let temp = [...itemInfos];
      temp[index].values = e.target.value;

      setItemInfos(temp);
    },
    [itemInfos]
  );

  const onChangeItemName = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      if (index >= itemInfos.length) return;

      let temp = [...itemInfos];
      temp[index].name = e.target.value;

      setItemInfos(temp);
    },
    [itemInfos]
  );

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
              onChange={(e) => {
                onChangeItemName(e, 0);
              }}
              placeholder={"예시) 색상"}
            />
            <OptionValue
              type="text"
              value={itemInfos[0].values}
              onChange={(e) => {
                onChangeItemValues(e, 0);
              }}
              placeholder={"예시) 화이트, 블랙"}
            />
          </Option>
          <div className="gap" />
          <ItemTitle>추가 옵션</ItemTitle>
          <Explain>추가 옵션은 선택입니다.(최대 4개 입력 가능)</Explain>
          {itemInfos.map((item, idx) => {
            if (item.id === 0) return;

            return (
              <Option key={item.id}>
                <OptionName
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    onChangeItemName(e, item.id);
                  }}
                  placeholder={"예시) 색상"}
                />
                <OptionValue
                  type="text"
                  value={item.values}
                  onChange={(e) => {
                    onChangeItemValues(e, item.id);
                  }}
                  placeholder={"예시) 화이트, 블랙"}
                />
                {item.id !== 1 && (
                  <OptDeleteBtn onClick={() => deleteInput(item.id)}>
                    -
                  </OptDeleteBtn>
                )}
                {idx === itemInfos.length - 1 && itemInfos.length < 5 && (
                  <OptPlusBtn icon={"+"} onClick={addInput} />
                )}
              </Option>
            );
          })}
        </ItemInfo>
      </ItemInfoWrapper>
    </SellOptionContainer>
  );
};

export default SellOption;