import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import ReponsiveBar from "@components/ReponsiveBar";
import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemInfo,
  Wrapper,
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { SubHeader } from "@components/SellList/style";
import { Link } from "react-router-dom";
import NullData from "@components/NullData";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";

const SellOrderList = () => {
  // const { data: OrderData, error } = useSWR<any>(
  //   "https://waycabvav.shop/orders/sellers?page=0",
  //   fetcher
  // );

  const {
    data: orderData,
    size,
    setSize,
  } = useSWRInfinite<any>(
    (index) => `https://waycabvav.shop/orders/sellers?page=${index}`,
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

  console.log(orderList);
  console.log(orderList);
  console.log(orderList);

  // console.log(orderList[0][0]);
  return (
    <div>
      <ReponsiveBar title={"받은 주문 리스트"} />
      <Wrapper>
        <TopHeader>받은 주문 리스트</TopHeader>
        {orderList == null && <NullData />}
        {orderData && orderList && (
          <SubHeader>{orderList[0].shopName}주문 들어온 상품</SubHeader>
        )}
        {orderList &&
          [...Array(orderList?.length)].map((v, index) => {
            const orderId = orderList[index].itemId;
            return (
              <Link to={`/orders/${orderId}`}>
                <CartItem key={index} ref={ref}>
                  <img
                    src={orderList[index]?.itemImageUrl}
                    alt={orderList[index]?.itemName}
                  />
                  <ItemInfo>
                    <InfoTop>
                      <div>
                        <span>{orderList[index]?.itemName}</span>
                        <span>주문 시각:{orderList[index]?.createdAt}</span>
                      </div>
                    </InfoTop>
                    <InfoBottom>
                      <div>
                        <span>
                          주문 진행 상태 : {orderList[index]?.orderStatus}
                        </span>
                        <div>주문 가격:{orderList[index]?.price}원</div>
                      </div>
                    </InfoBottom>
                  </ItemInfo>
                </CartItem>
              </Link>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default SellOrderList;
