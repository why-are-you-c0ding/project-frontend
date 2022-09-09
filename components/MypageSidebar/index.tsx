import React from "react";
import { Info, Title, Wrapper } from "@components/MypageSidebar/styles";

const MypageSidebar = () => {
  return (
    <Wrapper>
      <Title>마이 페이지</Title>

      <Info>
        <header>쇼핑 정보</header>
        <span>주문 내역</span>
        <span>장바구니</span>
      </Info>

      <Info>
        <header>내 정보</header>
        <span>프로필 정보</span>
        <span>주소록</span>
        <span>결제 정보</span>
      </Info>
    </Wrapper>
  );
};

export default MypageSidebar;
