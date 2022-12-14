import React, { useCallback } from "react";

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
import NullData from "@components/NullData";
import { cartLineItems, ICartData } from "@typings/db";

const Like = () => {
  const {
    data: cartData,
    mutate: mutateCart,
    error,
  } = useSWR<ICartData>("https://waycabvav.shop/carts", fetcher);

  let item: cartLineItems[] = [];

  if (cartData) item = Object.values(cartData)[0];

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
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          mutateCart();
        })
        .catch((err) => {
          alert("????????? ???????????? ???????????????.");
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
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          mutateCart();
        })
        .catch((err) => {
          alert("????????? ???????????? ???????????????.");
        });
    },
    []
  );

  return (
    <div>
      <ReponsiveBar title={"????????????"} />
      <Wrapper>
        <TopHeader>????????????</TopHeader>

        {item.length === 0 && <NullData />}

        {[...Array(item?.length)].map((v, index) => {
          return (
            <CartItem key={index}>
              <img src={item[index]?.imageUrl} alt={item[index]?.name} />
              <ItemInfo>
                <InfoTop>
                  <div>
                    <span>{item[index]?.name}</span>
                    <span>{getTotalPrice(item, index)}???</span>
                  </div>
                  <div style={{ color: "rgba(0,0,0,0.4)" }}>
                    {item[index]?.cartOptionGroups[0]?.cartOptions[0]?.name}
                    &nbsp;&nbsp;
                    {item[index]?.cartOptionGroups[1]?.cartOptions[0]?.name}
                    &nbsp;&nbsp;
                    {item[index]?.cartOptionGroups[2]?.cartOptions[0]?.name}
                    &nbsp;&nbsp;
                    {item[index]?.cartOptionGroups[3]?.cartOptions[0]?.name}
                    &nbsp;&nbsp;
                    {item[index]?.cartOptionGroups[4]?.cartOptions[0]?.name}
                  </div>
                </InfoTop>
                <InfoBottom>
                  <div>
                    <span>2~3??? ??? ??????</span>
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
                      <span>{eachLen[index]}???</span>
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
                      {/*  {getTotalPrice(item, index) * eachLen[index]}???*/}
                      {/*</span>*/}
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
