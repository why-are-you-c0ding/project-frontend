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
} from "@components/SellOption/styles";
import { ItemTitle } from "@components/SignUpItem/styles";
import { Button, Modal } from "antd";

import styled from "@emotion/styled";

const A = styled(Button)`
  color: #3f96fe;
  background-color: inherit;
  box-shadow: none;
  padding: 0;
`;

interface Props {}

interface ItemInfo {
  id: number;
  name: string;
  values: string;
}

const SellOption: FC<Props> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const ItemId = useRef(1);
  const [itemInfos, setItemInfos] = useState<ItemInfo[]>([
    { id: 0, name: "", values: "" },
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
          <ItemTitle>상품 옵션</ItemTitle>
          <Explain>
            첫 옵션은 기본 가격을 입력해주세요.
            <br />두 번째 옵션의 기본 가격은 1,000원 이상 입력해주세요.{" "}
            <A type="primary" onClick={showModal}>
              예시 보기
            </A>
          </Explain>

          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          {itemInfos.map((item, idx) => {
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
                {item.id !== 0 && (
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
