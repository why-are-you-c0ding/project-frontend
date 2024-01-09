import React, { useCallback, useState } from "react";

import {
  BuyAllBtn,
  EachDeleteBtn,
  ItemBox,
  ItemBoxInfo,
  ItemInfo,
  ItemInfoCount,
  ItemInfoDeleteBtn,
  ItemInfoImg,
  ItemInfoPrice,
  ItemInfoSys,
  ItemInfoTitle,
  ItemInfoTitleName,
  ItemInfoTitleOption,
  Wrapper,
} from "@components/MyPages/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/UI/ReponsiveBar";
import NullData from "@components/UI/NullData";
import { cartLineItems, ICartData } from "@typings/db";
import { myPageApi } from "@api/myPageApi";
import { toast } from "react-toastify";
import { CartLineItem } from "@typings/myPage";

const Like = () => {
  const [deleteMutation] = myPageApi.useDeleteCartItemMutation();
  const [upMutation] = myPageApi.useUpCartItemMutation();
  const [downMutation] = myPageApi.useDownCartItemMutation();
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

  const { data: Mockdata, isLoading } =
    myPageApi.useGetAllCartQuery("getCartData");

  let item: cartLineItems[] = [];

  if (Mockdata) {
    item = Mockdata?.cartLineItems;
  }

  const getItemLen = (item: cartLineItems[]) => {
    let ary: number[] = [];
    const itemLen = item?.length;

    for (let i = 0; i < itemLen; i++) {
      ary[i] = item[i]?.count;
    }

    return ary;
  };

  const eachLen = getItemLen(item);

  const getTotalPrice = (item: cartLineItems[], len: number) => {
    let total = 0;

    for (let j = 0; j < item[len]?.cartOptionGroups.length; j++) {
      total += item[len]?.cartOptionGroups[j].cartOption.price;
    }

    return total;
  };

  const onDeleteItem = useCallback(
    async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      id: number,
    ) => {
      event.preventDefault();
      const res = await deleteMutation({ cartLineItemId: id });

      if ("data" in res) {
        if (res.data.message === "장바구니 상품 삭제에 성공하셨습니다.") {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("상품 삭제에 실패하였습니다.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    },
    [deleteMutation],
  );

  const onClickLenDown = useCallback(
    async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      id: number,
      idx: number,
    ) => {
      event.preventDefault();
      const len = idx - 1;
      const res = await downMutation({ cartLineItemId: id, count: len });

      if ("data" in res) {
        if (res.data.message === "장바구니 상품 업데이트를 성공하셨습니다.") {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("수량 업데이트에 실패하였습니다.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    },
    [downMutation],
  );

  const onClickLenUp = useCallback(
    async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      id: number,
      idx: number,
    ) => {
      event.preventDefault();
      const len = idx + 1;
      const res = await upMutation({ cartLineItemId: id, count: len });

      if ("data" in res) {
        if (res.data.message === "장바구니 상품 업데이트를 성공하셨습니다.") {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("수량 업데이트에 실패하였습니다.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    },
    [upMutation],
  );
  const handleCheckboxChange = (product: any, index: number) => {
    const isSelected = selectedItems.some((item) => item.index === index);

    if (isSelected) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item.index !== index),
      );
    } else {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        { index, product },
      ]);
    }

    const allChecked = Mockdata?.cartLineItems?.length === selectedItems.length;
    setSelectAllCheckbox(allChecked);
  };

  const handleDeleteClick = (): void => {
    console.log(selectedItems);
  };

  const onBuyItemClick = (): void => {
    if (selectedItems.length === 0) {
      toast.warning("구매할 상품을 선택해주세요", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    console.log(selectedItems);
  };
  const toggleSelectAllCheckbox = (): void => {
    setSelectAllCheckbox((prev: boolean) => !prev);

    const allProducts = Mockdata?.cartLineItems || [];
    const allSelected = allProducts.map(
      (product: CartLineItem, index: number) => ({
        index,
        product,
      }),
    );

    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.length === allSelected.length ? [] : allSelected,
    );
  };

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>장바구니</TopHeader>

        {Mockdata?.cartLineItems.length === 0 && <NullData />}

        <ItemBox>
          <ItemBoxInfo>
            <div>전체 {Mockdata?.cartLineItems.length}개</div>
            <div>
              <input
                type="checkbox"
                onChange={toggleSelectAllCheckbox}
                checked={selectAllCheckbox}
              />
            </div>
            <div>상품명(옵션)</div>
            <div>수량</div>
            <div>주문금액</div>
            <div>주문관리</div>
            <div>배송 형태</div>
          </ItemBoxInfo>
          {[...Array(Mockdata?.cartLineItems.length)].map((v, index) => {
            const product = Mockdata?.cartLineItems[index];
            return (
              <ItemInfo key={index}>
                <div>{index + 1}</div>
                <div key={`checkbox-${index}`}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(product, index)}
                    checked={selectedItems.some((item) => item.index === index)}
                  />
                </div>
                <ItemInfoImg>
                  <img
                    src={Mockdata?.cartLineItems[index]?.imageUrl}
                    alt={Mockdata?.cartLineItems[index]?.name}
                  />
                  <ItemInfoTitle>
                    <ItemInfoTitleName>
                      {Mockdata?.cartLineItems[index]?.name}
                    </ItemInfoTitleName>
                    <ItemInfoTitleOption>
                      {Mockdata?.cartLineItems[index].cartOptionGroups.map(
                        (group: any, groupIndex: number) => (
                          <div key={groupIndex}>{group.cartOption.name}</div>
                        ),
                      )}
                    </ItemInfoTitleOption>
                  </ItemInfoTitle>
                </ItemInfoImg>
                <ItemInfoCount>
                  <button
                    onClick={(event) =>
                      onClickLenDown(event, item[index]?.id, eachLen[index])
                    }
                  >
                    -
                  </button>
                  <div>{eachLen[index]}</div>
                  <button
                    onClick={(event) =>
                      onClickLenUp(event, item[index]?.id, eachLen[index])
                    }
                  >
                    +
                  </button>
                </ItemInfoCount>
                <ItemInfoPrice>{getTotalPrice(item, index)}원</ItemInfoPrice>
                <ItemInfoDeleteBtn>
                  <button
                    onClick={(event) => {
                      // @ts-ignore
                      onDeleteItem(event, Mockdata?.cartLineItems[index]?.id);
                    }}
                  >
                    삭제하기
                  </button>
                </ItemInfoDeleteBtn>
                <ItemInfoSys>택배 배송</ItemInfoSys>
              </ItemInfo>
            );
          })}
          <EachDeleteBtn
            disabled={selectedItems.length === 0}
            onClick={handleDeleteClick}
          >
            선택 삭제
          </EachDeleteBtn>
        </ItemBox>
        <BuyAllBtn onClick={onBuyItemClick}>구매하기</BuyAllBtn>
      </Wrapper>
    </div>
  );
};

export default Like;
