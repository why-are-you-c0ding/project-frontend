import React, { useEffect, useState } from "react";

import {
  ItemBox,
  ItemContainer,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  TitleContainer,
  Wrapper,
} from "@components/Items/MainItem/styles";
import { item, ItemPaging } from "@typings/items";
import { useInView } from "react-intersection-observer";
import { itemsApi } from "@api/itemsApi";
import { Link, useLocation } from "react-router-dom";
import NullData from "@components/UI/NullData";

const SearchItem = () => {
  const path = useLocation();

  const [page, setPage] = useState(0);
  const [finalPage, setFinalPage] = useState(false);
  const { ref, inView } = useInView();
  const { data, error, isLoading } = itemsApi.useGetSearchItemsQuery({
    word: decodeURI(path.pathname.slice(12)),
    page,
  });

  useEffect(() => {
    if (inView && !finalPage) {
      setPage((prev) => prev + 1);
    }
  }, [inView, finalPage]);

  useEffect(() => {
    if (data && "finalPage" in data) {
      setFinalPage(data.finalPage);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [path]);

  return (
    <Wrapper>
      <TitleContainer>
        <h2>검색결과</h2>
      </TitleContainer>

      {error && <div>새로고침하여 주세요.</div>}

      {isLoading && <div>로딩중...</div>}

      {data && "message" in data && <NullData />}

      {data && "finalPage" in data && (
        <ItemContainer>
          {(data as ItemPaging)?.items?.map((item: item, index) => {
            return (
              <Link
                to={`/eachitem/${item.itemId}`}
                key={item.itemId}
                ref={
                  (data as ItemPaging)?.items?.length - 5 === index ? ref : null
                }
              >
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
        </ItemContainer>
      )}
    </Wrapper>
  );
};

export default SearchItem;
