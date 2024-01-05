import React, { useCallback, useEffect, useState } from "react";
import { ItemCount, ItemDescription, ItemPrice } from "./styles";
import {
  ButtonWrapper,
  BuyBtn,
  CountBtn,
  ItemName,
  ItemImgWrapper,
  Option,
  ItemInfoWrapper,
  SelectBtn,
  Wrapper,
} from "@pages/EachItem/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@redux/hooks";
import { itemsApi } from "@api/itemsApi";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  addCartItem,
  approvalItemInfo,
  cartOptionGroup,
  orderOptionGroup,
} from "@typings/items";

const EachItem = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.userInfo.isLogin);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectOptions, setSelectOptions] = useState<{ [key: number]: number }>(
    {},
  );
  const [addCartItemMutation] = itemsApi.useAddCartItemMutation();
  const { data, error, isLoading } = itemsApi.useGetEachItemsQuery(
    +pathname.slice(10),
  );

  const plusCount = () => {
    if (count + 1 > 10000) return;
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count - 1 > 0) setCount((prev) => prev - 1);
  };

  const onChangeSelect = useCallback(
    (optionGroupIdx: number, optionIdx: number) => {
      if (data) {
        let tempSelectOption = { ...selectOptions };
        let tempPrice = +data.price;

        tempSelectOption[optionGroupIdx] = optionIdx;
        for (let i = 0; i < data.optionGroups.length; i++) {
          tempPrice += +data.optionGroups[i].options[tempSelectOption[i]].price;
        }

        setSelectOptions(tempSelectOption);
        setPrice(tempPrice);
      }
    },
    [data, selectOptions],
  );

  const onClickCart = useCallback(async () => {
    if (!isLogin) {
      toast.warning("로그인 해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (data) {
      const cartOptionGroups: cartOptionGroup[] = [];

      Object.values(selectOptions).map(
        (selectIdx: number, optionIdx: number) => {
          cartOptionGroups.push({
            name: data.optionGroups[optionIdx].optionGroupName,
            cartOption: {
              name: data.optionGroups[optionIdx].options[selectIdx].optionName,
              price: data.optionGroups[optionIdx].options[selectIdx].price,
            },
          });
        },
      );

      const cartItemInfo: addCartItem = {
        itemId: data.itemId,
        name: data.itemName,
        count: count,
        imageUrl: data.imageUrl,
        price: +data.price,
        cartOptionGroups: cartOptionGroups,
      };

      try {
        await addCartItemMutation(cartItemInfo);
        toast.success("장바구니에 담았습니다!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.error("잠시 후에 다시 시도해 주세요.", error);
      }

      //장바구니에 담는 api 호출하고 장바구니로 이동하시겠습니까? 라는 모달출력
    }
  }, [isLogin, data, count, price]);

  const onClickBuy = useCallback(() => {
    if (!isLogin) {
      toast.warning("로그인 해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (data) {
      const orderOptionGroups: orderOptionGroup[] = [];

      Object.values(selectOptions).map(
        (selectIdx: number, optionIdx: number) => {
          orderOptionGroups.push({
            name: data.optionGroups[optionIdx].optionGroupName,
            orderOption: {
              name: data.optionGroups[optionIdx].options[selectIdx].optionName,
              price: data.optionGroups[optionIdx].options[selectIdx].price,
            },
          });
        },
      );

      const itemInfo: (approvalItemInfo & { image: string })[] = [
        {
          itemId: data.itemId,
          name: data.itemName,
          count: count,
          price: +data.price,
          orderOptionGroups: orderOptionGroups,
          totalPayment: price,
          image: data.imageUrl,
        },
      ];

      navigate("/approval", { state: itemInfo });
    }
  }, [isLogin, data, count, price]);

  useEffect(() => {
    if (data) {
      let tempSelectOption: { [key: number]: number } = {};
      let tempPrice = +data.price;

      data.optionGroups.map((optionGroup, index) => {
        tempSelectOption[index] = 0;
        tempPrice += +optionGroup.options[0].price;
      });

      setSelectOptions(tempSelectOption);
      setPrice(tempPrice);
    }
  }, [data]);

  return (
    <div>
      {error && <div>새로고침하여 주세요.</div>}

      {isLoading && <div>로딩중...</div>}

      {data && (
        <Wrapper>
          <ItemImgWrapper>
            <img src={data.imageUrl} alt="상품 사진" />
          </ItemImgWrapper>
          <ItemInfoWrapper>
            <ItemName>
              <div>
                <span>{data.itemName}</span>
                <span>({data.category})</span>
              </div>
            </ItemName>

            <div>
              <ItemDescription>{data.information}</ItemDescription>

              <Option>
                <div>
                  {data.optionGroups.map((optionGroup, optionGroupIdx) => (
                    <select
                      key={optionGroup.optionGroupId}
                      name={optionGroup.optionGroupName}
                      onChange={(e) =>
                        onChangeSelect(optionGroupIdx, +e.target.value)
                      }
                    >
                      {optionGroup.options.map((option, optionIdx) => (
                        <option key={option.optionId} value={optionIdx}>
                          {option.optionName.length > 12
                            ? `${option.optionName.slice(0, 12)}...`
                            : option.optionName}{" "}
                          (+{option.price})
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              </Option>

              <ItemPrice>총 가격: {price}원</ItemPrice>
              <ItemCount>
                <span>수량:</span>
                <CountBtn>
                  <button onClick={minusCount}>-</button>
                  <span>{count}</span>
                  <button onClick={plusCount}>+</button>
                </CountBtn>
              </ItemCount>

              <ButtonWrapper>
                <div>
                  <SelectBtn onClick={onClickCart}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <span>장바구니</span>
                  </SelectBtn>
                </div>
                <div>
                  <BuyBtn onClick={onClickBuy}>구매</BuyBtn>
                </div>
              </ButtonWrapper>
            </div>
          </ItemInfoWrapper>
        </Wrapper>
      )}
    </div>
  );
};
export default EachItem;
