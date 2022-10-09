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
      }>
    | false
  >("https://waycabvav.shop/items", fetcher);

  console.log(allData);

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

            return (
              <Link to={`/shop/${itemId}`} key={index}>
                <ItemBox>
                  <Item>
                    <img
                      src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"
                      alt=""
                    />
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
