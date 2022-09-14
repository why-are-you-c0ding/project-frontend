import React from "react";
import DetailOrder from "@components/DetailOrder";
import ReponsiveBar from "@components/ReponsiveBar";
import { TopHeader } from "@pages/MyPage/styles";

const Buying = () => {
  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />

      <TopHeader>주문 내역</TopHeader>

      <DetailOrder />
    </div>
  );
};

export default Buying;
