import React, { useEffect } from "react";
import fetcher from "@utils/fetcher";
import ReponsiveBar from "@components/ReponsiveBar";
import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemBox,
  Wrapper,
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { SubHeader } from "@components/SellerPages/SellList/style";
import { Link } from "react-router-dom";
import NullData from "@components/NullData";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";
import { orderData } from "@typings/db";

const SellOrderList = () => {
  const {
    data: orderData,
    size,
    setSize,
  } = useSWRInfinite<orderData>(
    (index) => `https://waycabvav.shop/orders/sellers?page=${index}`,
    fetcher,
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

  console.log(orderData);
  console.log(orderData);
  console.log(orderData);

  return (
    <div>
      <ReponsiveBar title={"받은 주문 리스트"} />
      <Wrapper>
        <TopHeader>받은 주문 리스트</TopHeader>
        {orderData && orderList && (
          <SubHeader>{orderList[0]?.shopName}주문 들어온 상품</SubHeader>
        )}

        {orderList.length === 0 && <NullData />}

        {orderData &&
          orderList &&
          [...Array(orderList?.length)].map((v, index) => {
            const orderId = orderList[index].orderId;
            return (
              <Link to={`/orders/${orderId}`}>
                <CartItem key={index} ref={ref}>
                  <img
                    src={orderList[index]?.itemImageUrl}
                    alt={orderList[index]?.itemName}
                  />
                  <ItemBox>
                    <InfoTop>
                      <div>
                        <span
                          style={{
                            width: "50%",
                          }}
                        >
                          {orderList[index]?.itemName}
                        </span>
                        <span
                          style={{
                            width: "54%",
                            marginRight: "-0.4rem",
                          }}
                        >
                          {orderList[index]?.createdAt.slice(0, 16)}
                        </span>
                      </div>
                      <div></div>
                    </InfoTop>
                    <InfoBottom>
                      <div>
                        <span
                          style={{
                            width: "40%",
                          }}
                        >
                          {orderList[index]?.orderStatus === "ONGOING"
                            ? "주문 진행"
                            : "주문 완료"}
                        </span>
                        <div style={{ color: "black" }}>
                          주문 가격:{orderList[index]?.price}원
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

export default SellOrderList;
