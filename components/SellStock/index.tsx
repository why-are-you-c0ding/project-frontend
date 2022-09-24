import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";

const SellStock = () => {
  return (
    <div>
      <ReponsiveBar title={"재고 등록"} />

      <TopHeader>재고 등록</TopHeader>
    </div>
  );
};

export default SellStock;
