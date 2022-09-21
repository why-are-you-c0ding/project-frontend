import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ItemTitle } from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";

const Option = () => {
  const optionCount = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(1);

  // const [optName1, onChangeOptName1, setOpt1] = useInput("");
  // const [optName2, onChangeOptName2, setOpt2] = useInput("");
  // const [optName3, onChangeOptName3, setOpt3] = useInput("");
  // const [optName4, onChangeOptName4, setOpt4] = useInput("");
  // const [optName5, onChangeOptName5, setOpt5] = useInput("");

  const handleCountSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const cnt = parseInt(e.target.value);
    setCount(cnt);
  }, []);

  return (
    <div>
      <h2>옵션</h2>
      <div>
        <div>
          <ItemTitle>옵션 개수</ItemTitle>
          <div>
            <select onChange={handleCountSelect} value={count}>
              {optionCount.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <ItemTitle>옵션 입력</ItemTitle>
          <div>
            <span>옵션명</span>
            {[...Array(count)].map((n, index) => {
              return (
                <div key={index}>
                  <Input type="text" placeholder="예시) 사이즈, 색상" />
                </div>
              );
            })}
            <div>
              <span>옵션값</span>
              {[...Array(count)].map((n, index) => {
                return (
                  <div key={index}>
                    <Input
                      type="text"
                      // value={`optName${index + 1}`}
                      // onChange={`onChangeOptName${index + 1}`}
                      placeholder="예시) s, m, l(,로 구분)"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
