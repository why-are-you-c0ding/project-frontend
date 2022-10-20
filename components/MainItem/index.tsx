import React from "react";

import {
  Wrapper,
  TitleContainer,
  ItemContainer,
  ItemBox,
  ItemName,
  ItemPrice,
  ItemImg,
  ItemInfo,
} from "@components/MainItem/styles";
import useSWR from "swr";
import { Link } from "react-router-dom";
import fetcher_noneHeaders from "@utils/fetcher_noneHeaders";

const MainItem = () => {
  const { data: allData, error } = useSWR<
    | Array<{
        itemId: number;
        itemName: string;
        shopName: string;
        basicPrice: number;
        imageUrl: string;
      }>
    | false
  >("https://waycabvav.shop/items", fetcher_noneHeaders);

  console.log(allData);

  let item: any = [];

  if (allData) item = Object.values(allData);

  for (let i = 0; i < item.length; i++) {
    item[i] = Object.values(item[i]);
  }

  if (!allData) {
    return <div>로딩중입니다...</div>;
  }

  return (
    <Wrapper>
      <TitleContainer>
        <h2>전체 상품</h2>
      </TitleContainer>
      <ItemContainer>
        {
          // allData
          // &&
          allData?.map((v, index) => {
            const itemId = item[index][0];

            return (
              <Link to={`/shop/${itemId}`} key={index}>
                <ItemBox>
                  <ItemImg>
                    <img src={v.imageUrl} alt="으악" />
                  </ItemImg>
                  <ItemInfo>
                    <ItemName>{item[index][1]}</ItemName>
                    <ItemPrice>{item[index][3]}원</ItemPrice>
                  </ItemInfo>
                </ItemBox>
              </Link>
            );
          })
        }
      </ItemContainer>
    </Wrapper>
  );
};

export default MainItem;
