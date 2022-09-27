import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { Wrapper } from "@components/OptionInput/styles";
import Test from "@components/Test";

interface Props {
  index: number;
  optList: string[][];
  setOptList: Dispatch<SetStateAction<never[][]>>;
  optCount: number[][];
  optNames: string[][];
}

const OptionInput: FC<Props> = ({ index, optList, optCount, optNames }) => {
  const [optValue, , setOptValue] = useInput("");
  const [optName, onChangeOptName, setOptName] = useInput("");
  const [test, setTest] = useState([1, 2, 3]);

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

    optList[index] = opt;
    optNames[index][0] = optName;
  });

  let flatOptList: Array<string> = [];

  useEffect(() => {
    console.log("여긴 옵션값");
    console.log(optList);

    flatOptList = optList.flat().flat();
    console.log("저는 옵션값 flat");
    console.log(flatOptList);

    console.log("나는 옵션명");
    console.log(optNames);
  });

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  return (
    <div style={{ border: "1px solid" }} onClick={stopPropagation}>
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

      <Test test={test} setTest={setTest} flatOptList={flatOptList} />
    </div>
  );
};

export default OptionInput;
