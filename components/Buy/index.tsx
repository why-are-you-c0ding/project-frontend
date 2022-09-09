import React from "react";
import StatusBar from "@components/StatusBar";
import {
  Wrapper,
  LeftSide,
  MiddleSide,
  RightSide,
  Item,
  ItemName,
  ItemFullName,
  ItemKorean,
  Itemdetail,
  Btn,
  BuyBtn,
  SelectBtn,
  DetailOrder,
  Delivery,
  DeliveryTitle,
  DeliveryInfo,
  DeliveryPrice,
  DeliverySub,
} from "@components/Buy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping,faTruck } from "@fortawesome/free-solid-svg-icons";

const Buy = () => {
  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <Item>
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMzFfNjEg/MDAxNDkwOTM2NjE4MDQy.eIMvlKaVriccpz8TPo-Wyagr3J6oEz_pRe3S32gADVIg.jQUkh4ws9TiGn6y2h2iu3z5xmyKvxrRMgS0rjJVTRPQg.PNG.jkirby/%EC%9E%A0%EB%A7%8C%EB%B3%B4.png?type=w800"
              alt=""
            />
          </Item>
        </LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          <Itemdetail>
            <ItemName>잠만보</ItemName>
            <ItemFullName>jamombo real deep sleep</ItemFullName>
            <ItemKorean>잠만보 진짜 잠만잠</ItemKorean>
          </Itemdetail>
          <Btn>
            <BuyBtn type="submit">구매</BuyBtn>
            <SelectBtn type="submit">
              <FontAwesomeIcon icon={faBasketShopping} />
              관심상품
            </SelectBtn>
          </Btn>
          <DetailOrder>
            <span>상품 정보</span>
            <table>
              <span>
                <div>모델번호</div>
              </span>
              <span>
                <div>출시일</div>
              </span>
              <span>
                <div>컬러</div>
              </span>
              <span>
                <div>발매가</div>
              </span>
            </table>
          </DetailOrder>
          <Delivery>
            <DeliveryTitle>배송정보<FontAwesomeIcon icon={faTruck} /></DeliveryTitle>
            <DeliveryInfo>
              <DeliveryPrice>일반배송 3000원</DeliveryPrice>
              <DeliverySub>검수 후 배송 5-7일 내 도착 예정</DeliverySub>
            </DeliveryInfo>
          </Delivery>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Buy;
