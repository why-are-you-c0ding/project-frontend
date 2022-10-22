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
} from "@components/Buy/styles";
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
            <ItemName>{OrderData?.itemName}</ItemName>
          </Itemdetail>
          <Option>
            <div>
              <div>
                <h4>수량: {OrderData?.count}</h4>
                <div>배송 상태: {OrderData?.orderStatus}</div>
              </div>
            </div>
          </Option>

          <ItemInfo>{OrderData?.address?.major}</ItemInfo>
          <ItemInfo>{OrderData?.address?.detail}</ItemInfo>
          <ItemInfo>{OrderData?.address?.zipcode}</ItemInfo>
          {[...Array(OrderData?.orderOptionGroups.length)].map((v, index) => {
            return (
              <ItemInfo>
                {OrderData?.orderOptionGroups[index].option.name}
              </ItemInfo>
            );
          })}

          <TotalPrice>가게 이름: {OrderData?.shopName}</TotalPrice>

          <Btn>
            <div></div>
          </Btn>
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default EachOrder;
