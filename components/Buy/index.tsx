import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
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
  CountBtn,
  TotalPrice,
  ItemInfo,
} from "@components/Buy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import option from "@components/Option";
import { Link, useLocation } from "react-router-dom";
import { makeCartItems } from "@utils/makeCartItems";
import axios from "axios";
import { IEachData } from "@typings/db";
import NullData from "@components/NullData";

const Buy = () => {
  const location = useLocation();

  const { data: eachData, error } = useSWR<IEachData | undefined>(
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
  const optionLen: number = eachData ? eachData?.optionGroups?.length : 0;

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

    if (temp && eachData) {
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

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setOptSelect({
      ...optSelect,
      [name]: value,
    });
  };

  // 이게 값 모음
  let optPrice: number[][] = [];

  if (eachData) {
    for (let i = 0; i < optionLen; i++) {
      optPrice.push([]);
      for (let j = 0; j < eachOptLen[i]; j++) {
        optPrice[i].push(eachData.optionGroups[i].options[j].price);
      }
    }
  }

  const DataPrice = makeCartItems(
    optSelect,
    optGroupNames,
    optGroupValue,
    optionLen,
    optPrice,
    eachData?.itemId,
    count,
    eachData?.itemName,
    eachData?.imageUrl
  );

  const Data = DataPrice[0];
  const total = DataPrice[1];

  const onClickCart = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      axios
        .post("https://waycabvav.shop/carts/cart-line-items", Data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          // alert("장바구니에 담겼습니다");
        })
        .catch((err) => {});
    },
    [Data]
  );

  const PlusLike = useCallback((e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/recommend", {
        data: {
          item_id: eachData?.itemId,
          rating: 3.5,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        alert("증가");
      })
      .catch((err) => {});
  }, []);

  const PlusBuy = useCallback((e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/recommend", {
        data: {
          item_id: eachData?.itemId,
          rating: 4.5,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        alert("증가");
      })
      .catch((err) => {});
  }, []);

  console.log(Data);

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <Item>
            <img src={eachData?.imageUrl} alt="상품 사진" />
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
                    <h4>{v}</h4>
                    <select
                      name={`optSelect${index}`}
                      onChange={onChangeSelect}
                    >
                      {[...Array(eachOptLen[index])].map((w, idx) => (
                        <option value={optGroupValue[index][idx]} key={idx}>
                          {optGroupValue[index][idx]}
                          {index !== 0 && `(+${optPrice[index][idx]})`}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          </Option>

          <ItemInfo>{eachData?.information}</ItemInfo>

          <TotalPrice>총 가격: {total}원</TotalPrice>

          <Btn>
            <div>
              <CountBtn>
                <button onClick={Minus}>-</button>
                <span>{count}</span>
                <button onClick={Plus}>+</button>
              </CountBtn>
              <form onSubmit={onClickCart}>
                <SelectBtn type={"submit"}>
                  <FontAwesomeIcon icon={faBasketShopping} />
                  장바구니
                </SelectBtn>
              </form>
            </div>
            <form onSubmit={PlusBuy}>
              <Link
                to={{
                  pathname: `/checkout/${location.pathname.split("/")[2]}`,
                  state: {
                    eachData: eachData,
                    optInfo: Data,
                    count: count,
                    total: total,
                  },
                }}
              >
                <BuyBtn type="submit">구매</BuyBtn>
              </Link>
            </form>
          </Btn>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Buy;
