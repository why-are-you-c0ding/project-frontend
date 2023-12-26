import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { Link } from "react-router-dom";
import { itemsApi } from "@api/itemsApi";
import { item } from "@typings/items";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { onChangeScrollFalse } from "@redux/reducers/commonSlice";

const MainItem = () => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = itemsApi.useGetAllItemsQuery(page);
  const [items, setItems] = useState<item[]>([]);
  const [finalPage, setFinalPage] = useState(false);

  const { isScrollBottom } = useAppSelector((state) => state.commonSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isScrollBottom && !finalPage) {
      setPage((prev) => prev + 1);
    }
  }, [isScrollBottom, finalPage]);

  useEffect(() => {
    if (data) {
      setItems((prev) => [...prev, ...data.items]);
      setFinalPage(data.finalPage);
      dispatch(onChangeScrollFalse());
    }
  }, [data]);

  return (
    <Wrapper>
      <TitleContainer>
        <h2>전체 상품</h2>
      </TitleContainer>

      {error && <div>새로고침하여 주세요.</div>}

      {isFetching && <div>로딩중...</div>}

      {!error && !isFetching && (
        <ItemContainer>
          {items?.map((item: item) => {
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
        </ItemContainer>
      )}
    </Wrapper>
  );
};

export default MainItem;
