import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/UI/ReponsiveBar";

const SellInfo = () => {
  return (
    <div>
      <ReponsiveBar title={"상품 판매정보"} />

      <TopHeader>상품 판매정보</TopHeader>
    </div>
  );
};

export default SellInfo;
