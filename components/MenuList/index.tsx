import React, { FC, useCallback, useEffect, useState } from "react";
import { Blank, CloseBtn, List } from "@components/MenuList/styles";
import { Link } from "react-router-dom";

interface Props {
  onCloseModal: (e: React.SyntheticEvent<EventTarget>) => void;
}

const MenuList: FC<Props> = ({ onCloseModal }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("jwt") !== null);

  const onLogout = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
          <div>
            <Link to="/ProductPage">shop</Link>
          </div>
          <div>
            <Link to="/mypage/like">장바구니</Link>
          </div>
          <div>
            <Link to="/mypage/buying">주문내역</Link>
          </div>
          <div>
            <Link to="/sellpage/selllist">등록 상품 조회</Link>
          </div>
          <div>
            <Link to="/sellpage/sellorderlist">주문 내역 조회</Link>
          </div>
          <div>
            {!isLogin ? (
              <Link to="/login">로그인</Link>
            ) : (
              <div onClick={onLogout}>로그아웃</div>
            )}
          </div>
        </div>
      </List>
    </div>
  );
};

export default MenuList;
