import React from "react";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { sellersApi } from "@api/sellersApi";
import { itemsApi } from "@api/itemsApi";

export default function RegisteredItems() {
  const { data } = sellersApi.useGetSellerItemsQuery(0);

  console.log(data);

  return (
    <div>
      <Wrapper>
        <TopHeader>등록 상품</TopHeader>
      </Wrapper>
    </div>
  );
}
