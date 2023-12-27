import React, { useCallback, useEffect, useState } from "react";
import {
  Wrapper,
  LeftSide,
  MiddleSide,
  RightSide,
  Item,
  ItemName,
  Option,
  Itemdetail,
  Btn,
  BuyBtn,
  SelectBtn,
  CountBtn,
  TotalPrice,
  ItemInfo,
} from "@components/Buy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { itemsApi } from "@api/itemsApi";
import { useAppSelector } from "@redux/hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { orderLineItem, orderOptionGroup } from "@typings/items";

const Buy = () => {
  const { pathname } = useLocation();
  const isLogin = useAppSelector((state) => state.userInfo.isLogin);
  const [count, setCount] = useState(1);
  const [selectOptions, setSelectOptions] = useState<{ [key: number]: number }>(
    {},
  );
  const [price, setPrice] = useState(0);
  const { data, error, isFetching } = itemsApi.useGetEachItemsQuery(
    +pathname.slice(6),
  );
  const navigate = useNavigate();

  const plusCount = () => {
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

  // TODO: 장바구니 담기 버튼
  const onClickCart = useCallback(() => {
    if (!isLogin) {
      toast.warning("로그인 해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
  }, [isLogin]);

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

      const itemInfo: orderLineItem & { totalPayment: number } = {
        itemId: data.itemId,
        name: data.itemName,
        count: count,
        price: +data.price,
        orderOptionGroups: orderOptionGroups,
        totalPayment: price,
      };

      navigate("/checkout", { state: { itemInfo } });
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

      {isFetching && <div>로딩중...</div>}

      {!error && !isFetching && data && (
        <Wrapper>
          <LeftSide>
            <Item>
              <img src={data.imageUrl} alt="상품 사진" />
            </Item>
          </LeftSide>
          <MiddleSide />
          <RightSide>
            <Itemdetail>
              <ItemName>{data.itemName}</ItemName>
            </Itemdetail>
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
                      <option
                        key={option.optionId}
                        value={optionIdx}

                        // onClick={() => {
                        //   onChangeSelect(optionGroupIdx, optionIdx);
                        //   console.log("여기 실행");
                        // }}
                      >
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

            <ItemInfo>상품 설명: {data.information}</ItemInfo>
            <ItemInfo>카테고리: {data.category}</ItemInfo>

            <TotalPrice>총 가격: {price}원</TotalPrice>

            <Btn>
              <div>
                <CountBtn>
                  <button onClick={minusCount}>-</button>
                  <span>{count}</span>
                  <button onClick={plusCount}>+</button>
                </CountBtn>
                <SelectBtn onClick={onClickCart}>
                  <FontAwesomeIcon icon={faBasketShopping} />
                  <span>장바구니</span>
                </SelectBtn>
              </div>

              <BuyBtn onClick={onClickBuy}>구매</BuyBtn>
            </Btn>
          </RightSide>
        </Wrapper>
      )}
    </div>
  );
};

export default Buy;
