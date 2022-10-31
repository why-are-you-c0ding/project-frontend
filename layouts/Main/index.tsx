import React, { useState } from "react";
import StatusBar from "@components/StatusBar";
import SliderImage from "@components/SliderImage";

import Recommend from "@components/Recommend";
import MainItem from "@components/MainItem";

const Main = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("jwt") !== null);

  return (
    <div>
      <StatusBar />
      <div style={{ marginTop: "7rem" }}></div>
      <SliderImage />

      {isLogin && <Recommend />}
      {!isLogin && <MainItem />}
    </div>
  );
};

export default Main;
