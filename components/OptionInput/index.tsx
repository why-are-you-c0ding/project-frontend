import React, {
  ChangeEvent,
  DetailedHTMLProps,
  Dispatch,
  ElementType,
  FC,
  HTMLAttributes,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

// import produce from "immer";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { StyledComponent } from "@emotion/styled";
import { Theme } from "@emotion/react";

interface Props {
  setOptInput: Dispatch<SetStateAction<string[][]>>;
  OptInput: StyledComponent<
    { theme?: Theme | undefined; as?: ElementType<any> | undefined },
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    {}
  >;
}

const OptionInput: FC<Props> = ({ OptInput, setOptInput }) => {
  const [optName, , setOpt] = useInput("");

  const onChangeOptName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOpt(e.target.value);
    },
    [optName]
  );

  let opt: string[] = [];

  useEffect(() => {
    const t = optName;
    console.log(t);

    let temp = t.replace(/ /g, "");

    let ary: any = temp.split(",");
    console.log(ary);
    opt.push(ary);
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
