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
  DeliverySub,
  CountBtn,
} from "@components/Buy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import option from "@components/Option";
import { Link } from "react-router-dom";
import { makeCartItems } from "@utils/makeCartItems";
import axios from "axios";

const Buy = () => {
  const { data: eachData, error } = useSWR<any>(
    "https://waycabvav.shop/items/30",
    fetcher
  );

  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
    if (count - 1 >= 0) {
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

  const Data = makeCartItems(
    optSelect,
    optGroupNames,
    optGroupValue,
    eachOptBase,
    eachOptLen,
    optionLen,
    optPrice,
    count,
    eachData?.itemId,
    eachData?.itemName
  );

  const onClickCart = useCallback(
    (e: any) => {
      e.preventDefault();

      axios
        .post("https://waycabvav.shop/carts/cart-line-items", Data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          alert("성공");
        })
        .catch((err) => {
          alert("실패");
        });
    },
    [Data]
  );

  // console.log("optionLen: ", optionLen);
  // console.log("optGroupNames: ", optGroupNames);
  // console.log("optGroupValue: ", optGroupValue);
  // console.log("eachOptBase: ", eachOptBase);
  // console.log("eachOptLen: ", eachOptLen);
  // console.log("optSelect: ", optSelect);
  // console.log("optPrice: ", optPrice);
  //
  // let test = "";
  //
  // if (optSelect0 === "") {
  //   test = eachOptBase[0];
  // } else test = optSelect0;

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
                          {optGroupValue[index][idx]}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          </Option>
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
          {/*<DetailOrder>*/}
          {/*  <span>상품 정보</span>*/}
          {/*  <div>*/}
          {/*    <span>*/}
          {/*      <div>모델번호</div>*/}
          {/*    </span>*/}
          {/*    <span>*/}
          {/*      <div>출시일</div>*/}
          {/*    </span>*/}
          {/*    <span>*/}
          {/*      <div>컬러</div>*/}
          {/*    </span>*/}
          {/*    <span>*/}
          {/*      <div>발매가</div>*/}
          {/*    </span>*/}
          {/*  </div>*/}
          {/*</DetailOrder>*/}
          <Delivery>
            <DeliveryTitle>
              배송정보
              <FontAwesomeIcon icon={faTruck} />
            </DeliveryTitle>
            <DeliveryInfo>
              <DeliveryPrice>일반배송 3000원</DeliveryPrice>
              <DeliverySub>검수 후 배송 5-7일 내 도착 예정</DeliverySub>
            </DeliveryInfo>
          </Delivery>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Buy;
