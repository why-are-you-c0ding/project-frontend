import React, { useCallback, useState } from "react";

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

const Like = () => {
  const { data: cartData, error } = useSWR<any>(
    "https://waycabvav.shop/carts",
    fetcher
  );

  console.log(cartData);

  let item: any = [];

  if (cartData) item = Object.values(cartData);

  for (let i = 0; i < item.length; i++) {
    item[i] = Object.values(item[i]);
  }

  console.log(item);
  console.log(item[0]);
  console.log(16 * 8);

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>관심 상품</TopHeader>
        <CartItem>
          <img
            src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
            alt=""
          />
          <ItemInfo>
            <InfoTop>거치대</InfoTop>
            <InfoBottom>
              <div>
                <span>2~3일 내 도착</span>
              </div>
              <div>
                <span>900원</span>
                <span>
                  <input type="text" />
                </span>
                <div>
                  <span>900원</span>
                  <button>X</button>
                </div>
              </div>
            </InfoBottom>
          </ItemInfo>
        </CartItem>
      </Wrapper>
    </div>
  );
};

export default Like;
