import React, { useCallback, useState } from "react";

import {
  BuyAllBtn,
  EachDeleteBtn,
  ItemBox2,
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
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import NullData from "@components/NullData";
import { cartLineItems, ICartData } from "@typings/db";
import { myPageApi } from "@api/myPageApi";
import { toast } from "react-toastify";

const Like = () => {
  const [deleteMutation] = myPageApi.useDeleteCartItemMutation();
  const [upMutation] = myPageApi.useUpCartItemMutation();
  const [downMutation] = myPageApi.useDownCartItemMutation();
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const { data: Mockdata, isLoading } =
    myPageApi.useGetAllCartQuery("getCartData");

  let item: cartLineItems[] = [];

  if (Mockdata) {
    item = Mockdata?.cartLineItems;
  }
  // console.log(Mockdata);

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
    console.log(selectedItems);
  };

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>장바구니</TopHeader>

        {Mockdata?.cartLineItems.length === 0 && <NullData />}

        <ItemBox2>
          <ItemBoxInfo>
            <div>전체 몇개</div>
            <div>상품정보</div>
            <div>수량</div>
            <div>주문금액</div>
            <div>배송 형태</div>
          </ItemBoxInfo>
          {[...Array(Mockdata?.cartLineItems.length)].map((v, index) => {
            const product = Mockdata?.cartLineItems[index];
            return (
              <ItemInfo>
                <div>
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
                <ItemInfoSys>택배 배송</ItemInfoSys>
                <ItemInfoDeleteBtn>
                  <button
                    onClick={(event) => {
                      // @ts-ignore
                      onDeleteItem(event, Mockdata?.cartLineItems[index]?.id);
                    }}
                  >
                    X
                  </button>
                </ItemInfoDeleteBtn>
              </ItemInfo>
            );
          })}
          <EachDeleteBtn>선택삭제</EachDeleteBtn>
        </ItemBox2>
        <BuyAllBtn>구매하기</BuyAllBtn>
      </Wrapper>
    </div>
  );
};

export default Like;
