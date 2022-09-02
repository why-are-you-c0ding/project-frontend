import React, {} from "react";

import {SubTitle, Title, TitleBox, Wrapper,ItemBox, ItemList,ItemImg, ItemSub, ItemName, ItemFullName, ItemPrice,RightPrice} from "@components/MainItem/styles";
import { Link } from "react-router-dom";




const MainItem =()=>{
    return (
        <Wrapper>
            <TitleBox>
                <Title>인기 상품</Title>
                <SubTitle>발매 상품</SubTitle>
            </TitleBox>
            <ItemBox>
                <ItemList >
                    <ItemImg>
                        <img src='https://petnolza.com/wp-content/uploads/2021/11/dog-smart7.jpg'/>
                    </ItemImg>
                    <ItemSub>
                        <ItemName>리트리버</ItemName>
                        <ItemFullName>레드라도 리트리버</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>즉시구매가</RightPrice>
                    </ItemSub>
                </ItemList>
                <ItemList >
                    <ItemImg>
                        <img src='https://petnolza.com/wp-content/uploads/2021/11/dog-smart7.jpg'/>
                    </ItemImg>
                    <ItemSub>
                        <ItemName>리트리버</ItemName>
                        <ItemFullName>레드라도 리트리버</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>즉시구매가</RightPrice>
                    </ItemSub>
                </ItemList>
                <ItemList >
                    <ItemImg>
                        <img src='https://petnolza.com/wp-content/uploads/2021/11/dog-smart7.jpg'/>
                    </ItemImg>
                    <ItemSub>
                        <ItemName>리트리버</ItemName>
                        <ItemFullName>레드라도 리트리버</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>즉시구매가</RightPrice>
                    </ItemSub>
                </ItemList>
                <ItemList >
                    <ItemImg>
                        <img src='https://petnolza.com/wp-content/uploads/2021/11/dog-smart7.jpg'/>
                    </ItemImg>
                    <ItemSub>
                        <ItemName>리트리버</ItemName>
                        <ItemFullName>레드라도 리트리버</ItemFullName>
                        <ItemPrice>2억</ItemPrice>
                        <RightPrice>즉시구매가</RightPrice>
                    </ItemSub>
                </ItemList>
            </ItemBox>
        </Wrapper>
    )
};


export default MainItem;