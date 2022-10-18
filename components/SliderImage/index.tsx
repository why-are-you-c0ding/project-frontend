import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderItem } from "@components/SliderImage/styles";
import { slideList } from "@utils/slideList";

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> 인기 상품</h2>
      <Slider {...settings}>
        {slideList.map((v, index) => (
          <SliderItem key={index}>
            <img src={v.src} alt={v.alt} />
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImage;
