import React, { useCallback } from "react";

import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemBox,
  ItemInfo,
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

  const { data: Mockdata, isLoading } =
    myPageApi.useGetCartQuery<any>("bulbasaur");

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

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>장바구니</TopHeader>

        {Mockdata?.cartLineItems.length === 0 && <NullData />}

        {[...Array(Mockdata?.cartLineItems.length)].map((v, index) => {
          return (
            <CartItem key={index}>
              <ItemBox>
                <ItemInfo>
                  <div>상품정보</div>
                  <div>상품금액</div>
                  <div>수량</div>
                  <div>주문금액</div>
                </ItemInfo>
                <InfoTop>
                  <img
                    src={Mockdata?.cartLineItems[index]?.imageUrl}
                    alt={Mockdata?.cartLineItems[index]?.name}
                  />
                  <div>
                    <span>{Mockdata?.cartLineItems[index]?.name}</span>
                    <span>{getTotalPrice(item, index)}원</span>
                  </div>
                  <div style={{ color: "rgba(0,0,0,0.4)" }}>
                    {
                      Mockdata?.cartLineItems[index].cartOptionGroups[0]
                        .cartOption.name
                    }
                    {
                      Mockdata?.cartLineItems[index].cartOptionGroups[1]
                        .cartOption.name
                    }
                    {
                      Mockdata?.cartLineItems[index].cartOptionGroups[2]
                        .cartOption.name
                    }
                  </div>
                </InfoTop>
                <InfoBottom>
                  <div>
                    <span>2~3일 내 도착</span>
                  </div>
                  <div>
                    <div>
                      <button
                        onClick={(event) =>
                          onClickLenDown(event, item[index]?.id, eachLen[index])
                        }
                      >
                        -
                      </button>
                      <span>{eachLen[index]}개</span>
                      <button
                        onClick={(event) =>
                          onClickLenUp(event, item[index]?.id, eachLen[index])
                        }
                      >
                        +
                      </button>
                    </div>

                    <div>
                      {/*<span>*/}
                      {/*  {getTotalPrice(item, index) * eachLen[index]}원*/}
                      {/*</span>*/}
                      <span>
                        <button
                          onClick={(event) => {
                            onDeleteItem(
                              event,
                              Mockdata?.cartLineItems[index]?.id,
                            );
                          }}
                        >
                          X
                        </button>
                      </span>
                    </div>
                  </div>
                </InfoBottom>
              </ItemBox>
            </CartItem>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Like;
