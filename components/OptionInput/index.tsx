import React, { ChangeEvent, FC, useCallback, useEffect } from "react";

import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { Wrapper } from "@components/OptionInput/styles";

interface Props {
  index: number;
  optList: string[][];
  optCount: number[][];
  optNames: string[][];
  sOptList: any;
  SetsOptList: any;
}

const OptionInput: FC<Props> = ({
  index,
  optList,
  optCount,
  optNames,
  sOptList,
  SetsOptList,
}) => {
  const [optValue, , setOptValue] = useInput("");
  const [optName, onChangeOptName, setOptName] = useInput("");

  const onChangeOptValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOptValue(e.target.value);
    },
    [optValue]
  );

  let opt: string[] = [];

  let count = 0;

  useEffect(() => {
    let temp = optValue.replace(/ /g, "");

    let ary: any = temp.split(",");
    opt.push(ary);

    if (optValue !== "") count = ary.length;
    else count = 0;

    optCount[index][0] = count;
    // console.log("여긴 개수");
    // console.log(optCount);
  });

  optList[index] = opt;
  optNames[index][0] = optName;
  SetsOptList(optList);

  let flatOptList: Array<string> = [];

  useEffect(() => {
    console.log("여긴 목록");
    console.log(optList);

    flatOptList = optList.flat().flat();
    console.log("flat");
    console.log(flatOptList);

    console.log(optNames);
  });

  return (
    <div>
      <Wrapper>
        <Input
          type="text"
          value={optName}
          onChange={onChangeOptName}
          placeholder="예시) 사이즈, 색상"
        />
        <Input
          type="text"
          placeholder="예시) s, m, l(,로 구분)"
          style={{ minWidth: "100px" }}
          value={optValue}
          onChange={onChangeOptValue}
        />
      </Wrapper>
    </div>
  );
};

export default OptionInput;
