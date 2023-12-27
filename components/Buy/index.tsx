import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import StatusBar from "@components/UI/StatusBar";
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
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import option from "@components/SellerPages/CreateItemsBodys/SellOption";
import { Link, useLocation } from "react-router-dom";
import { makeCartItems } from "@utils/makeCartItems";
import axios from "axios";
import { IEachData } from "@typings/db";
import { itemsApi } from "@api/itemsApi";
import { Select } from "@chakra-ui/react";

const Buy = () => {
  const { pathname } = useLocation();
  const [count, setCount] = useState(1);
  const [eachPrices, setEachPrices] = useState<{ [key: number]: number }>({});
  const [price, setPrice] = useState(0);
  const { data, error, isFetching } = itemsApi.useGetEachItemsQuery(
    +pathname.slice(6),
  );

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    setCount((prev) => prev - 1);
  };

  const onChangeSelect = useCallback(
    (optionGroupIdx: number, optionIdx: number) => {
      if (data) {
        let temp = { ...eachPrices };
        temp[optionGroupIdx] =
          +data.optionGroups[optionGroupIdx].options[optionIdx].price;

        setEachPrices(temp);
        setPrice(Object.values(temp).reduce((a, c) => a + c, 0));
      }
    },
    [data, eachPrices],
  );

  useEffect(() => {
    if (data) {
      let tempEachPrice: { [key: number]: number } = {};
      let tempPrice = 0;

      data.optionGroups.map((optionGroups, index) => {
        tempEachPrice[index] = +optionGroups.options[0].price;
        tempPrice += +optionGroups.options[0].price;
      });

      setEachPrices(tempEachPrice);
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
                <SelectBtn onClick={() => {}}>
                  <FontAwesomeIcon icon={faBasketShopping} />
                  <span>장바구니</span>
                </SelectBtn>
              </div>

              <Link
                to={`/checkout/${location.pathname.split("/")[2]}`}
                state={
                  {
                    // eachData: eachData,
                    // optInfo: Data,
                    // count: count,
                    // total: total,
                  }
                }
              >
                <BuyBtn type="submit">구매</BuyBtn>
              </Link>
            </Btn>
          </RightSide>
        </Wrapper>
      )}
    </div>
  );
};

export default Buy;
