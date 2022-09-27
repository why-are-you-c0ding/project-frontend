import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import { ItemTitle } from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import {
  OptCount,
  OptInput,
  OptInputTitle,
  OptList,
} from "@components/Option/styles";
import OptionInput from "@components/OptionInput";
import useInput from "@hooks/useInput";

const Option = () => {
  const optionCount = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(1);
  // const [test, setTest] = useState([1, 2, 3]);
  //
  // const onChange = useCallback((e: any) => {
  //   e.stopPropagation();
  //
  //   setTest([...test, 7]);
  //   console.log("눌림");
  //
  //   e.stopPropagation();
  // }, []);

  let optNames: string[][] = [[], [], [], [], []];
  // let optList: string[][] = [[], [], [], [], []];
  let optCount: number[][] = [[0], [0], [0], [0], [0]];

  const [optList, setOptList] = useState([[]]);

  const handleCountSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const cnt = parseInt(e.target.value);
    setCount(cnt);
  }, []);

  return (
    <div>
      <h2>옵션</h2>
      <div>
        <OptCount>
          <ItemTitle style={{ fontSize: "1.2rem" }}>옵션 개수</ItemTitle>
          <div>
            <select onChange={handleCountSelect} value={count}>
              {optionCount.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </OptCount>

        <div>
          <ItemTitle style={{ fontSize: "1.2rem" }}>옵션 입력</ItemTitle>
          <OptInput>
            <div>
              <OptInputTitle>
                <span className="optName">옵션명</span>
                <span className="optTitle">옵션값</span>
              </OptInputTitle>
              {[...Array(count)].map((n, index) => {
                return (
                  <div key={index}>
                    <OptionInput
                      index={index}
                      optList={optList}
                      setOptList={setOptList}
                      optCount={optCount}
                      optNames={optNames}
                    />
                  </div>
                );
              })}
            </div>
          </OptInput>

          <OptList></OptList>
        </div>
      </div>
    </div>
  );
};

export default Option;
