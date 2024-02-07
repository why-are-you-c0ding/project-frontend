import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";

import { Wrapper } from "@components/MyPages/MyInfo/styles";

const EditMyInfo = () => {
  return (
    <div>
      <ReponsiveBar title={"내 정보 수정하기"} />
      <Wrapper>내 정보를 수정해봅시다.</Wrapper>
    </div>
  );
};

export default EditMyInfo;
