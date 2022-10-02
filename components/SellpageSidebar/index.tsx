import React, { FC } from "react";
import { Info, Title, Wrapper } from "@components/SellpageSidebar/styles";
import { Link, NavLink } from "react-router-dom";

interface Props {
  sideBar: boolean;
}

const SellpageSidebar: FC<Props> = ({ sideBar }) => {
  return (
    <Wrapper sideBar={sideBar}>
      <Title>
        <Link to={"/sellpage/info"}>상품 판매 페이지</Link>
      </Title>

      <Info>
        <header>상품 등록</header>
        <span>
          <NavLink activeClassName="selected" to={"/sellpage/sellregister"}>
            상품 등록
          </NavLink>
        </span>
        <span>
          <NavLink activeClassName="selected" to={`/sellpage/sellstock`}>
            재고 등록
          </NavLink>
        </span>
      </Info>

      <Info>
        <header>상품 조회</header>

        <span>
          <NavLink activeClassName="selected" to={`/sellpage/sellstocklook`}>
            상품 조회
          </NavLink>
        </span>
      </Info>
    </Wrapper>
  );
};

export default SellpageSidebar;
