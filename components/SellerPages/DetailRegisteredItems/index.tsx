import React from "react";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { useParams } from "react-router";

export default function DetailRegisteredItems() {
  const { id } = useParams();

  return (
    <div>
      <Wrapper>
        <TopHeader>등록 상품 상세 조회</TopHeader>
      </Wrapper>
    </div>
  );
}
