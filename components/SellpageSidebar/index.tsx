import React, { FC } from "react";
import { Info, Title, Wrapper } from "@components/SellpageSidebar/styles";
import { Link, NavLink } from "react-router-dom";

interface Props {
  sideBar: boolean;
}

const SellpageSidebar: FC<Props> = ({ sideBar }) => {
  return (
    <Wrapper sideBar={sideBar}>
      <Title>판매자 페이지</Title>

      <Info>
        <header>상품 등록</header>
        <span>
          <NavLink activeClassName="selected" to={"/sellpage/signupitem"}>
            상품 등록
          </NavLink>
        </span>
        <span>
          <NavLink activeClassName="selected" to={"/sellpage/selllist"}>
            등록 상품 조회
          </NavLink>
        </span>
        <span>
          <NavLink activeClassName="selected" to={"/sellpage/sellorderlist"}>
            주문 내역 조회
          </NavLink>
        </span>
      </Info>
    </Wrapper>
  );
};

export default SellpageSidebar;
