import React, { FC } from "react";
import { Info, Title, Wrapper } from "@components/MyPages/MypageSidebar/styles";
import { Link, NavLink } from "react-router-dom";

interface Props {
  sideBar: boolean;
}

const MypageSidebar: FC<Props> = ({ sideBar }) => {
  return (
    <Wrapper sideBar={sideBar}>
      <Title>마이 페이지</Title>
      <Info>
        <span>
          <NavLink
            to={"/mypage/buying"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            주문 내역
          </NavLink>
        </span>
        <span>
          <NavLink
            to={"/mypage/like"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            장바구니
          </NavLink>
        </span>
      </Info>
    </Wrapper>
  );
};

export default MypageSidebar;
