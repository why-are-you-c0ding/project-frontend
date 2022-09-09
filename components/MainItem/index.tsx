import React, {} from "react";

import {Wrapper,TitleContainer, More,TitleBox, Title, SubTitle,ItemContainer,ItemBox,Item,Itemdetail,ItemName,ItemFullName,ItemPrice,RightPrice,MoreBtn} from "@components/MainItem/styles";





const MainItem =()=>{
    return (
        <Wrapper>
            <TitleContainer>
                <TitleBox>
                    <Title>
                        인기 상품
                    </Title>
                    <SubTitle>
                        발매 상품
                    </SubTitle>
                </TitleBox>
            </TitleContainer>
            <ItemContainer>
                <ItemBox>
                    <Item>
                        <img src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200" alt="" />
                    </Item>
                    <Itemdetail>
                        <ItemName>대표 이름</ItemName>
                        <ItemFullName>풀 이름</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>2억 5천</RightPrice>
                    </Itemdetail>
                </ItemBox>
                <ItemBox>
                    <Item>
                        <img src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200" alt="" />
                    </Item>
                    <Itemdetail>
                        <ItemName>대표 이름</ItemName>
                        <ItemFullName>풀 이름</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>2억 5천</RightPrice>
                    </Itemdetail>
                </ItemBox>
                <ItemBox>
                    <Item>
                        <img src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200" alt="" />
                    </Item>
                    <Itemdetail>
                        <ItemName>대표 이름</ItemName>
                        <ItemFullName>풀 이름</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>2억 5천</RightPrice>
                    </Itemdetail>
                </ItemBox>
                <ItemBox>
                    <Item>
                        <img src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200" alt="" />
                    </Item>
                    <Itemdetail>
                        <ItemName>대표 이름</ItemName>
                        <ItemFullName>풀 이름</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>2억 5천</RightPrice>
                    </Itemdetail>
                </ItemBox>
            </ItemContainer>
            <More>
                <MoreBtn>더보기</MoreBtn>
            </More>
        </Wrapper>
    )
};


export default MainItem;