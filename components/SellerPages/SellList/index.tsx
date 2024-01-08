import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";
import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemBox,
  Wrapper,
} from "@components/MyPages/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { SubHeader } from "@components/SellerPages/SellList/style";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import NullData from "@components/UI/NullData";
import { ListData } from "@typings/db";

const SellList = () => {
  const { data: ListData, error } = useSWR<ListData | undefined>(
    "https://waycabvav.shop/items/sellers?page=0",
    fetcher,
  );

  const list = ListData?.items;
  //내가 등록한 아이템 리스트

  return (
    <div>
      <ReponsiveBar title={"판매 리스트"} />
      <Wrapper>
        <TopHeader>판매 리스트</TopHeader>

        {ListData && list && list.length === 0 && <NullData />}

        {ListData && list && list.length !== 0 && (
          <SubHeader>{list[0]?.shopName} </SubHeader>
        )}
        {ListData &&
          list &&
          [...Array(list?.length)].map((v, index) => {
            return (
              <CartItem key={index}>
                <img src={list[index]?.imageUrl} alt={list[index]?.itemName} />
                <ItemBox>
                  <InfoTop>
                    <div>
                      <span>{list[index]?.itemName}</span>
                      <span>{list[index]?.basicPrice}원</span>
                    </div>
                    <div></div>
                  </InfoTop>
                  <InfoBottom>
                    <div>{list[index]?.shopName}</div>
                  </InfoBottom>
                </ItemBox>
              </CartItem>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default SellList;
