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
import { AllData } from "@typings/db";

const MainItem = () => {
  const { data: allData, error } = useSWR<AllData[]>(
    "https://waycabvav.shop/items",
    fetcher_noneHeaders
  );

  let itemList: AllData[] = [];

  if (allData) itemList = Object.values(allData);

  let item: Array<Array<string | number>> = [];

  for (let i = 0; i < itemList.length; i++) {
    item[i] = Object.values(itemList[i]);
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
