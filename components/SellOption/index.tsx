import React, { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import {
  InputOptions,
  ItemInfo,
  ItemInfoWrapper,
  SellOptionContainer,
} from "@components/SellOption/styles";
import { ItemTitle } from "@components/SignUpItem/styles";

interface Props {}

interface ItemInfo {
  id: number;
  name: string;
  values: string;
}

const SellOption: FC<Props> = ({}) => {
  const ItemId = useRef(1);
  const [itemInfos, setItemInfos] = useState<ItemInfo[]>([
    { id: 0, name: "", values: "" },
  ]);

  const addInput = useCallback(() => {
    const Item = {
      id: ItemId.current,
      name: "",
      values: "",
    };

    setItemInfos([...itemInfos, Item]);
    ItemId.current++;
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
          <InputOptions>
            <ItemTitle>상품 옵션 입력</ItemTitle>
            <button onClick={addInput}>+</button>

            {itemInfos.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      onChangeItemName(e, item.id);
                    }}
                  />
                  <input
                    type="text"
                    value={item.values}
                    onChange={(e) => {
                      onChangeItemValues(e, item.id);
                    }}
                  />
                  <button onClick={() => deleteInput(item.id)}>-</button>
                </div>
              );
            })}
          </InputOptions>
        </ItemInfo>
      </ItemInfoWrapper>
    </SellOptionContainer>
  );
};

export default SellOption;
