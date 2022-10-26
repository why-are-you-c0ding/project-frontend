import React from "react";

import {} from "@pages/Search/styles";

import StatusBar from "@components/StatusBar";
import { TitleContainer, Wrapper } from "@components/MainItem/styles";

const Address = () => {
  return (
    <Wrapper>
      <StatusBar />
      <TitleContainer>
        <h2>검색</h2>
      </TitleContainer>
    </Wrapper>
  );
};

export default Address;
