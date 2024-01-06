import React, { FC, useCallback, useEffect, useState } from "react";
import { Blank, CloseBtn, List } from "@components/UI/MenuList/styles";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { logout } from "@redux/reducers/userInfoSlice";
import { removeCookie } from "@utils/cookie";
import { useNavigate } from "react-router";
import { memberApi } from "@api/memberApi";

interface Props {
  onCloseModal: () => void;
}

const MenuList: FC<Props> = ({ onCloseModal }) => {
  const isLogin = useAppSelector((state) => state.userInfo.isLogin);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [logoutMutation] = memberApi.useLogoutMutation();

  const onLogout = useCallback(() => {
    logoutMutation({});
    dispatch(logout());
    removeCookie("isLogin");
    navigate("/main");
  }, [isLogin]);

  const stopPropagation = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.stopPropagation();
    },
    [],
  );

  return (
    <div onClick={stopPropagation}>
      <Blank onClick={onCloseModal} />
      <List>
        <CloseBtn onClick={onCloseModal}>X</CloseBtn>
        <div>
          <div
            onClick={() => {
              navigate("/");
              onCloseModal();
            }}
          >
            <span>HOME</span>
          </div>
          <div
            onClick={() => {
              navigate("/mypage/like");
              onCloseModal();
            }}
          >
            <span>장바구니</span>
          </div>
          <div
            onClick={() => {
              !isLogin ? navigate("/login") : onLogout();
              onCloseModal();
            }}
          >
            {!isLogin ? <span>로그인</span> : <div>로그아웃</div>}
          </div>
        </div>
      </List>
    </div>
  );
};

export default MenuList;
