import React from "react";

import {
  BuyBtn,
  Delete,
  ItemTitle,
  ListBox,
  MiddleSide,
  RightSide,
  Wrapper,
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";

const Like = () => {
  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>관심 상품</TopHeader>
        <ListBox>
          <table>
            <img
              src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
              alt=""
            />
            <ItemTitle>
              <div>강아지</div>
              <div>레브라도 리트리버</div>
              <div>짱 귀여워</div>
            </ItemTitle>
            <MiddleSide>
              <div>수량</div>
            </MiddleSide>
            <RightSide>
              <BuyBtn>
                <div>구매</div>
                <div>200원</div>
              </BuyBtn>
              <Delete>삭제</Delete>
            </RightSide>
          </table>
        </ListBox>
        <ListBox>
          <table>
            <img
              src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
              alt=""
            />
            <ItemTitle>
              <div>강아지</div>
              <div>레브라도 리트리버</div>
              <div>짱 귀여워</div>
            </ItemTitle>
            <MiddleSide>
              <div>수량</div>
            </MiddleSide>
            <RightSide>
              <BuyBtn>
                <div>구매</div>
                <div>200원</div>
              </BuyBtn>
              <Delete /**onClick={}**/>삭제</Delete>
            </RightSide>
          </table>
        </ListBox>
      </Wrapper>
    </div>
  );
};

export default Like;
