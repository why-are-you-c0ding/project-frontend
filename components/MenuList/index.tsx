import React, { FC, useCallback, useEffect, useState } from "react";
import { Blank, CloseBtn, List } from "@components/MenuList/styles";
import { Link } from "react-router-dom";

interface Props {
  onCloseModal: (e: React.SyntheticEvent<EventTarget>) => void;
}

const MenuList: FC<Props> = ({ onCloseModal }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("jwt") !== null);

  const onLogout = useCallback((e: any) => {
    localStorage.removeItem("jwt");
    setIsLogin(false);
  }, []);

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
          <span>
            <Link to="/mypage/like">장바구니</Link>
          </span>
          <span>
            <Link to="/mypage/my">마이페이지</Link>
          </span>
          <span>
            {!isLogin ? (
              <Link to="/login">로그인</Link>
            ) : (
              <div onClick={onLogout}>로그아웃</div>
            )}
          </span>
        </div>
      </List>
    </div>
  );
};

export default MenuList;
