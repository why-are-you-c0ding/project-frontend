import React, { FC, useCallback } from "react";
import { Wrapper } from "@components/CutItem/styles";
import axios from "axios";

interface Props {
  itemId: number;
}

const CutItem: FC<Props> = ({ itemId }) => {
  const onClickCut = useCallback(() => {
    axios
      .post(
        "http://localhost:8000/blocks",
        { item_id: itemId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
        alert("상품을 차단하지 못했습니다.");
      });
  }, []);

  return (
    <Wrapper>
      <span onClick={onClickCut}>아이템 차단</span>
    </Wrapper>
  );
};

export default CutItem;
