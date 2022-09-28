import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import { ItemTitle } from "@components/Sell/styles";
import {
  Input,
  OptCount,
  OptNameInput,
  OptTable,
} from "@components/Option/styles";

const Option = () => {
  //optName
  const [optName, setOptName] = useState({
    optName1: "",
    optName2: "",
    optName3: "",
    optName4: "",
    optName5: "",
  });

  const { optName1, optName2, optName3, optName4, optName5 } = optName;

  const onChangeOptName = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptName({
      ...optName,
      [name]: value,
    });
  };

  //optValue
  const [optValue, setOptValue] = useState({
    optValue1: "",
    optValue2: "",
    optValue3: "",
    optValue4: "",
    optValue5: "",
  });

  const { optValue1, optValue2, optValue3, optValue4, optValue5 } = optValue;

  const onChangeOptValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptValue({
      ...optValue,
      [name]: value,
    });
  };

  let OptNameAll: string[] = Object.values(optName);

  let OptValueAll: string[] = Object.values(optValue);
  let opt: string[][] = [];

  for (let i = 0; i < 5; i++) {
    let te = OptValueAll[i].replace(/\s/g, "").split(",");
    opt.push(te);
  }

  let optFlat = opt.flat().flatMap((x) => [[x]]);
  console.log(optFlat);

  const optionCount = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(1);

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

        <ItemTitle style={{ fontSize: "1.2rem" }}>옵션 입력</ItemTitle>

        <OptNameInput>
          <div>
            <span>옵션명</span>
            <span>옵션값</span>
          </div>
          <div>
            <Input
              type="text"
              name="optName1"
              value={optName1}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue1"
              value={optValue1}
              onChange={onChangeOptValue}
            />
          </div>

          <div>
            <Input
              type="text"
              name="optName2"
              value={optName2}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue2"
              value={optValue2}
              onChange={onChangeOptValue}
            />
          </div>
          <div>
            <Input
              type="text"
              name="optName3"
              value={optName3}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue3"
              value={optValue3}
              onChange={onChangeOptValue}
            />
          </div>

          <div>
            <Input
              type="text"
              name="optName4"
              value={optName4}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue4"
              value={optValue4}
              onChange={onChangeOptValue}
            />
          </div>
          <div>
            <Input
              type="text"
              name="optName5"
              value={optName5}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue5"
              value={optValue5}
              onChange={onChangeOptValue}
            />
          </div>
        </OptNameInput>

        <OptTable>
          <h2>옵션 목록(추가 가격)</h2>
          {optFlat.map((v, index) => {
            if (v[0] !== "") {
              return (
                <div key={index}>
                  <span>{v}</span>
                  <Input type="text" />
                </div>
              );
            }
          })}
        </OptTable>
      </div>
    </div>
  );
};

export default Option;
