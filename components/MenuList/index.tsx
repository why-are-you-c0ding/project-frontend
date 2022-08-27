import React, { FC, useEffect } from "react";
import { CloseBtn, List } from "@components/MenuList/styles";

interface Props {
  onCloseModal: (e: React.SyntheticEvent<EventTarget>) => void;
}

const MenuList: FC<Props> = ({ onCloseModal }) => {
  return (
    <List>
      <CloseBtn onClick={onCloseModal}>X</CloseBtn>
      <div>
        <span>Shop</span>
        <span>장바구니</span>
        <span>마이페이지</span>
        <span>로그인</span>
      </div>
    </List>
  );
};

export default MenuList;
