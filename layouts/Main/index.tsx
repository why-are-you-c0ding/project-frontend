import React, { useCallback, useEffect, useRef, useState } from "react";
import StatusBar from "@components/StatusBar";
import MainItem from "@components/MainItem";
import {
  Inner,
  Slide,
  SlideList,
  SlideWrapper,
  MoreBtn,
} from "@layouts/Main/styles";
import { slideList } from "@utils/slideList";
import axios from "axios";
import SliderImage from "@components/SliderImage";

const Main = () => {
  const ref = useRef<any>(null);

  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log(size);
    if (size > 0) {
      setSize(-((slideList.length - 1) * 100));
    }
  }, [size, setSize]);

  const nextButton = useCallback(() => {
    let checkSize = size - 100;

    if (checkSize > -(slideList.length * 100)) {
      setSize(checkSize);
      ref.current.style = `transform: translateX(${checkSize}vw)`;
    } else {
      setSize(0);
      ref.current.style = "transform: translateX(0vw)";
    }
  }, [size, setSize]);

  const prevButton = useCallback(() => {
    let checkSize = size + 100;

    if (checkSize <= 0) {
      setSize(checkSize);
      ref.current.style = `transform: translateX(${checkSize}vw)`;
    } else {
      let temp = -(slideList.length - 1) * 100;
      setSize(temp);
      ref.current.style = `transform: translateX(${temp}vw)`;
    }
  }, [size, setSize]);

  const slideBtn = useCallback(
    (v: number): void => {
      let width = 100 * (v - 1);
      setSize(-width);
      ref.current.style = `transform: translateX(-${width}vw)`;
    },
    [size, setSize]
  );

  // setInterval(nextButton, 2000);

  // useEffect(() => {
  //   setTimeout(nextButton, 2000);
  // }, [size, setSize, nextButton, prevButton, slideBtn]);
  // const { data, error, mutate} = useSWR("https://waycabvav.shop/login", fetcher);

  const onLogout = useCallback(() => {
    axios
      .post("https://waycabvav.shop/logout", null, {
        withCredentials: true,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => {});
  }, []);

  //로그인 안되어 있으면 로그인 창으로 가세요
  // if(!data){
  //   return <Redirect to="/login"/>
  // }

  return (
    <div>
      <StatusBar />
      {/*<SlideWrapper>*/}
      {/*  <Slide>*/}
      {/*    <SlideList ref={ref}>*/}
      {/*      {slideList.map((v) => {*/}
      {/*        return (*/}
      {/*          <Inner key={v.id}>*/}
      {/*            <img src={v.src} alt={v.alt} />*/}
      {/*          </Inner>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </SlideList>*/}
      {/*  </Slide>*/}
      {/*  <div>*/}
      {/*    <div>*/}
      {/*      <button onClick={prevButton}>prev</button>*/}
      {/*      <button onClick={nextButton}>next</button>*/}
      {/*    </div>*/}
      {/*    {slideList.map((v) => {*/}
      {/*      return (*/}
      {/*        <button key={v.id} onClick={() => slideBtn(v.id)}>*/}
      {/*          {v.id}*/}
      {/*        </button>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</SlideWrapper>*/}
      <SliderImage />
      <MainItem />
      {/*<button onClick={onLogout}>로그아웃 버튼버튼버튼</button>*/}
    </div>
  );
};

export default Main;
