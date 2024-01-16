import React, { useEffect, useState } from "react";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { sellersApi } from "@api/sellersApi";
import {
  ManageItemBtn,
  RegisteredItem,
} from "@components/SellerPages/RegisteredItems/styled";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";
import NullData from "@components/UI/NullData";

export default function RegisteredItems() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [finalPage, setFinalPage] = useState(false);
  const { ref, inView } = useInView();
  const { data, error, isLoading } = sellersApi.useGetSellerItemsQuery(page);
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
      <Wrapper>
        <TopHeader>등록 상품</TopHeader>

        {error && <div>새로고침하여 주세요.</div>}

        {isLoading && <div>로딩중...</div>}

        {data && "message" in data && <NullData />}

        {data && "finalPage" in data && (
          <div>
            {data.items.map((item, index) => {
              return (
                <RegisteredItem
                  key={item.itemId}
                  ref={data.items.length - 5 === index ? ref : null}
                >
                  <div>
                    <img src={item.imageUrl} alt={"상품 사진"} />
                  </div>
                  <div>
                    <div>
                      <span>{item.itemName}</span>
                      <span>({item.category})</span>
                    </div>
                    <div>{item.shopName}</div>
                  </div>
                  <div>
                    <span>상품 가격</span>
                    <span>{item.basicPrice}원</span>
                  </div>
                  <div>
                    <div>
                      <ManageItemBtn
                        onClick={() => {
                          navigate(`/sellpage/registereditems/${item.itemId}`);
                        }}
                      >
                        상품 관리
                      </ManageItemBtn>
                    </div>
                  </div>
                </RegisteredItem>
              );
            })}
          </div>
        )}
      </Wrapper>
    </div>
  );
}
