import React, { useEffect, useState } from "react";

import { SearchBox, TitleContainer } from "@pages/Search/styles";

import StatusBar from "@components/StatusBar";
import {
  ItemBox,
  ItemContainer,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  Wrapper,
} from "@components/MainItem/styles";
import NullData from "@components/NullData";
import { Link } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import { ListData } from "@typings/db";
import fetcher from "@utils/fetcher";
import { useInView } from "react-intersection-observer";

const Address = () => {
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    setSearch(e.target.value);
  };

  const {
    data: SearchData,
    size,
    setSize,
  } = useSWRInfinite<ListData>(
    (index) =>
      `https://waycabvav.shop/items/search?keyword=${search}&page=${index}`,
    fetcher
  );

  let SearchList: any = [];

  if (SearchData) {
    for (let i = 0; i < SearchData?.length; i++) {
      SearchList.push(SearchData[i].items);
    }
  }

  SearchList = SearchList.flat();

  const [ref, inView] = useInView({
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setSize((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      <StatusBar />
      <TitleContainer>
        <h2>검색 페이지</h2>
      </TitleContainer>
      <SearchBox>
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="검색하고 싶은 단어"
        />
      </SearchBox>
      <TitleContainer>
        <h2>검색 결과</h2>
      </TitleContainer>

      {SearchList.length === 0 && <NullData />}
      <ItemContainer>
        {SearchData &&
          SearchList &&
          [...Array(SearchList?.length)].map((e, ind) => {
            const MainId = SearchList[ind].itemId;
            return (
              <Link to={`/shop/${MainId}`}>
                <ItemBox key={ind} ref={ref}>
                  <ItemImg>
                    <img
                      src={SearchList[ind].imageUrl}
                      alt={SearchList[ind].itemName}
                    />
                  </ItemImg>
                  <ItemInfo>
                    <ItemName>{SearchList[ind].itemName}</ItemName>
                    <ItemPrice>{SearchList[ind].basicPrice}원</ItemPrice>
                  </ItemInfo>
                </ItemBox>
              </Link>
            );
          })}
      </ItemContainer>
    </Wrapper>
  );
};

export default Address;
