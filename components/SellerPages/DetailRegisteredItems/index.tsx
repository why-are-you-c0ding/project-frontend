import React, { useCallback, useEffect, useState } from "react";
import { Wrapper } from "@components/SellerPages/CreateItems/styles";
import { TopHeader } from "@pages/MyPage/styles";
import { useParams } from "react-router";
import { itemsApi } from "@api/itemsApi";
import {
  CompleteBtn,
  CompleteBtnWrapper,
  ItemImg,
  ItemInfo,
  ItemInfosWrapper,
  MangeStocksBtn,
  ModifyAllBtn,
  StocksWrapper,
} from "@components/SellerPages/DetailRegisteredItems/styles";
import ManageStocks from "@components/SellerPages/DetailRegisteredItemsBodys/ManageStocks";
import { ModifyStocks } from "@typings/sellerPages";
import { sellersApi } from "@api/sellersApi";
import { toast } from "react-toastify";
import { useAppDispatch } from "@redux/hooks";
import { onSetIsLoading } from "@redux/reducers/commonSlice";
import ModalWrapper from "@components/UI/Modal";
import { useDisclosure } from "@chakra-ui/react";
import AllStocksModifyModal from "@components/SellerPages/DetailRegisteredItemsBodys/AllStocksModifyModal";

export default function DetailRegisteredItems() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: eachItemData,
    error: eachItemError,
    isLoading: eachItemLoading,
  } = itemsApi.useGetEachItemsQuery(+id!);
  const [isEdit, setIsEdit] = useState(false);

  const [mutate, { isLoading }] = sellersApi.useModifyItemStocksMutation();
  const [modifyStocks, setModifyStocks] = useState<ModifyStocks>({
    stockInfos: [],
  });
  const onClickIsEdit = (value: boolean) => setIsEdit(value);

  const onClickComplete = useCallback(
    (temp?: ModifyStocks) => {
      if (!temp && modifyStocks.stockInfos.length === 0) {
        toast.warning("수정하신 재고가 없습니다.", {
          position: "top-center",
        });
        return;
      }

      temp ? mutate(temp) : mutate(modifyStocks);
      setModifyStocks({ stockInfos: [] });
      onClose();
      onClickIsEdit(false);

      toast.success("재고 수정이 완료되었습니다.", {
        position: "top-center",
      });
    },
    [modifyStocks],
  );

  useEffect(() => {
    dispatch(onSetIsLoading(isLoading));
  }, [isLoading]);

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
                  <MangeStocksBtn
                    onClick={() => {
                      onClickIsEdit(true);
                      isEdit && onClickComplete();
                    }}
                  >
                    {isEdit ? "수정 완료" : "재고 수정"}
                  </MangeStocksBtn>
                </div>
                <div>
                  {isEdit && (
                    <ModifyAllBtn onClick={onOpen}>재고 일괄 수정</ModifyAllBtn>
                  )}
                </div>
              </div>
              <ManageStocks
                modifyStocks={modifyStocks}
                setModifyStocks={setModifyStocks}
                optionGroup={eachItemData?.optionGroups}
                isEdit={isEdit}
              />
            </StocksWrapper>
            {isEdit && (
              <CompleteBtnWrapper>
                <CompleteBtn
                  onClick={() => {
                    onClickComplete();
                  }}
                >
                  수정 완료
                </CompleteBtn>
              </CompleteBtnWrapper>
            )}
          </ItemInfosWrapper>
        )}

        <ModalWrapper
          isOpen={isOpen}
          onClose={onClose}
          title={"재고 일괄 수정"}
          content={
            <AllStocksModifyModal
              onClose={onClose}
              onClickComplete={onClickComplete}
            />
          }
          footer={null}
        />
      </Wrapper>
    </div>
  );
}
