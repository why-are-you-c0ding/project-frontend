import React, { useCallback, useState } from "react";
import StatusBar from "@components/StatusBar";
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
  Delivery,
  DeliveryTitle,
  DeliveryInfo,
  DeliveryPrice,
  CountBtn,
  TotalPrice,
} from "@components/Buy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import option from "@components/Option";
import { Link, useLocation, useParams } from "react-router-dom";
import { makeCartItems } from "@utils/makeCartItems";
import axios from "axios";
import { getCookie } from "@utils/cookie";

const Buy = () => {
  const location = useLocation();

  const { data: eachData, error } = useSWR<any>(
    `https://waycabvav.shop/items/${location.pathname.split("/")[2]}`,
    fetcher
  );

  const [count, setCount] = useState(1);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
    if (count - 1 > 0) {
      setCount(count - 1);
    }
  };

  // 옵션의 개수
  const optionLen: any = eachData?.optionGroups?.length;

  // 옵션의 이름
  let optGroupNames: Array<string> = [];

  for (let i = 0; i < optionLen; i++) {
    let temp = eachData?.optionGroups[i].optionGroupName;

    if (temp) optGroupNames.push(temp);
  }

  // 각 옵션의 값들 이차 배열
  let optGroupValue: string[][] = [];
  for (let i = 0; i < optionLen; i++) {
    optGroupValue.push([]);

    let temp = eachData?.optionGroups[i].options.length;

    if (temp) {
      for (let j = 0; j < temp; j++) {
        optGroupValue[i].push(
          eachData?.optionGroups[i]?.options[j]?.optionName
        );
      }
    }
  }

  // 각 옵션들 기본값 일차 배열
  let eachOptBase: string[] = [];

  for (let i = 0; i < optGroupValue.length; i++)
    eachOptBase.push(optGroupValue[i][0]);

  // 각 옵션마다 몇개가 들어있는지
  let eachOptLen: number[] = [];

  for (let i = 0; i < optionLen; i++) {
    eachOptLen.push(optGroupValue[i]?.length);
  }

  const [optSelect, setOptSelect] = useState({
    optSelect0: "",
    optSelect1: "",
    optSelect2: "",
    optSelect3: "",
    optSelect4: "",
  });

  const { optSelect0, optSelect1, optSelect2, optSelect3, optSelect4 } =
    optSelect;

  const onChangeSelect = (e: any) => {
    const { name, value } = e.target;

    setOptSelect({
      ...optSelect,
      [name]: value,
    });
  };

  // 이게 값 모음
  let optPrice: number[][] = [];

  for (let i = 0; i < optionLen; i++) {
    optPrice.push([]);
    for (let j = 0; j < eachOptLen[i]; j++) {
      optPrice[i].push(eachData.optionGroups[i].options[j].price);
    }
  }

  const DataPrice = makeCartItems(
    optSelect,
    optGroupNames,
    optGroupValue,
    eachOptBase,
    eachOptLen,
    optionLen,
    optPrice,
    eachData?.itemId,
    count,
    eachData?.itemName
  );

  const Data = DataPrice[0];
  const total = DataPrice[1];

  console.log(Data);

  const onClickCart = useCallback(
    (e: any) => {
      e.preventDefault();

      axios
        .post("https://waycabvav.shop/carts/cart-line-items", Data, {
          headers: {
            Authorization: `Bearer ${getCookie("jwt")}`,
          },
        })
        .then((res) => {
          alert("장바구니에 담겼습니다.");
        })
        .catch((err) => {
          alert("실패");
        });
    },
    [Data]
  );

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <Item>
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMzFfNjEg/MDAxNDkwOTM2NjE4MDQy.eIMvlKaVriccpz8TPo-Wyagr3J6oEz_pRe3S32gADVIg.jQUkh4ws9TiGn6y2h2iu3z5xmyKvxrRMgS0rjJVTRPQg.PNG.jkirby/%EC%9E%A0%EB%A7%8C%EB%B3%B4.png?type=w800"
              alt=""
            />
          </Item>
        </LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          <Itemdetail>
            <ItemName>{eachData?.itemName}</ItemName>
          </Itemdetail>
          <Option>
            <div>
              {optGroupNames.map((v, index) => {
                return (
                  <div key={index}>
                    <h3>{v}</h3>
                    <select
                      name={`optSelect${index}`}
                      onChange={onChangeSelect}
                    >
                      {[...Array(eachOptLen[index])].map((w, idx) => (
                        <option value={optGroupValue[index][idx]} key={idx}>
                          {optGroupValue[index][idx]}{" "}
                          {index !== 0 && `(+${optPrice[index][idx]})`}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          </Option>

          <TotalPrice>총 가격: {total}원</TotalPrice>

          <Btn>
            <div>
              <CountBtn>
                <button onClick={Minus}>-</button>
                <span>{count}</span>
                <button onClick={Plus}>+</button>
              </CountBtn>
              <SelectBtn onClick={onClickCart}>
                <FontAwesomeIcon icon={faBasketShopping} />
                장바구니
              </SelectBtn>
            </div>
            <Link to="/checkout">
              <BuyBtn type="submit">구매</BuyBtn>
            </Link>
          </Btn>

          <Delivery>
            <DeliveryTitle>
              배송정보
              <FontAwesomeIcon icon={faTruck} />
            </DeliveryTitle>
            <DeliveryInfo>
              <DeliveryPrice>일반배송 3000원</DeliveryPrice>
            </DeliveryInfo>
          </Delivery>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Buy;
