import React from "react";
import StatusBar from "@components/StatusBar";
import SliderImage from "@components/SliderImage";

import MainItem from "@components/MainItem";

const Main = () => {
  return (
    <div>
      <StatusBar />
      <div style={{ marginTop: "7rem" }}></div>
      <SliderImage />

      <MainItem />
    </div>
  );
};

export default Main;
