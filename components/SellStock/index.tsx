import React, { ChangeEvent, useCallback, useState } from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import axios from "axios";
import useInput from "@hooks/useInput";
import { Input } from "@components/Option/styles";
import { Wrapper, InputLine, BuyBtn } from "@components/SellStock/styles";

const SellStock = () => {
  const [quantity, onChangeQuantity, setQuantity] = useInput("");

  const [optList, setoptlist] = useState({
    optlist1: "",
  });

  const { optlist1 } = optList;

  const handleIdList = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setoptlist({
      ...optList,
      [name]: value,
    });
  };

  //list에 optlist객체 값 넣기
  let list: any[] = Object.values(optList);

  //푸시할 배열 생성
  let optionIdList: any[] = [];

  //,을 기준으로 나누어서 삽입 split하면 문자열로 들어가기 때문에 number로 변환
  let change = list[0].replace(/\s/g, "").split(",").map(Number);
  optionIdList.push(change);

  //전달할 quantity 확인
  console.log(quantity);

  //전달 할 optionIdList 확인
  console.log(list);
  console.log(optionIdList);

  const onSubmitStock = useCallback(
    (e: any) => {
      e.preventDefault();

      axios
        .post(
          "https://waycabvav.shop/stocks",
          {
            optionIdList: optionIdList[0],
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
    [quantity, optionIdList]
  );

  return (
    <Wrapper>
      <ReponsiveBar title={"재고 등록"} />

      <TopHeader>재고 등록</TopHeader>
      <InputLine>
        <h1>등록 할 수량</h1>
        <Input
          type="number"
          name="quantity"
          value={quantity}
          onChange={onChangeQuantity}
          placeholder="예) 1000"
        />
        <h1>등록 할 상품 ID</h1>
        <Input
          type="text"
          name="optlist1"
          value={optlist1}
          onChange={handleIdList}
          placeholder="예) 23,25"
        />
      </InputLine>
      <BuyBtn onClick={onSubmitStock}>재고 등록</BuyBtn>
    </Wrapper>
  );
};

export default SellStock;
