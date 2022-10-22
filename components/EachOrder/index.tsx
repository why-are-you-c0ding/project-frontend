import React from "react";
import { Link, useLocation } from "react-router-dom";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import StatusBar from "@components/StatusBar";
import {
  Btn,
  BuyBtn,
  CountBtn,
  Item,
  Itemdetail,
  ItemInfo,
  ItemName,
  LeftSide,
  MiddleSide,
  Option,
  RightSide,
  SelectBtn,
  TotalPrice,
  Wrapper,
} from "@components/EachOrder/styles";
import option from "@components/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const EachOrder = () => {
  const location = useLocation();
  const { data: OrderData, error } = useSWR<any>(
    `https://waycabvav.shop/orders/${location.pathname.split("/")[2]}`,

    fetcher
  );

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <Item>
            <img src={OrderData?.itemImageUrl} alt="상품 사진" />
          </Item>
        </LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          <Itemdetail>
            <ItemName>
              <span>{OrderData?.itemName}</span>
              <span>수량: {OrderData?.count}</span>
            </ItemName>
          </Itemdetail>
          <Option>
            <div>
              <div>
                <div>배송 상태: {OrderData?.orderStatus}</div>
              </div>
            </div>
          </Option>

          <ItemInfo>주소: {OrderData?.address?.major}</ItemInfo>
          <ItemInfo>상세 주소: {OrderData?.address?.detail}</ItemInfo>
          <ItemInfo>도로 번호: {OrderData?.address?.zipcode}</ItemInfo>
          {[...Array(OrderData?.orderOptionGroups.length)].map((v, index) => {
            return (
              <ItemInfo>
                선택 옵션: {OrderData?.orderOptionGroups[index].option.name}
              </ItemInfo>
            );
          })}

          <ItemInfo>주문한 가게 이름: {OrderData?.shopName}</ItemInfo>
          <TotalPrice>총가격: {OrderData?.price}원</TotalPrice>

          <Btn>
            <div></div>
          </Btn>
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default EachOrder;
