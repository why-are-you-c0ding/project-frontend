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
import { Scrollbars } from "react-custom-scrollbars";

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

  const scrollbarRef = useRef<Scrollbars>(null);

  const onScroll = useCallback((values: any) => {
    const current = (scrollbarRef as MutableRefObject<Scrollbars>)?.current;

    // if (current) console.log(current.getValues().top);
    if (current) {
      if (current.getValues().top === 1) {
        setSize((prev) => prev + 1);
      }
    }
  }, []);

  return (
    <div>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        <ReponsiveBar title={"주문 내역"} />

        <TopHeader>주문 내역</TopHeader>

        <div style={{ marginTop: "6rem", padding: "0 2rem" }}>
          {orderData &&
            orderList &&
            orderList?.map((v: any, index: number) => {
              return (
                <div key={index}>
                  <CartItem>
                    <img src={v.itemImageUrl} alt="" />
                    <ItemInfo>
                      <InfoTop>
                        <div>
                          <span>{v.itemName}</span>
                          {/*<span>{v.}</span>*/}
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
                                <span
                                  style={{ fontSize: "1rem", color: "red" }}
                                >
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
              );
            })}
        </div>
      </Scrollbars>
    </div>
  );
};

export default Buying;
