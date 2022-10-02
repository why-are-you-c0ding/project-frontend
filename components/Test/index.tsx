import React, { FC } from "react";

interface Props {
  optList: string[][];
}

const Test: FC<Props> = ({ optList }) => {
  const aaa: string[][] = optList;

  return (
    <div>
      {[...Array(5)].map((n, index) => {
        return <div>{optList}</div>;
      })}
    </div>
  );
};

export default Test;
