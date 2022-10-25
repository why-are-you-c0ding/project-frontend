import React, { useCallback, useEffect, useRef, useState } from "react";
import StatusBar from "@components/StatusBar";
import MainItem from "@components/MainItem";
import axios from "axios";
import SliderImage from "@components/SliderImage";
import { Scrollbars } from "react-custom-scrollbars";
import Recommend from "@components/Recommend";

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
  const scrollbarRef = useRef(null);
  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0) {
      console.log("가장 위인듯");
    }
  }, []);

  return (
    <div>
      <StatusBar />
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        <SliderImage />
        <Recommend />
        <MainItem />
      </Scrollbars>
    </div>
  );
};

export default Main;
