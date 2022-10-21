import React from "react";
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

const SellOrderList = () => {
  const { data: OrderData, error } = useSWR<any>(
    "https://waycabvav.shop/orders/sellers?page=0",
    fetcher
  );

  const list = OrderData?.orders;
  //내가 등록한 아이템 리스트
  console.log(list);
  console.log(list);
  console.log(list);
  console.log(list);
  return (
    <div>
      <ReponsiveBar title={"받은 주문 리스트"} />
      <Wrapper>
        <TopHeader>받은 주문 리스트</TopHeader>
        {list && <SubHeader>{list[0].shopName}주문 들어온 상품</SubHeader>}
        {list &&
          [...Array(list?.length)].map((v, index) => {
            const orderId = list[index][0];
            return (
              <Link to={`/orders/${orderId}`}>
                <CartItem key={index}>
                  <img
                    src={list[index]?.itemImageUrl}
                    alt={list[index]?.itemName}
                  />
                  <ItemInfo>
                    <InfoTop>
                      <div>
                        <span>{list[index]?.itemName}</span>
                        <span>주문 시각:{list[index]?.createdAt}</span>
                      </div>
                    </InfoTop>
                    <InfoBottom>
                      <div>
                        <span>주문 진행 상태 : {list[index]?.orderStatus}</span>
                        <div>주문 가격:{list[index]?.price}원</div>
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
