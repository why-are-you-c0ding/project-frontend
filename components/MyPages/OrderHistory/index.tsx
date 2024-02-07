import React, { useEffect, useState } from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";
import { TopHeader } from "@pages/MyPage/styles";
import NullData from "@components/UI/NullData";

import { myPageApi } from "@api/myPageApi";
import { useInView } from "react-intersection-observer";
import { Wrapper } from "@components/MyPages/CartItem/styles";
import { orderOptionGroups } from "@typings/myPage";
import { OrderHistoryItem } from "@components/MyPages/OrderHistory/styles";

const OrderHistory = () => {
  const [page, setPage] = useState(0);
  const [finalPage, setFinalPage] = useState(false);
  const { ref, inView } = useInView();

  const { data, error, isLoading } =
    myPageApi.useGetCustomerOrderHistoryItemsQuery(page);

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

  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />
      <Wrapper>
        <TopHeader>주문 내역</TopHeader>
        {error && <div>새로고침하여 주세요.</div>}

        {isLoading && <div>로딩중...</div>}

        {data && "message" in data && <NullData />}

        {data && "finalPage" in data && (
          <div>
            {data.orderLineItems.map((item, index) => {
              return (
                <OrderHistoryItem
                  key={item.itemId}
                  ref={data.orderLineItems.length - 5 === index ? ref : null}
                >
                  <div>
                    <img src={item.itemImageUrl} alt={"상품 사진"} />
                  </div>
                  <div>
                    <div>
                      <span>{item.itemName}</span>
                      <span>{item.shopName}</span>
                    </div>
                  </div>
                  <div>
                    <span>상품 가격</span>
                    <span>{item.price}원</span>
                  </div>
                  {/* 백엔드 API에 맞는 가짜 데이터 없음 추후 수정 예정*/}
                  {/*<div>*/}
                  {/*  <span>상품 옵션 그룹 이름</span>*/}
                  {/*  {item.orderOptionGroups.map(*/}
                  {/*    (optionGroup, optionGroupIndex) => (*/}
                  {/*      <span key={optionGroupIndex}>*/}
                  {/*        {optionGroup.optionGroupName}*/}
                  {/*      </span>*/}
                  {/*    ),*/}
                  {/*  )}*/}
                  {/*</div>*/}
                  <div>
                    <span>상품 개수</span>
                    <span>{item.count}개</span>
                  </div>
                  <div>
                    <span>상품 상태</span>
                    <span>{item.orderStatus}</span>
                  </div>
                  <div>
                    <span>상품 옵션 이름</span>
                    {item.orderOptionGroups.map(
                      (
                        optionGroup: orderOptionGroups,
                        optionGroupIndex: number,
                      ) => (
                        <span key={optionGroupIndex}>
                          {optionGroup.optionName}
                        </span>
                      ),
                    )}
                  </div>
                </OrderHistoryItem>
              );
            })}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default OrderHistory;
