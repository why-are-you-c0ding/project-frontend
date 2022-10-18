import React, { Component, useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderItem, Wrapper } from "@components/SliderImage/styles";
import { slideList } from "@utils/slideList";

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const a = useCallback(() => {}, []);

  return (
    <Wrapper>
      <Slider {...settings} className={"slide"}>
        {slideList.map((v, index) => (
          <SliderItem key={index}>
            <img src={v.src} alt={v.alt} />
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default SliderImage;
