import React, { useCallback, useEffect, useState } from "react";

import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemInfo,
  Wrapper,
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import axios from "axios";

const Like = () => {
  const {
    data: cartData,
    mutate: mutateCart,
    error,
  } = useSWR<any>("https://waycabvav.shop/carts", fetcher);

  let item: any = [];

  if (cartData) item = Object.values(cartData)[0];

  const getItemLen = (item: any) => {
    let ary: any = [];
    const itemLen = item?.length;

    for (let i = 0; i < itemLen; i++) {
      // ary.push(item[i]?.itemId);
      ary[i] = item[i]?.count;
    }

    return ary;
  };

  const eachLen = getItemLen(item);

  const getTotalPrice = (item: any, len: number) => {
    let total = 0;

    for (let j = 0; j < item[len]?.cartOptionGroups.length; j++) {
      total += item[len]?.cartOptionGroups[j].cartOptions[0].price;
    }

    return total;
  };

  console.log(cartData);

  const onClickLenUp: any = useCallback((idx: number, e: any) => {
    console.log("누름", idx);
  }, []);

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />₩
      <Wrapper>
        <TopHeader>관심 상품</TopHeader>
        {[...Array(item?.length)].map((v, index) => {
          return (
            <CartItem key={index}>
              <img
                src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
                alt=""
              />
              <ItemInfo>
                <InfoTop>{item[index]?.name}</InfoTop>
                <InfoBottom>
                  <div>
                    <span>2~3일 내 도착</span>
                  </div>
                  <div>
                    <span>{getTotalPrice(item, index)}원</span>
                    <span>
                      {eachLen[index]}개
                      <button onClick={onClickLenUp(item[index]?.id)}>+</button>
                    </span>
                    <div>
                      <span>
                        {getTotalPrice(item, index) * eachLen[index]}원
                      </span>
                      <button>X</button>
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

export default Like;
