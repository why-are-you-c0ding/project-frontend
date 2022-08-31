import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import StatusBar from "@components/StatusBar";
import { Inner, Slide, Wrapper } from "@layouts/Main/styles";
import { slideList } from "@utils/slideList";

const Main = () => {
  const ref = useRef<any>(null);

  // const first = () => {
  //   ref.current.style = "translate: 0vw";
  // };
  //

  const [size, setSize] = useState(-100);

  useEffect(() => {
    console.log(size);
    if (size > 0) {
      setSize(-((slideList.length - 1) * 100));
    }
  }, [size, setSize]);

  const nextButton = () => {
    // setSize(size - 100);
    let checkSize = size - 100;

    if (checkSize <= 0) {
      setSize(checkSize);
      ref.current.style = `transform: translateX(${size}vw)`;
    }
  };

  const prevButton = () => {
    // setSize(size + 100);
    let checkSize = size + 100;

    if (checkSize <= 0) {
      setSize(checkSize);
      ref.current.style = `transform: translateX(${size}vw)`;
    } else {
      setSize(-(slideList.length - 1) * 100);
      ref.current.style = `transform: translateX(${size}vw)`;
    }
  };

  const slideBtn = (v: number): void => {
    let width = 100 * (v-1);
    setSize(-width);
    ref.current.style = `transform: translateX(-${width}vw)`;
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
      </Wrapper>
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
    </div>
  );
};

export default Main;
