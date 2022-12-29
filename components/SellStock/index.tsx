import React, { ChangeEvent, useCallback, useState } from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import axios from "axios";
import useInput from "@hooks/useInput";
import { makeStock } from "@utils/makeStock";
import {
  Wrapper,
  InputLine,
  BuyBtn,
  CheckStock,
  RegisterStock,
  RegisterLeft,
  RegisterRight,
  CheckName,
  CheckValue,
} from "@components/SellStock/styles";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import option from "@components/SignUpItemBodys/SellOption";
import { Input } from "@components/SignUpItemBodys/SellOption/styles";

const SellStock = () => {
  const [number, setNumber] = useState<any>({});

  // const [optList, setoptlist] = useState({
  //   optlist1: "",
  // });
  //
  // const { optlist1 } = optList;
  //
  // const handleIdList = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //
  //   setoptlist({
  //     ...optList,
  //     [name]: value,
  //   });
  // };
  //
  // //list에 optlist객체 값 넣기
  // let list: any[] = Object.values(optList);
  //
  // //푸시할 배열 생성
  // let optionIdList: any[] = [];
  //
  // //,을 기준으로 나누어서 삽입 split하면 문자열로 들어가기 때문에 number로 변환
  // let change = list[0].replace(/\s/g, "").split(",").map(Number);
  // optionIdList.push(change);
  //
  // // 전달 할 optionIdList 확인
  // // console.log(optionIdList);

  const { data: eachData, error } = useSWR<any>(
    "https://waycabvav.shop/items/1",
    fetcher
  );

  //상위 옵션 이름 길이
  const optionLen: any = eachData?.optionGroups?.length;

  // 전체 데이터의 상위 옵션 이름
  let optGroupNames: Array<string> = [];

  for (let i = 0; i < optionLen; i++) {
    let temp = eachData?.optionGroups[i].optionGroupName;

    if (temp) optGroupNames.push(temp);
  }

  // 각 옵션의 값들 이차 배열
  let optGroupValue: string[][] = [];

  for (let i = 0; i < optionLen; i++) {
    optGroupValue.push([]);

    //전테 데이터의 하위 옵션 길이
    let temp = eachData?.optionGroups[i].options.length;

    if (temp) {
      for (let j = 0; j < temp; j++) {
        optGroupValue[i].push(
          eachData?.optionGroups[i]?.options[j]?.optionName
        );
      }
    }
  }

  // 각 옵션의 값들 이차 배열
  let optGroupId: number[][] = [];

  for (let i = 0; i < optionLen; i++) {
    optGroupId.push([]);

    //전테 데이터의 하위 옵션 길이
    let temp1 = eachData?.optionGroups[i].options.length;

    if (temp1) {
      for (let j = 0; j < temp1; j++) {
        optGroupId[i].push(eachData?.optionGroups[i]?.options[j]?.optionId);
      }
    }
  }
  //전체 데이터 확인
  console.log(eachData);

  let eachOptBase: string[] = [];

  for (let i = 0; i < optGroupValue.length; i++)
    eachOptBase.push(optGroupValue[i][0]);

  // 각 옵션마다 몇개가 들어있는지
  let eachOptLen: number[] = [];

  for (let i = 0; i < optionLen; i++) {
    eachOptLen.push(optGroupValue[i]?.length);
  }

  // 옵션값들 모음 일차 배열
  let optFlat = optGroupValue.flat();

  // 옵션ID들 모음 일차 배열
  let optId = optGroupId.flat();

  //각 옵션 아이디 출력
  console.log(optId);

  //옵션 아이디 길이
  let long = optId.length;

  const stringArray: number[] = Object.values(number);

  //넘버 어레이 숫자 배열로 변환
  const NumberArray = stringArray.map((i) => Number(i));

  //가격 배열 출력
  console.log(NumberArray);

  //보내기전 데이터 확인
  const data = makeStock(optId, NumberArray, long);

  console.log(data);

  const onSubmitStock = useCallback(
    (e: any) => {
      e.preventDefault();

      axios
        .post("https://waycabvav.shop/stocks", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          alert("등록 성공!");
        })
        .catch((err) => {
          alert("등록 실패");
        });
    },
    [data]
  );

  return (
    <Wrapper>
      <ReponsiveBar title={"재고 등록"} />

      <TopHeader>재고 등록</TopHeader>
      <InputLine>
        <CheckStock>
          <h1>등록 할 재고 확인</h1>
          {optGroupNames.map((v, index) => {
            return (
              <div key={index}>
                <CheckName>상품 옵션 이름: {v}</CheckName>
                <CheckValue>
                  {[...Array(eachOptLen[index])].map((w, idx) => (
                    <option value={optGroupValue[index][idx]} key={idx}>
                      {optGroupValue[index][idx]}
                    </option>
                  ))}
                </CheckValue>
              </div>
            );
          })}
        </CheckStock>
        <RegisterStock>
          <h1>수량 등록</h1>
          {optFlat.map((v: any, index: any) => {
            const num = index.toString();

            if (v !== "") {
              return (
                <div key={index}>
                  <RegisterLeft>{v}</RegisterLeft>
                  <RegisterRight>
                    <Input
                      type="text"
                      placeholder="등록할 수량을 입력해주세요"
                      onChange={(e: any) => {
                        setNumber({
                          ...number,
                          [`${num}`]: e.target.value,
                        });
                      }}
                    />
                  </RegisterRight>
                </div>
              );
            }
          })}
        </RegisterStock>
      </InputLine>
      <BuyBtn onClick={onSubmitStock}>재고 등록</BuyBtn>
    </Wrapper>
  );
};

export default SellStock;
