import React, { useState } from "react";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { useParams } from "react-router";
import { itemsApi } from "@api/itemsApi";
import {
  ItemImg,
  ItemInfo,
  ItemInfosWrapper,
  MangeStocksBtn,
  ModifyAllBtn,
  StocksWrapper,
} from "@components/SellerPages/DetailRegisteredItems/styles";
import ManageStocks from "@components/SellerPages/DetailRegisteredItemsBodys/ManageStocks";

export default function DetailRegisteredItems() {
  const { id } = useParams();
  const {
    data: eachItemData,
    error: eachItemError,
    isLoading: eachItemLoading,
  } = itemsApi.useGetEachItemsQuery(+id!);
  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = () => setIsEdit((prev) => !prev);

  return (
    <div>
      <Wrapper>
        <TopHeader>등록 상품 관리</TopHeader>
        {eachItemLoading && <div>로딩중...</div>}

        {eachItemError && <div>새로고침하여 주세요.</div>}

        {eachItemData && (
          <ItemInfosWrapper>
            <ItemImg>
              <img src={eachItemData.imageUrl} alt="상품 사진" />
            </ItemImg>
            <ItemInfo>
              <div>
                <span>상품명</span>
                <div>
                  <span>{eachItemData.itemName}</span>
                  <span>({eachItemData.category})</span>
                </div>
              </div>
              <div>
                <span>설명</span>
                <span>{eachItemData.information}</span>
              </div>
              <div>
                <span>가격</span>
                <span>{eachItemData.price}원</span>
              </div>
            </ItemInfo>
            <StocksWrapper>
              <div>
                <span>재고</span>
                <div>
                  <MangeStocksBtn onClick={onClickIsEdit}>
                    {isEdit ? "수정 완료" : "재고 수정"}
                  </MangeStocksBtn>
                </div>
                <div>
                  {isEdit && (
                    <ModifyAllBtn onClick={onClickIsEdit}>
                      재고 일괄 수정
                    </ModifyAllBtn>
                  )}
                </div>
              </div>
              <ManageStocks
                optionGroup={eachItemData?.optionGroups}
                isEdit={isEdit}
              />
            </StocksWrapper>
          </ItemInfosWrapper>
        )}
      </Wrapper>
    </div>
  );
}
