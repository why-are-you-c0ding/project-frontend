import React, { ChangeEvent, useCallback, useState } from "react";
import StatusBar from "@components/StatusBar";
import {
  Wrapper,
  LeftSide,
  MiddleSide,
  RightSide,
  Item,
  ItemName,
  Option,
  OptionList,
  Itemdetail,
  Btn,
  BuyBtn,
  SelectBtn,
  DetailOrder,
  Delivery,
  DeliveryTitle,
  DeliveryInfo,
  DeliveryPrice,
  DeliverySub,
} from "@components/Buy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { EachProduct } from "@typings/db";
import { useParams } from "react-router";
import option from "@components/Option";
import { Link } from "react-router-dom";

const Buy = () => {
  const { data: eachData, error } = useSWR<any>(
    "https://waycabvav.shop/items/26",
    fetcher
  );

  console.log(eachData);

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

  console.log(optGroupValue);
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

  let test = "";

  if (optSelect0 === "") {
    test = eachOptBase[0];
  } else test = optSelect0;

  console.log(test);
  console.log(eachData);

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
            {optGroupNames.map((v, index) => {
              return (
                <div key={index}>
                  <h2>{v}</h2>

                  <select name={`optSelect${index}`} onChange={onChangeSelect}>
                    {[...Array(eachOptLen[index])].map((w, idx) => (
                      <option value={optGroupValue[index][idx]} key={idx}>
                        {optGroupValue[index][idx]}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </Option>
          <Btn>
            <Link to="/checkout">
              <BuyBtn type="submit">구매</BuyBtn>
            </Link>
            <SelectBtn type="submit">
              <FontAwesomeIcon icon={faBasketShopping} />
              관심상품
            </SelectBtn>
          </Btn>
          <DetailOrder>
            <span>상품 정보</span>
            <div>
              <span>
                <div>모델번호</div>
              </span>
              <span>
                <div>출시일</div>
              </span>
              <span>
                <div>컬러</div>
              </span>
              <span>
                <div>발매가</div>
              </span>
            </div>
          </DetailOrder>
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
