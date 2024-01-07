import React, { FC } from "react";
import {
  Info,
  Title,
  Wrapper,
} from "@components/SellerPages/SellpageSidebar/styles";
import { Link, NavLink } from "react-router-dom";

interface Props {
  sideBar: boolean;
}

const SellpageSidebar: FC<Props> = ({ sideBar }) => {
  return (
    <Wrapper sideBar={sideBar}>
      <Title>판매자 페이지</Title>

      <Info>
        <span>
          <NavLink
            className={(isActive) => (isActive ? "selected" : "")}
            to={"/sellpage/registereditems"}
          >
            등록 상품 조회
          </NavLink>
        </span>
        <span>
          <NavLink
            className={(isActive) => (isActive ? "selected" : "")}
            to={"/sellpage/orderitems"}
          >
            주문 내역 조회
          </NavLink>
        </span>
        <span>
          <NavLink
            className={(isActive) => (isActive ? "selected" : "")}
            to={"/sellpage/createitems"}
          >
            상품 등록
          </NavLink>
        </span>
      </Info>
    </Wrapper>
  );
};

export default SellpageSidebar;
