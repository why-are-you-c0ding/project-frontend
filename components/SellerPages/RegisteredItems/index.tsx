import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";

export default function RegisteredItems() {
  return (
    <div>
      <ReponsiveBar title={"등록 상품"} />

      <Wrapper>
        <TopHeader>등록 상품</TopHeader>
      </Wrapper>
    </div>
  );
}
