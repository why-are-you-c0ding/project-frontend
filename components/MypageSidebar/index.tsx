import React, { FC } from "react";
import { Info, Title, Wrapper } from "@components/MypageSidebar/styles";
import { Link, NavLink } from "react-router-dom";

interface Props {
  sideBar: boolean;
}

const MypageSidebar: FC<Props> = ({ sideBar }) => {
  return (
    <Wrapper sideBar={sideBar}>
      <Title>마이 페이지</Title>

      <Info>
        <header>쇼핑 정보</header>
        <span>
          <NavLink activeClassName="selected" to={"/mypage/buying"}>
            주문 내역
          </NavLink>
        </span>
        <span>
          <NavLink activeClassName="selected" to={`/mypage/like`}>
            장바구니
          </NavLink>
        </span>
      </Info>

      {/*<Info>*/}
      {/*  <header>내 정보</header>*/}

      {/*  <span>*/}
      {/*    <NavLink activeClassName="selected" to={`/mypage/profile`}>*/}
      {/*      프로필 정보*/}
      {/*    </NavLink>*/}
      {/*  </span>*/}
      {/*  <span>*/}
      {/*    <NavLink activeClassName="selected" to={`/mypage/address`}>*/}
      {/*      주소록*/}
      {/*    </NavLink>*/}
      {/*  </span>*/}
      {/*  <span>*/}
      {/*    <NavLink activeClassName="selected" to={`/mypage/payment`}>*/}
      {/*      결제 정보*/}
      {/*    </NavLink>*/}
      {/*  </span>*/}
      {/*</Info>*/}
    </Wrapper>
  );
};

export default MypageSidebar;
