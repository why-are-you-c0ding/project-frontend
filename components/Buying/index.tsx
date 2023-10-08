import React, { useEffect } from "react";
import ReponsiveBar from "@components/ReponsiveBar";
import { TopHeader } from "@pages/MyPage/styles";
import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemBox,
} from "@components/Like/styles";
import useSWRInfinite from "swr/infinite";
import fetcher from "@utils/fetcher";
import { Wrapper } from "@components/Buying/styles";
import { useInView } from "react-intersection-observer";
import NullData from "@components/NullData";
import { Link } from "react-router-dom";
import { IOrderData, orders } from "@typings/db";
import { myPageApi } from "@api/myPageApi";

const Buying = () => {
  const { data: orderData, setSize } = useSWRInfinite<IOrderData>(
    (index) => `https://waycabvav.shop/orders/customers?page=${index}`,
    fetcher,
  );

  const {
    data: orderData2,
    error,
    isLoading,
  } = myPageApi.useGetCustomersOrderQuery<any>(0);

  let orderTemp: Array<orders[]> = [];

  if (orderData) {
    for (let i = 0; i < orderData?.length; i++) {
      orderTemp.push(orderData[i].orders);
    }
  }

  const orderList = orderTemp.flat();

  const [ref, inView] = useInView();

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setSize((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />
      <Wrapper>
        <TopHeader>주문 내역</TopHeader>

        {orderList.length === 0 && <NullData />}

        {orderData &&
          orderList &&
          orderList?.map((v: any, index: number) => {
            return (
              <Link key={index} to={`/customerorders/${v.orderId}`}>
                <CartItem ref={ref}>
                  <img src={v.itemImageUrl} alt={v.itemName} />
                  <ItemBox>
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
                          <span>수량: {v.count}개</span>
                        </div>

                        <div>
                          <span>{v.price}원</span>
                          <span></span>
                        </div>
                      </div>
                    </InfoBottom>
                  </ItemBox>
                </CartItem>
              </Link>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default Buying;
