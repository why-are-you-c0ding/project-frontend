import React, { ChangeEvent, FC, useCallback, useEffect } from "react";

import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";

interface Props {
  index: number;
  optList: string[][];
  optCount: number[][];
}

const OptionInput: FC<Props> = ({ index, optList, optCount }) => {
  const [optName, , setOpt] = useInput("");

  const onChangeOptName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOpt(e.target.value);
    },
    [optName]
  );

  let opt: string[] = [];

  let count = 0;

  useEffect(() => {
    let temp = optName.replace(/ /g, "");

    let ary: any = temp.split(",");
    opt.push(ary);

    if (optName !== "") count = ary.length;
    else count = 0;

    optCount[index][0] = count;
    console.log("여긴 개수");
    console.log(optCount);
  });

  optList[index] = opt;

  useEffect(() => {
    console.log("여긴 목록");
    console.log(optList);

    console.log("_______");
  });

  return (
    <div>
      <Input
        type="text"
        placeholder="예시) s, m, l(,로 구분)"
        style={{ width: "30vw" }}
        value={optName}
        onChange={onChangeOptName}
      />
    </div>
  );
};

export default OptionInput;
