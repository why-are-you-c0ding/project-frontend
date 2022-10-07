import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemInfo,
  Wrapper,
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import axios from "axios";
import { getCookie } from "@utils/cookie";

const Like = () => {
  const {
    data: cartData,
    mutate: mutateCart,
    error,
  } = useSWR<any>("https://waycabvav.shop/carts", fetcher);

  let item: any = [];

  if (cartData) item = Object.values(cartData)[0];

  const getItemLen = (item: any) => {
    let ary: number[] = [];
    const itemLen = item?.length;

    for (let i = 0; i < itemLen; i++) {
      ary[i] = item[i]?.count;
    }

    return ary;
  };

  const eachLen = getItemLen(item);
  // console.log(eachLen);

  const getTotalPrice = (item: any, len: number) => {
    let total = 0;

    for (let j = 0; j < item[len]?.cartOptionGroups.length; j++) {
      total += item[len]?.cartOptionGroups[j].cartOptions[0].price;
    }

    return total;
  };

  const onClickLenUp = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      id: number,
      idx: number
    ) => {
      e.preventDefault();

      const len = idx + 1;

      axios
        .patch(
          "https://waycabvav.shop/carts/cart-line-items",
          {
            count: len,
            cartLineItemId: id,
          },
          {
            headers: {
              Authorization: `Bearer ${getCookie("jwt")}`,
            },
          }
        )
        .then((res) => {
          mutateCart();
        })
        .catch((err) => {});
    },
    []
  );

  const onClickLenDown = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      id: number,
      idx: number
    ) => {
      e.preventDefault();

      if (idx < 2) return;

      const len = idx - 1;

      axios
        .patch(
          "https://waycabvav.shop/carts/cart-line-items",
          {
            count: len,
            cartLineItemId: id,
          },
          {
            headers: {
              Authorization: `Bearer ${getCookie("jwt")}`,
            },
          }
        )
        .then((res) => {
          mutateCart();
        })
        .catch((err) => {
          alert("수량을 변경하지 못했습니다.");
        });
    },
    []
  );

  const onDeleteItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
      e.preventDefault();

      axios
        .delete("https://waycabvav.shop/carts/cart-line-items", {
          data: {
            cartLineItemId: id,
          },
          headers: {
            Authorization: `Bearer ${getCookie("jwt")}`,
          },
        })
        .then((res) => {
          mutateCart();
        })
        .catch((err) => {
          alert("상품을 삭제하지 못했습니다.");
        });
    },
    []
  );

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>관심 상품</TopHeader>
        {[...Array(item?.length)].map((v, index) => {
          return (
            <CartItem key={index}>
              <img
                src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
                alt=""
              />
              <ItemInfo>
                <InfoTop>
                  <div>
                    <span>{item[index]?.name}</span>
                    <span>{getTotalPrice(item, index)}원</span>
                  </div>
                  <div></div>
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
                      <span>
                        총 금액: {getTotalPrice(item, index) * eachLen[index]}원
                      </span>
                      <span>
                        <button
                          onClick={(event) => {
                            onDeleteItem(event, item[index]?.id);
                          }}
                        >
                          X
                        </button>
                      </span>
                    </div>
                  </div>
                </InfoBottom>
              </ItemInfo>
            </CartItem>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Like;
