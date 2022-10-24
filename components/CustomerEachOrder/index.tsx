import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import StatusBar from "@components/StatusBar";
import {
  Item,
  ItemInfo,
  ItemName,
  LeftSide,
  MiddleSide,
  RightSide,
  Wrapper,
  Button,
  OptInfo,
  DeliState,
} from "@components/EachOrder/styles";
import axios from "axios";
import { IEachOrder } from "@typings/db";

const CustomerEachOrder = () => {
  const location = useLocation();
  const { data: orderData, error } = useSWR<IEachOrder | undefined>(
    `https://waycabvav.shop/orders/${location.pathname.split("/")[2]}`,

    fetcher
  );

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <Item>
            <img src={orderData?.itemImageUrl} alt="상품 사진" />
          </Item>
        </LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          <ItemName>
            <h2>{orderData?.itemName}</h2>
            <ItemInfo
              style={{
                fontSize: "0.9rem",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              {orderData?.shopName}
            </ItemInfo>
          </ItemName>

          <div style={{ padding: "0 1rem" }}>
            <h3>고객 주소</h3>
            <ItemInfo>도로 번호: {orderData?.address?.zipcode}</ItemInfo>
            <ItemInfo>주소: {orderData?.address?.major}</ItemInfo>
            <ItemInfo>상세 주소: {orderData?.address?.detail}</ItemInfo>

            <h3>선택 옵션</h3>
            {[...Array(orderData?.orderOptionGroups.length)].map((v, index) => {
              return (
                <OptInfo key={index}>
                  {orderData?.orderOptionGroups[index].option.name}
                  {index !==
                  (orderData?.orderOptionGroups.length
                    ? orderData?.orderOptionGroups.length - 1
                    : 0)
                    ? ", "
                    : ""}
                </OptInfo>
              );
            })}

            <h3>수량</h3>
            <ItemInfo>{orderData?.count}개</ItemInfo>

            <h3>배송 상태</h3>
            <DeliState>
              <ItemInfo>
                {orderData?.orderStatus === "ONGOING"
                  ? "주문 진행중"
                  : "주문 완료"}
              </ItemInfo>
              <Button>주문 취소 버튼</Button>
            </DeliState>

            <h3>총 가격</h3>
            <ItemInfo>{orderData?.price}원</ItemInfo>
          </div>
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default CustomerEachOrder;
