import React from "react";
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
import useSWR from "swr";
import fetcher from "@utils/fetcher";

const SellList = () => {
  const { data: ListData, error } = useSWR<any>(
    "https://waycabvav.shop/items/sellers?page=0",
    fetcher
  );

  const list = ListData?.items;
  //내가 등록한 아이템 리스트
  console.log(list);

  // if (Array.isArray(list) && list.length) {
  //   return <TopHeader>등록하신 상품이 없습니다.</TopHeader>;
  // }
  return (
    <div>
      <ReponsiveBar title={"판매 리스트"} />
      <Wrapper>
        <TopHeader>판매 리스트</TopHeader>
        {list && <SubHeader>{list[0].shopName}님이 등록한 상품</SubHeader>}
        {list &&
          [...Array(list?.length)].map((v, index) => {
            return (
              <CartItem key={index}>
                <img src={list[index]?.imageUrl} alt={list[index]?.itemName} />
                <ItemInfo>
                  <InfoTop>
                    <div>
                      <span>{list[index]?.itemName}</span>
                      <span>{list[index]?.basicPrice}원</span>
                    </div>
                  </InfoTop>
                  <InfoBottom>
                    <div>{list[index]?.shopName}</div>
                  </InfoBottom>
                </ItemInfo>
              </CartItem>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default SellList;
