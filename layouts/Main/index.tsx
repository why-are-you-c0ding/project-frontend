import React, { MutableRefObject, useRef, useState } from "react";
import StatusBar from "@components/StatusBar";
import { Inner, Slide, Wrapper } from "@layouts/Main/styles";
import { slideList } from "@utils/slideList";

const Main = () => {
  const ref = useRef<any>(null);

  const nextButton = () => {
    ref.current.style = "translate: -100vw";
  };

  const prevButton = () => {
    ref.current.style = "translate: 100vw";
  };

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <Slide ref={ref}>
          {slideList.map((v) => {
            return (
              <Inner key={v.id}>
                <img src={v.src} alt={v.alt} />
              </Inner>
            );
          })}
        </Slide>
        <div>
          <button onClick={prevButton}>prev</button>
          <button onClick={nextButton}>next</button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Main;
