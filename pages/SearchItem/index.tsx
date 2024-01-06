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
import { item } from "@typings/items";
import { useInView } from "react-intersection-observer";
import { itemsApi } from "@api/itemsApi";
import { Link, useLocation } from "react-router-dom";
import NullData from "@components/NullData";

const SearchItem = () => {
  const path = useLocation();

  const [page, setPage] = useState(1);
  const [items, setItems] = useState<item[]>([]);
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
    if (data && typeof data !== "string") {
      setItems((prev) => [...prev, ...data.items]);
      setFinalPage(data.finalPage);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
    setItems([]);
  }, [path]);
  //
  // if (typeof data === "string") {
  //   return <div>검색 결과가 없습니다.</div>;
  // }

  return (
    <Wrapper>
      <TitleContainer>
        <h2>검색결과</h2>
      </TitleContainer>

      {error && <div>새로고침하여 주세요.</div>}

      {isLoading && <div>로딩중...</div>}

      {typeof data === "string" && <NullData />}

      {typeof data !== "string" && (
        <ItemContainer>
          {items?.map((item: item, index) => {
            return (
              <Link
                to={`/eachitem/${item.itemId}`}
                key={item.itemId}
                ref={items.length - 5 === index ? ref : null}
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
