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

const eachData: { [key: string]: string | number | undefined } = {};

const Buy = (props: any) => {
  const { data: eachData, error } = useSWR<EachProduct | undefined>(
    "https://waycabvav.shop/items/18",
    fetcher
  );

  let { id } = useParams<{ id: any }>();

  id = eachData?.itemId;
  console.log("eachData", eachData);
  for (let x in eachData) {
    console.log("x", x);
  }
  console.log(id);
  console.log(eachData);
  console.log(eachData?.optionGroups[0]);
  console.log(eachData?.optionGroups[0].options[0].optionName);
  console.log(eachData?.optionGroups[0].options[1].optionName);

  console.log(eachData?.optionGroups[1].options[0].optionName);
  console.log(eachData?.optionGroups[1].options[1].optionName);

  const optionColor = [
    eachData?.optionGroups[0].options[0].optionName,
    eachData?.optionGroups[0].options[1].optionName,
  ];

  const optionSize = [
    eachData?.optionGroups[1].options[0].optionName,
    eachData?.optionGroups[1].options[1].optionName,
  ];

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleColor = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  }, []);

  const handleSize = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  }, []);

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
            <select onChange={handleColor} value={color}>
              {optionColor.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <select onChange={handleSize} value={size}>
              {optionSize.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <select onChange={handleSize} value={size}>
              {optionSize.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <select onChange={handleSize} value={size}>
              {optionSize.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <select onChange={handleSize} value={size}>
              {optionSize.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Option>
          <Btn>
            <BuyBtn type="submit">구매</BuyBtn>
            <SelectBtn type="submit">
              <FontAwesomeIcon icon={faBasketShopping} />
              관심상품
            </SelectBtn>
          </Btn>
          <DetailOrder>
            <span>상품 정보</span>
            <table>
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
            </table>
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
