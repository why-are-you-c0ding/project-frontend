import React, { useCallback } from "react";
import DetailOrder from "@components/DetailOrder";
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

const PAGE_SIZE = 10;

const Buying = () => {
  const { data: orderData, setSize } = useSWRInfinite<any>(
    (index) => `https://waycabvav.shop/orders/customers?page=${index}`,
    fetcher
  );

  const orderList = orderData ? [].concat(...orderData) : [];
  // const isLoadingInitialData = !orderData && !error;
  // const isLoadingMore =
  //   isLoadingInitialData ||
  //   (size > 0 && orderData && typeof orderData[size - 1] === "undefined");
  // const isEmpty = orderData?.[0]?.length === 0;
  // const isReachingEnd =
  //   isEmpty ||
  //   (orderData && orderData[orderData.length - 1]?.length < PAGE_SIZE);
  // const isRefreshing = isValidating && orderData && orderData.length === size;

  console.log("이게 리스트1: ", orderList);
  if (orderData) console.log("Data: ", orderData[0].orders.length);
  if (orderData) console.log("List: ", orderList);

  const onClick2 = useCallback(() => {
    setSize((prev) => prev + 1);
  }, []);

  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />

      <TopHeader>주문 내역</TopHeader>

      <div style={{ marginTop: "6rem", padding: "0 2rem" }}>
        <button onClick={onClick2}>버튼2</button>

        <CartItem>
          <img
            src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
            alt=""
          />
          <ItemInfo>
            <InfoTop>
              <div>
                <span>아이템 이름</span>
                <span>10000원</span>
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
                  <span>총 금액: 20000원</span>
                  <span>
                    <button onClick={(event) => {}}>
                      <span style={{ fontSize: "1rem", color: "red" }}>
                        주문 취소
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </InfoBottom>
          </ItemInfo>
        </CartItem>
      </div>
    </div>
  );
};

export default Buying;
