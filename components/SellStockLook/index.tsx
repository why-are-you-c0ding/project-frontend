import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";

const SellStockLook = () => {
  return (
    <div>
      <ReponsiveBar title={"상품 등록"} />

      <TopHeader>재고 조회</TopHeader>
    </div>
  );
};

export default SellStockLook;
