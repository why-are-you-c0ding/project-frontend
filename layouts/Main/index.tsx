import React, { useCallback, useEffect, useRef, useState } from "react";
import StatusBar from "@components/StatusBar";
import MainItem from "@components/MainItem";
import axios from "axios";
import SliderImage from "@components/SliderImage";

const Main = () => {
  const onLogout = useCallback(() => {
    axios
      .post("https://waycabvav.shop/logout", null, {
        withCredentials: true,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => {});
  }, []);

  return (
    <div>
      <StatusBar />

      <SliderImage />
      <MainItem />
    </div>
  );
};

export default Main;
