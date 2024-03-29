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
} from "@components/Items/MainItem/styles";
import { Link } from "react-router-dom";
import { itemsApi } from "@api/itemsApi";
import { item } from "@typings/items";
import { useInView } from "react-intersection-observer";

const MainItem = () => {
  const [page, setPage] = useState(0);
  const [finalPage, setFinalPage] = useState(false);
  const { ref, inView } = useInView();
  const { data, error, isLoading } = itemsApi.useGetAllItemsQuery(page);

  useEffect(() => {
    if (inView && !finalPage) {
      setPage((prev) => prev + 1);
    }
  }, [inView, finalPage]);

  useEffect(() => {
    if (data) {
      setFinalPage(data.finalPage);
    }
  }, [data]);

  return (
    <Wrapper>
      <TitleContainer>
        <h2>전체 상품</h2>
      </TitleContainer>

      {error && <div>새로고침하여 주세요.</div>}

      {isLoading && <div>로딩중...</div>}

      {data && (
        <ItemContainer>
          {data?.items?.map((item: item, index) => {
            return (
              <Link
                to={`/eachitem/${item.itemId}`}
                key={item.itemId}
                ref={data.items.length - 5 === index ? ref : null}
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

export default MainItem;
