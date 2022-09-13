import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";

const Address = () => {
  return (
    <div>
      <ReponsiveBar title={"주소록"} />

      <TopHeader>주소록</TopHeader>
    </div>
  );
};

export default Address;
