import React, { useEffect, useState } from "react";
import StatusBar from "@components/StatusBar";
import { useRef } from "react";
import {
  Wrapper,
  LeftSide,
  MiddleSide,
  RightSide,
  Btn,
  BuyBtn,
} from "@components/Sell/styles";

import { Itemdetail, ItemFullName, ItemName } from "@components/Buy/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import axios from "axios";

const Sell = () => {
  const [itemname, onChangeItemname, setItemName] = useInput("");
  const [itemfullname, onChangeitemfullname, setItemFullName] = useInput("");
  const [price, onChangeprice, setprice] = useInput("");
  const [files, setFiles] = useState("");

  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader: any = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
  };

  const onLoadFile = (e: any) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  const handleClick = (e: any) => {
    const formdata = new FormData();
    formdata.append("images", files[0]);

    axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: "https://waycabvav.shop/images",
      method: "post",
      data: formdata,
    });
  };

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <h2>이미지 미리보기</h2>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={onLoadFile}
          />

          <button onClick={handleClick}>보내기</button>

          <div className="preview">
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          </div>
        </LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          <Itemdetail>
            <ItemName>상품 이름</ItemName>
            <Input
              type="text"
              name="item-name"
              value={itemname}
              onChange={onChangeItemname}
              placeholder=" 예시) 잠만보"
            />
            <ItemFullName>상세 이름을 적어주세요</ItemFullName>
            <Input
              type="text"
              name="item-fullname"
              value={itemfullname}
              onChange={onChangeitemfullname}
              placeholder=" 예시) 잠만보 진짜 잠만 잠"
            />
            <ItemFullName>가격</ItemFullName>
            <Input
              type="text"
              name="price"
              value={price}
              onChange={onChangeprice}
              placeholder=" 예시) 20300원"
            />
          </Itemdetail>
          <Btn>
            <BuyBtn type="submit">판매</BuyBtn>
          </Btn>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Sell;
