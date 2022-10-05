import React, { useCallback, useState } from "react";

import { Wrapper } from "@components/Like/styles";
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

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>관심 상품</TopHeader>
        <img
          src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
          alt=""
        />
      </Wrapper>
    </div>
  );
};

export default Like;
