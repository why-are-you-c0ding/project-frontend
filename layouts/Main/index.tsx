import React, { useCallback, useEffect, useRef, useState } from "react";
import StatusBar from "@components/StatusBar";
import { Inner, Slide, SlideList, SlideWrapper } from "@layouts/Main/styles";
import { slideList } from "@utils/slideList";

const Main = () => {
  const ref = useRef<any>(null);

  const [size, setSize] = useState(0);

  // setInterval(() => nextButton(), 4000);

  useEffect(() => {
    console.log(size);
    if (size > 0) {
      setSize(-((slideList.length - 1) * 100));
    }
  }, [size, setSize]);

  const nextButton = () => {
    let checkSize = size - 100;

    if (checkSize > -(slideList.length * 100)) {
      ref.current.style = `transform: translateX(${checkSize}vw)`;
      setSize(checkSize);
    } else {
      ref.current.style = "transform: translateX(0vw)";
      setSize(0);
    }
  };

  const prevButton = () => {
    let checkSize = size + 100;

    if (checkSize <= 0) {
      ref.current.style = `transform: translateX(${checkSize}vw)`;
      setSize(checkSize);
    } else {
      let temp = -(slideList.length - 1) * 100;
      ref.current.style = `transform: translateX(${temp}vw)`;
      setSize(temp);
    }
  };

  const slideBtn = (v: number): void => {
    let width = 100 * (v - 1);
    setSize(-width);
    ref.current.style = `transform: translateX(-${width}vw)`;
  };

  // setInterval(nextButton, 2000);

  return (
    <div>
      <StatusBar />
      <SlideWrapper>
        <Slide>
          <SlideList ref={ref}>
            {slideList.map((v) => {
              return (
                <Inner key={v.id}>
                  <img src={v.src} alt={v.alt} />
                </Inner>
              );
            })}
          </SlideList>
        </Slide>
        <div>
          <div>
            <button onClick={prevButton}>prev</button>
            <button onClick={nextButton}>next</button>
          </div>
          {slideList.map((v) => {
            return (
              <button key={v.id} onClick={() => slideBtn(v.id)}>
                {v.id}
              </button>
            );
          })}
        </div>
      </SlideWrapper>
    </div>
  );
};

export default Main;
