import React from "react";
import DetailOrder from "@components/DetailOrder";
import ReponsiveBar from "@components/ReponsiveBar";

const Buying = () => {
  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />

      <DetailOrder />
    </div>
  );
};

export default Buying;
