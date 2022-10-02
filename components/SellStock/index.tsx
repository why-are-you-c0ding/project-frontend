import React, { ChangeEvent, useCallback, useState } from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import axios from "axios";
import useInput from "@hooks/useInput";
import { Input } from "@components/Option/styles";
import { BuyBtn } from "@components/Sell/styles";

const SellStock = () => {
  const [quantity, onChangeQuantity, setQuantity] = useInput("");

  const [optlist, setoptlist] = useState({
    optlist1: "",
  });

  const { optlist1 } = optlist;

  const onChangeOptValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setoptlist({
      ...optlist,
      [name]: value,
    });
  };

  let list: any[] = Object.values(optlist);

  let optidlist: any[] = [];

  //,을 기준으로 나누어서 삽입
  let te = list[0].replace(/\s/g, "").split(",");
  optidlist.push(te);

  //전달할 quantity 확인
  console.log(quantity);

  //전달 할 optionIdList 확인
  console.log(optidlist);

  const onSubmitStock = useCallback(
    (e: any) => {
      e.preventDefault();

      axios
        .post(
          "https://waycabvav.shop/stocks",
          {
            quantity: quantity,
            optidlist: optidlist,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2tlbiIsImlkIjo0MiwiYXV0aG9yaXRpZXMiOiJST0xFX1NFTExFUiIsImlhdCI6MTY2NDcyMzM2MywiZXhwIjoxNjY0NzIzNDUwfQ.92_ytXfQwYtqLhvLO7f6VTAxnIBXcaUXeygtBN4apCoinbZSrr3bKBuz3L9b_cP1UiNsMkCTFUQ2oCIJYAJ3bg",
            },
          }
        )
        .then((response) => {
          alert("등록 성공!");
        })
        .catch((err) => {
          alert("등록 실패");
        });
    },
    [quantity]
  );
  return (
    <div>
      <ReponsiveBar title={"재고 등록"} />

      <TopHeader>재고 등록</TopHeader>
      <div>
        <Input
          type="text"
          name="quantity"
          value={quantity}
          onChange={onChangeQuantity}
        />
      </div>
      <Input
        type="text"
        name="optlist1"
        value={optlist1}
        onChange={onChangeOptValue}
      />
      <div></div>
      <BuyBtn onClick={onSubmitStock}>재고 등록</BuyBtn>
    </div>
  );
};

export default SellStock;
