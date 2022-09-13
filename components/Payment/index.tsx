import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";

const Payment = () => {
  return (
    <div>
      <ReponsiveBar title={"결제 정보"} />

      <TopHeader>결제 정보</TopHeader>
    </div>
  );
};

export default Payment;
