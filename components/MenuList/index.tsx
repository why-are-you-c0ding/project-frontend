import React, { FC, useCallback, useEffect } from "react";
import { Blank, CloseBtn, List } from "@components/MenuList/styles";
import { Link } from "react-router-dom";

interface Props {
  onCloseModal: (e: React.SyntheticEvent<EventTarget>) => void;
}

const MenuList: FC<Props> = ({ onCloseModal }) => {
  const stopPropagation = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.stopPropagation();
    },
    []
  );
  return (
    <div onClick={stopPropagation}>
      <Blank onClick={onCloseModal}></Blank>
      <List>
        <CloseBtn onClick={onCloseModal}>X</CloseBtn>
        <div>
          <span>Shop</span>
          <span>장바구니</span>
          <span>
            <Link to="/mypage/my">마이페이지</Link>
          </span>
          <span>
            <Link to="/login">로그인</Link>
          </span>
        </div>
      </List>
    </div>
  );
};

export default MenuList;
