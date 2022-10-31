import React, { useEffect } from "react";

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

const MainItem = () => {
  const { data: blockData } = useSWR<{ result: string }>(
    "http://localhost:8000/blocks",
    fetcher
  );

  const {
    data: allData,
    size,
    setSize,
  } = useSWRInfinite<ListData>(
    (index) =>
      blockData
        ? `https://waycabvav.shop/items?page=${index}&blockCategory=${blockData?.result}`
        : `https://waycabvav.shop/items?page=${index}&blockCategory=`,
    fetcher_noneHeaders
  );

  let MainList: any = [];

  if (allData) {
    for (let i = 0; i < allData?.length; i++) {
      MainList.push(allData[i].items);
    }
  }

  MainList = MainList.flat();

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
      {allData && MainList && (
        <TitleContainer>
          <h2>전체 상품</h2>
        </TitleContainer>
      )}

      {MainList.length === 0 && <NullData />}
      <ItemContainer>
        {allData &&
          MainList &&
          [...Array(MainList?.length)].map((e, ind) => {
            const MainId = MainList[ind].itemId;
            return (
              <Link to={`/shop/${MainId}`} key={ind}>
                <ItemBox ref={ref}>
                  <ItemImg>
                    <img
                      src={MainList[ind].imageUrl}
                      alt={MainList[ind].itemName}
                    />
                  </ItemImg>
                  <ItemInfo>
                    <ItemName>{MainList[ind].itemName}</ItemName>
                    <span>{MainList[ind].category}</span>
                    <ItemPrice>{MainList[ind].basicPrice}원</ItemPrice>
                  </ItemInfo>
                </ItemBox>
              </Link>
            );
          })}
      </ItemContainer>
    </Wrapper>
  );
};

export default MainItem;
