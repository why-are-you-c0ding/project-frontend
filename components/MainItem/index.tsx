import React from "react";

import {
  Wrapper,
  TitleContainer,
  More,
  TitleBox,
  Title,
  SubTitle,
  ItemContainer,
  ItemBox,
  Item,
  Itemdetail,
  ItemName,
  ItemPrice,
  MoreBtn,
} from "@components/MainItem/styles";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { Link } from "react-router-dom";

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
  >("https://waycabvav.shop/items", fetcher);

  let item: any = [];

  if (allData) item = Object.values(allData);

  for (let i = 0; i < item.length; i++) {
    item[i] = Object.values(item[i]);
  }

  return (
    <Wrapper>
      <TitleContainer>
        <TitleBox>
          <Title>전체 상품</Title>
          <SubTitle>발매 상품</SubTitle>
        </TitleBox>
      </TitleContainer>
      <ItemContainer>
        {allData &&
          allData?.map((v, index) => {
            const itemId = item[index][0];
            console.log(v.imageUrl);

            return (
              <Link to={`/shop/${itemId}`} key={index}>
                <ItemBox>
                  <Item>
                    <img src={v.imageUrl} alt="으악" />
                  </Item>
                  <Itemdetail>
                    <ItemName>{item[index][1]}</ItemName>
                    <ItemPrice>{item[index][3]}원</ItemPrice>
                  </Itemdetail>
                </ItemBox>
              </Link>
            );
          })}
      </ItemContainer>
      <More>
        <MoreBtn>더보기</MoreBtn>
      </More>
    </Wrapper>
  );
};

export default MainItem;
