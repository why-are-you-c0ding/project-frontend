import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReponsiveBar from "@components/ReponsiveBar";
import { TopHeader } from "@pages/MyPage/styles";
import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemInfo,
} from "@components/Like/styles";
import useSWRInfinite from "swr/infinite";
import fetcher from "@utils/fetcher";
import { Wrapper } from "@components/Buying/styles";
import { useInView } from "react-intersection-observer";

const Buying = () => {
  const {
    data: orderData,
    size,
    setSize,
  } = useSWRInfinite<any>(
    (index) => `https://waycabvav.shop/orders/customers?page=${index}`,
    fetcher
  );

  let orderList: any = [];

  if (orderData) {
    for (let i = 0; i < orderData?.length; i++) {
      orderList.push(orderData[i].orders);
    }
  }

  const onClick = useCallback(() => {
    if (!orderData?.[orderList.length - 1]?.finalPage)
      setSize((prev) => prev + 1);
  }, [orderData]);

  orderList = orderList.flat();

  const [ref, inView] = useInView();

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setSize((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <Wrapper id="sc">
      <ReponsiveBar title={"주문 내역"} />

      <TopHeader>주문 내역</TopHeader>

      <div style={{ marginTop: "6rem", padding: "0 2rem" }}>
        {orderData &&
          orderList &&
          orderList?.map((v: any, index: number) => {
            return index === orderList.length - 3 ? (
              <CartItem key={index} ref={ref}>
                <img src={v.itemImageUrl} alt="" />
                <ItemInfo>
                  <InfoTop>
                    <div>
                      <span>{v.itemName}</span>
                      <span>{v.shopName}</span>
                    </div>
                    <div></div>
                  </InfoTop>
                  <InfoBottom>
                    <div>
                      <span>2~3일 내 도착</span>
                    </div>
                    <div>
                      <div>
                        <span>2개</span>
                      </div>

                      <div>
                        <span style={{}}>총 금액: 20000원</span>
                        {/*<span>*/}
                        {/*  <button onClick={(event) => {}}>*/}
                        {/*    <span style={{ fontSize: "1rem", color: "red" }}>*/}
                        {/*      주문 취소*/}
                        {/*    </span>*/}
                        {/*  </button>*/}
                        {/*</span>*/}
                      </div>
                    </div>
                  </InfoBottom>
                </ItemInfo>
              </CartItem>
            ) : (
              <CartItem key={index}>
                <img src={v.itemImageUrl} alt={v.itemName} />
                <ItemInfo>
                  <InfoTop>
                    <div style={{ paddingBottom: "2.5rem" }}>
                      <span>{v.itemName}</span>
                      <span>{v.itemName}원</span>
                    </div>
                    {/*<div style={{ color: "rgba(0,0,0,0.4)" }}>*/}
                    {/*  /!*{item[index]?.cartOptionGroups[0]?.cartOptions[0]?.name}*!/*/}
                    {/*  /!*&nbsp;&nbsp;*!/*/}
                    {/*  /!*{item[index]?.cartOptionGroups[1]?.cartOptions[0]?.name}*!/*/}
                    {/*  /!*&nbsp;&nbsp;*!/*/}
                    {/*  /!*{item[index]?.cartOptionGroups[2]?.cartOptions[0]?.name}*!/*/}
                    {/*  /!*&nbsp;&nbsp;*!/*/}
                    {/*  /!*{item[index]?.cartOptionGroups[3]?.cartOptions[0]?.name}*!/*/}
                    {/*  /!*&nbsp;&nbsp;*!/*/}
                    {/*  /!*{item[index]?.cartOptionGroups[4]?.cartOptions[0]?.name}*!/*/}
                    {/*</div>*/}
                  </InfoTop>
                  <InfoBottom style={{ marginTop: "0" }}>
                    <div>
                      <span>2~3일 내 도착</span>
                    </div>
                    <div>
                      <div>
                        <span>{v.itemName}개</span>
                      </div>

                      <div>
                        <span>{v.itemName}원</span>
                        <span></span>
                      </div>
                    </div>
                  </InfoBottom>
                </ItemInfo>
              </CartItem>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default Buying;
