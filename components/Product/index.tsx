import React from "react";
import StatusBar from "@components/StatusBar";
import { Wrapper } from "@components/Product/styles";
import {
  Item,
  ItemBox,
  ItemContainer,
  Itemdetail,
  ItemFullName,
  ItemName,
  ItemPrice,
  More,
  MoreBtn,
  SubTitle,
  Title,
  TitleBox,
  TitleContainer,
} from "@components/MainItem/styles";

import useSWR from "swr";
import fetcher from "@utils/fetcher";

const Product = () => {
  // const { data, error, mutate} = useSWR("https://waycabvav.shop/items", fetcher);
  //아직 주소 모름
  return (
    <div>
      <StatusBar />
      <Wrapper>
        <TitleContainer>
          <TitleBox>
            <Title>신 상품</Title>
            <SubTitle>발매 상품</SubTitle>
          </TitleBox>
        </TitleContainer>
        <ItemContainer>
          {/*이자리에 이렇게 직접 넣는게 아닌 SWR로 데이터 가져와서 추가*/}
          {/*  {*/}
          {/*      productList && productList.map((product) => {*/}
          {/*          return <Card key={product.id} product={product}></Card>;*/}
          {/*      })*/}
          {/*  }*/}
          {/*  이런 느낌으로 넣을 듯?*/}
          <ItemBox>
            <Item>
              <img
                src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"
                alt=""
              />
            </Item>
            <Itemdetail>
              <ItemName>대표 이름</ItemName>
              <ItemFullName>풀 이름</ItemFullName>
              <ItemPrice>2억</ItemPrice>
            </Itemdetail>
          </ItemBox>
          {/*<ItemBox>*/}
          {/*  <Item>*/}
          {/*    <img*/}
          {/*      src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"*/}
          {/*      alt=""*/}
          {/*    />*/}
          {/*  </Item>*/}
          {/*  <Itemdetail>*/}
          {/*    <ItemName>대표 이름</ItemName>*/}
          {/*    <ItemFullName>풀 이름</ItemFullName>*/}
          {/*    <ItemPrice>2억</ItemPrice>*/}
          {/*  </Itemdetail>*/}
          {/*</ItemBox>*/}
          {/*<ItemBox>*/}
          {/*  <Item>*/}
          {/*    <img*/}
          {/*      src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"*/}
          {/*      alt=""*/}
          {/*    />*/}
          {/*  </Item>*/}
          {/*  <Itemdetail>*/}
          {/*    <ItemName>대표 이름</ItemName>*/}
          {/*    <ItemFullName>풀 이름</ItemFullName>*/}
          {/*    <ItemPrice>2억</ItemPrice>*/}
          {/*  </Itemdetail>*/}
          {/*</ItemBox>*/}
          {/*<ItemBox>*/}
          {/*  <Item>*/}
          {/*    <img*/}
          {/*      src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"*/}
          {/*      alt=""*/}
          {/*    />*/}
          {/*  </Item>*/}
          {/*  <Itemdetail>*/}
          {/*    <ItemName>대표 이름</ItemName>*/}
          {/*    <ItemFullName>풀 이름</ItemFullName>*/}
          {/*    <ItemPrice>2억</ItemPrice>*/}
          {/*  </Itemdetail>*/}
          {/*</ItemBox>*/}
        </ItemContainer>
        <TitleContainer>
          <TitleBox>
            <Title>인기 상품</Title>
            <SubTitle>발매 상품</SubTitle>
          </TitleBox>
        </TitleContainer>
        <ItemContainer>
          <ItemBox>
            <Item>
              <img
                src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"
                alt=""
              />
            </Item>
            <Itemdetail>
              <ItemName>대표 이름</ItemName>
              <ItemFullName>풀 이름</ItemFullName>
              <ItemPrice>2억</ItemPrice>
            </Itemdetail>
          </ItemBox>
        </ItemContainer>
        <TitleContainer>
          <TitleBox>
            <Title>추천 상품</Title>
            <SubTitle>발매 상품</SubTitle>
          </TitleBox>
        </TitleContainer>
        <ItemContainer>
          <ItemBox>
            <Item>
              <img
                src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"
                alt=""
              />
            </Item>
            <Itemdetail>
              <ItemName>대표 이름</ItemName>
              <ItemFullName>풀 이름</ItemFullName>
              <ItemPrice>2억</ItemPrice>
            </Itemdetail>
          </ItemBox>
        </ItemContainer>
      </Wrapper>
    </div>
  );
};

export default Product;