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
// import { AllData } from "@typings/db";

const MainItem = () => {
  const { data: allData, error } = useSWR(
    "https://waycabvav.shop/items?page=0",
    fetcher_noneHeaders
  );

  return (
    <Wrapper>
      <TitleContainer>
        <h2>전체 상품</h2>
      </TitleContainer>
      <ItemContainer>
        {allData?.items &&
          allData?.items.map((v: AllData, index: number) => {
            const itemId = allData?.items[index].itemId;

            return (
              <Link to={`/shop/${itemId}`} key={index}>
                <ItemBox>
                  <ItemImg>
                    <img src={allData?.items[index].imageUrl} alt="으악" />
                  </ItemImg>
                  <ItemInfo>
                    <ItemName>{allData?.items[index].itemName}</ItemName>
                    <ItemPrice>{allData?.items[index].basicPrice}원</ItemPrice>
                  </ItemInfo>
                </ItemBox>
              </Link>
            );
          })}
      </ItemContainer>
    </Wrapper>
  );
};

export default MainItem;
