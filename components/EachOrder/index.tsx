import React, { useCallback, useEffect, useState } from "react";
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
  ShopName,
} from "@components/EachOrder/styles";
import axios from "axios";
import { IEachOrder } from "@typings/db";

const EachOrder = () => {
  const location = useLocation();

  const {
    data: orderData,
    mutate: mutateOrder,
    error,
  } = useSWR<IEachOrder | undefined>(
    `https://waycabvav.shop/orders/${location.pathname.split("/")[2]}`,
    fetcher
  );

  const [isComplete, setIsComplete] = useState(
    orderData?.orderStatus === "COMPLETED"
  );

  useEffect(() => {
    setIsComplete(orderData?.orderStatus === "COMPLETED");
  }, [orderData]);

  const onClickUpdate = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      orderId: number | undefined,
      itemId: number | undefined
    ) => {
      e.preventDefault();

      axios
        .patch(
          "https://waycabvav.shop/orders",
          {
            orderId: orderId,
            itemId: itemId,
            orderStatus: isComplete ? "ONGOING" : "COMPLETED",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          alert("주문 상태가 변경되었습니다.");
          mutateOrder();
        })
        .catch((err) => {
          alert("주문 상태 변경에 실패하였습니다.");
        });
    },
    [isComplete]
  );

  const onClickUpdateOngoing = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      orderId: number | undefined,
      itemId: number | undefined
    ) => {
      e.preventDefault();

      axios
        .patch(
          "https://waycabvav.shop/orders",
          {
            orderId: orderId,
            itemId: itemId,
            orderStatus: "ONGOING",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          alert("주문 상태가 변경되었습니다.");
          mutateOrder();
        })
        .catch((err) => {
          alert("주문 상태 변경에 실패하였습니다.");
        });
    },
    []
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
        <RightSide style={{ margin: "-2rem" }}>
          <ItemName>
            <h3>{orderData?.itemName}</h3>
            <ShopName>{orderData?.shopName}</ShopName>
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
              <ItemInfo>{isComplete ? "주문 완료" : "주문 진행중"}</ItemInfo>
              <Button
                onClick={(event) => {
                  onClickUpdate(event, orderData?.orderId, orderData?.itemId);
                  setIsComplete((prev) => !prev);
                }}
              >
                {isComplete ? "주문 진행 상태" : "주문 완료 상태"}
              </Button>
            </DeliState>

            <h3>총 가격</h3>
            <ItemInfo>{orderData?.price}원</ItemInfo>
          </div>
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default EachOrder;
