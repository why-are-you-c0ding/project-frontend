import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import Sell from "@components/Sell";

const SellRegister = () => {
  return (
    <div>
      <ReponsiveBar title={"상품 등록"} />

      <TopHeader>상품 등록</TopHeader>
      <Sell />
    </div>
  );
};

export default SellRegister;
