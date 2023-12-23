import React, { useEffect, useState } from "react";

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
import { AllData, ListData } from "@typings/db";
import useSWRInfinite from "swr/infinite";
import fetcher from "@utils/fetcher";
import { useInView } from "react-intersection-observer";
import NullData from "@components/NullData";
import fetcher_noneHeaders from "@utils/fetcher_noneHeaders";
import { itemsApi } from "@api/itemsApi";
import { item } from "@typings/items";

const MainItem = () => {
  const [page, setPage] = useState(0);
  const { data, isFetching } = itemsApi.useGetAllItemsQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  console.log(page);

  return (
    <Wrapper>
      {/*{allData && MainList && (*/}
      <TitleContainer>
        <h2>전체 상품</h2>
      </TitleContainer>
      {/*)}*/}

      {/*{MainList.length === 0 && <NullData />}*/}
      <ItemContainer>
        {/*{allData &&*/}
        {/*  MainList &&*/}
        {/*  [...Array(MainList?.length)].map((e, ind) => {*/}
        {/*    const MainId = MainList[ind].itemId;*/}
        {/*    return (*/}
        {/*      <Link to={`/shop/${MainId}`} key={ind}>*/}

        {data?.items?.map((item: item) => {
          return (
            <Link to={`/shop`} key={item.itemId}>
              <ItemBox>
                <ItemImg>
                  <img src={item.imageUrl} alt={"상품 사진"} />
                </ItemImg>
                <ItemInfo>
                  <ItemName>{item.itemName}</ItemName>
                  <span>{item.category}</span>
                  <ItemPrice>{item.basicPrice}원</ItemPrice>
                </ItemInfo>
              </ItemBox>
            </Link>
          );
        })}

        {/*<Link to={`/shop`} key={"ind"}>*/}
        {/*  <ItemBox>*/}
        {/*    <ItemImg>*/}
        {/*      <img src={"public/wayc.png"} alt={"상품 사진"} />*/}
        {/*    </ItemImg>*/}
        {/*    <ItemInfo>*/}
        {/*      <ItemName>{"상품 이름"}</ItemName>*/}
        {/*      <span>{"food"}</span>*/}
        {/*      <ItemPrice>{"1,000"}원</ItemPrice>*/}
        {/*    </ItemInfo>*/}
        {/*  </ItemBox>*/}
        {/*</Link>*/}
        {/*);*/}
        {/*})*/}
        {/* }*/}
      </ItemContainer>
    </Wrapper>
  );
};

export default MainItem;
