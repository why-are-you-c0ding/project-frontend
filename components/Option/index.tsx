import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { BuyBtn, Explain } from "@components/Sell/styles";
import {
  Input,
  MakeTableBtn,
  OptNameInput,
  OptTable,
  Wrapper,
} from "@components/Option/styles";
import { makeOptionGroupRequests } from "@utils/makeOptionRequests";
import axios from "axios";
import { Redirect } from "react-router";

interface Props {
  itemName: string;
  imageUrl: string;
  information: string;
}

const Option: FC<Props> = ({ itemName, imageUrl, information }) => {
  const [toggleTable, setToggleTable] = useState(false);

  //optName
  const [optName, setOptName] = useState({
    optName1: "",
    optName2: "",
    optName3: "",
    optName4: "",
    optName5: "",
  });

  const { optName1, optName2, optName3, optName4, optName5 } = optName;

  const onChangeOptName = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptName({
      ...optName,
      [name]: value,
    });
  };

  //optValue
  const [optValue, setOptValue] = useState({
    optValue1: "",
    optValue2: "",
    optValue3: "",
    optValue4: "",
    optValue5: "",
  });

  const { optValue1, optValue2, optValue3, optValue4, optValue5 } = optValue;

  const onChangeOptValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptValue({
      ...optValue,
      [name]: value,
    });
  };

  // 옵션명 모음 일차 배열
  let optNameAll: string[] = Object.values(optName);

  let optValueAll: string[] = Object.values(optValue);
  // 한 옵션명의 옵션값들 모음 이차 배열
  let opt: string[][] = [];

  for (let i = 0; i < 5; i++) {
    let temp = optValueAll[i].split(",");

    let ary: string[] = [];

    for (let i = 0; i < temp.length; i++) {
      ary.push(temp[i].trim());
    }

    if (temp[0] !== "") opt.push(ary);
  }

  // 옵션값들 모음 일차 배열
  let optFlat: string[] = [];

  let dummyOpt: string[][] = [];

  for (let i = 0; i < opt.length; i++) {
    let temp = opt[i]?.filter((item) => item !== "");

    dummyOpt.push(temp);
    opt[i] = temp;

    if (i !== opt.length - 1) dummyOpt.push([""]);
  }

  optFlat = dummyOpt.flat();

  // 옵션값들 각각 추가 가격
  const [optPrice, setOptPrice] = useState<any>({});

  let price: string[] = Object.values(optPrice);

  const Data = makeOptionGroupRequests(
    optFlat,
    price,
    optNameAll,
    opt,
    itemName,
    imageUrl,
    information
  );

  const onClickToggleTable = useCallback(() => {
    // if (!checkImg) {
    //   alert("사진 등록을 해주세요.");
    //   return;
    // }

    if (information === "") {
      alert("상세 설명을 입력해주세요.");
      return;
    }

    if (itemName === "") {
      alert("상품 이름을 입력해주세요.");
      return;
    }

    if (optName1 === "") {
      alert("옵션명을 입력해주세요.");
      return;
    }

    if (Data?.optionGroups.length === 0) {
      alert("옵션값을 입력해주세요.");
      return;
    }

    setToggleTable((prev) => !prev);
  }, [itemName, optName1, Data]);

  const onSubmitItems = useCallback(
    (e: any) => {
      e.preventDefault();

      // if (!checkImg) {
      //   alert("사진 등록을 해주세요");
      //   return;
      // }

      if (information === "") {
        alert("상세 설명을 입력해주세요.");
        return;
      }

      if (optName1 === "") {
        alert("옵션명을 입력해주세요.");
        return;
      }

      if (Data?.optionGroups.length === 0) {
        alert("옵션값을 입력해주세요.");
        return;
      }

      if (Data?.optionGroups[0]?.options[0]?.price === undefined) {
        alert("가격을 입력해주세요");
        return;
      }

      axios
        .post("https://waycabvav.shop/items", Data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          alert("등록 성공!");
          return <Redirect to="sellpage/sellstock" />;
        })
        .catch((err) => {
          alert("상품 등록에 실패하였습니다.");
        });
    },
    [Data]
  );

  return (
    <Wrapper>
      <h2>옵션</h2>
      <Explain>
        첫번째 옵션엔 기본값을 넣어주세요. 옵션값은 1,000원 이상
        <br />
        옵션명 5자 이상, 옵션값 4자 이상
      </Explain>
      <div>
        <OptNameInput>
          <div>
            <span>옵션명</span>
            <span>옵션값</span>
          </div>
          <div>
            <Input
              type="text"
              name="optName1"
              value={optName1}
              onChange={onChangeOptName}
              placeholder={"예시) 색상"}
            />
            <Input
              type="text"
              name="optValue1"
              value={optValue1}
              onChange={onChangeOptValue}
              placeholder={"기본값 입력, 예시) 20000"}
            />
          </div>

          <div>
            <Input
              type="text"
              name="optName2"
              value={optName2}
              onChange={onChangeOptName}
              placeholder={"예시) 사이즈"}
            />
            <Input
              type="text"
              name="optValue2"
              value={optValue2}
              onChange={onChangeOptValue}
              placeholder={"옵션값 입력, 예시) 1000"}
            />
          </div>
          <div>
            <Input
              type="text"
              name="optName3"
              value={optName3}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue3"
              value={optValue3}
              onChange={onChangeOptValue}
            />
          </div>

          <div>
            <Input
              type="text"
              name="optName4"
              value={optName4}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue4"
              value={optValue4}
              onChange={onChangeOptValue}
            />
          </div>
          <div>
            <Input
              type="text"
              name="optName5"
              value={optName5}
              onChange={onChangeOptName}
            />
            <Input
              type="text"
              name="optValue5"
              value={optValue5}
              onChange={onChangeOptValue}
            />
          </div>
        </OptNameInput>

        <MakeTableBtn>
          <button onClick={onClickToggleTable}>목록 만들기</button>
        </MakeTableBtn>

        {toggleTable && (
          <OptTable>
            <h2>옵션 목록(추가 가격)</h2>
            {optFlat.map((v, index) => {
              const num = index.toString();

              if (v !== "") {
                return (
                  <div key={index}>
                    <span>{v}</span>
                    <Input
                      type="text"
                      onChange={(e: any) => {
                        setOptPrice({
                          ...optPrice,
                          [`${num}`]: e.target.value,
                        });
                      }}
                    />
                  </div>
                );
              } else {
                return <div key={index} className={"line"}></div>;
              }
            })}
            <BuyBtn onClick={onSubmitItems}>상품 등록</BuyBtn>
          </OptTable>
        )}
      </div>
    </Wrapper>
  );
};

export default Option;
