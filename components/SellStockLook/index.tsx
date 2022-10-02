import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import Sell from "@components/Sell";

const SellStockLook = () => {
  return (
    <div>
      <ReponsiveBar title={"상품 등록"} />

      <TopHeader>상품 등록</TopHeader>
    </div>
  );
};

export default SellStockLook;
