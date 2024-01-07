import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";

export default function OrderItems() {
  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />

      <Wrapper>
        <TopHeader>주문 내역</TopHeader>
      </Wrapper>
    </div>
  );
}
