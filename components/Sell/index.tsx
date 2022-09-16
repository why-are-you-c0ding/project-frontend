import React from "react";
import StatusBar from "@components/StatusBar";
import {
  Wrapper,
  LeftSide,
  MiddleSide,
  RightSide,
  Btn,
  BuyBtn,
} from "@components/Sell/styles";

import { Itemdetail, ItemFullName, ItemName } from "@components/Buy/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";

const Sell = () => {
  const [itemname, onChangeItemname, setItemName] = useInput("");
  const [itemfullname, onChangeitemfullname, setItemFullName] = useInput("");
  const [price, onChangeprice, setprice] = useInput("");

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <img src={"/img/profile.png"}></img>
          <input type="file"></input>
        </LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          <Itemdetail>
            <ItemName>상품 이름</ItemName>
            <Input
              type="text"
              name="item-name"
              value={itemname}
              onChange={onChangeItemname}
              placeholder=" 예시) 잠만보"
            />
            <ItemFullName>상세 이름을 적어주세요</ItemFullName>
            <Input
              type="text"
              name="item-fullname"
              value={itemfullname}
              onChange={onChangeitemfullname}
              placeholder=" 예시) 잠만보 진짜 잠만 잠"
            />
            <ItemFullName>가격</ItemFullName>
            <Input
              type="text"
              name="price"
              value={price}
              onChange={onChangeprice}
              placeholder=" 예시) 20300원"
            />
          </Itemdetail>
          <Btn>
            <BuyBtn type="submit">판매</BuyBtn>
          </Btn>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Sell;
