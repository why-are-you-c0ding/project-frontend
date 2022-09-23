import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ItemTitle } from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { OptCount, OptInput, OptList } from "@components/Option/styles";

const Option = () => {
  const optionCount = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(1);

  const [optName0, onChangeOptName0, setOpt0] = useInput("");
  const [optName1, onChangeOptName1, setOpt1] = useInput("");
  const [optName2, onChangeOptName2, setOpt2] = useInput("");
  const [optName3, onChangeOptName3, setOpt3] = useInput("");
  const [optName4, onChangeOptName4, setOpt4] = useInput("");

  const handleCountSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const cnt = parseInt(e.target.value);
    setCount(cnt);
  }, []);

  let opt: string[][] = [];

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const t = eval(`optName${i}`);

      if (t) {
        console.log(t);

        let temp = t;
        let ary: Array<string> = temp.split(",");
        console.log(ary);
        opt.push(ary);
        console.log(opt);
      } else break;
    }
  });

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
                    <Input
                      type="text"
                      placeholder="예시) s, m, l(,로 구분)"
                      style={{ width: "30vw" }}
                      value={eval(`optName${index}`)}
                      onChange={eval(`onChangeOptName${index}`)}
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
