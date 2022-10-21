import React, { useEffect } from "react";
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

  orderList = orderList.flat();

  const [ref, inView] = useInView();

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setSize((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>주문 내역</TopHeader>

        {orderData &&
          orderList &&
          orderList?.map((v: any, index: number) => {
            return index === orderList.length - 3 ? (
              <CartItem key={index} ref={ref}>
                <img src={v.itemImageUrl} alt={v.itemName} />
                <ItemInfo>
                  <InfoTop>
                    <div style={{ paddingBottom: "2.5rem" }}>
                      <span>{v.itemName}</span>
                      <span>{v.shopName}</span>
                    </div>
                  </InfoTop>
                  <InfoBottom style={{ marginTop: "0" }}>
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
                </ItemInfo>
              </CartItem>
            ) : (
              <CartItem key={index}>
                <img src={v.itemImageUrl} alt={v.itemName} />
                <ItemInfo>
                  <InfoTop>
                    <div style={{ paddingBottom: "2.5rem" }}>
                      <span>{v.itemName}</span>
                      <span>{v.shopName}</span>
                    </div>
                  </InfoTop>
                  <InfoBottom style={{ marginTop: "0" }}>
                    <div>
                      <span>2~3일 내 도착</span>
                    </div>
                    <div>
                      <div>
                        <span>수량: {v.count}개</span>
                      </div>

                      <div>
                        <span>{v.price * v.count}원</span>
                        <span></span>
                      </div>
                    </div>
                  </InfoBottom>
                </ItemInfo>
              </CartItem>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default Buying;
