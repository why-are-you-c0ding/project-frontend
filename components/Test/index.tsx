import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";

interface Props {
  test: any;
  setTest: any;
  flatOptList: any;
}

const Test: FC<Props> = ({ test, setTest, flatOptList }) => {
  // const [test, setTest] = useState([1, 2, 3]);

  const onChange = useCallback((e: any) => {
    // e.stopPropagation();
    // e.preventDefault();
    // e.stopImmediatePropagation();

    setTest([...test, 7]);

    console.log("눌림");
  }, []);

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setTest([...test, ...flatOptList]);
  }, []);

  let aaa: any = test;

  return (
    // <div onClick={stopPropagation}>
    <div>
      <button onChange={(event) => onChange(event)}>눌러!</button>
      <div>
        {aaa.map((v: any, index: number) => {
          return <div key={index}>{v}</div>;
        })}
      </div>
    </div>
  );
};

export default Test;
