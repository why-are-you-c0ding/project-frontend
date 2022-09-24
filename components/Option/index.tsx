import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import { ItemTitle } from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import { OptCount, OptInput, OptList } from "@components/Option/styles";
import OptionInput from "@components/OptionInput";

const Option = () => {
  const optionCount = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(1);

  let optList: string[][] = [[], [], [], [], []];
  let optCount: number[][] = [[0], [0], [0], [0], [0]];

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
            <div className="firstOpt">
              <span>옵션명</span>
              {[...Array(count)].map((n, index) => {
                return (
                  <div key={index}>
                    <Input type="text" placeholder="예시) 사이즈, 색상" />
                  </div>
                );
              })}
            </div>
            <div>
              <span>옵션값</span>
              {[...Array(count)].map((n, index) => {
                return (
                  <div key={index}>
                    <OptionInput
                      index={index}
                      optList={optList}
                      optCount={optCount}
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
