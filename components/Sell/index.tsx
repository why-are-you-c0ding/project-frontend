import React, { FormEvent, useState } from "react";
import StatusBar from "@components/StatusBar";
import {
  Wrapper,
  LeftSide,
  RightSide,
  Btn,
  BuyBtn,
  ItemInfo,
  ItemTitle,
  Preview,
} from "@components/Sell/styles";

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

    encodeFileToBase64(e.target.files[0]);
  };

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("images", files[0]);

    axios
      .post("https://waycabvav.shop/images", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        alert("성공");
      })
      .catch((error) => {
        alert("실패");
      });

    // 이거도 되는 방법
    // axios({
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   url: "https://waycabvav.shop/images",
    //   method: "post",
    //   data: formdata,
    // });
  };

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <LeftSide>
          <h2>등록 상품 이미지</h2>

          <form onSubmit={handleClick}>
            <Preview>
              {imageSrc && <img src={imageSrc} alt="preview-img" />}
            </Preview>

            <div>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={onLoadFile}
              />
              <button type="submit">상품 사진 등록하기</button>
            </div>
          </form>
        </LeftSide>
        <RightSide>
          <ItemInfo>
            <label>
              <ItemTitle>상품 이름</ItemTitle>
              <Input
                type="text"
                name="item-name"
                value={itemname}
                onChange={onChangeItemname}
                placeholder=" 예시) 잠만보"
              />
            </label>

            <label>
              <ItemTitle>상세 이름을 적어주세요</ItemTitle>
              <Input
                type="text"
                name="item-fullname"
                value={itemfullname}
                onChange={onChangeitemfullname}
                placeholder=" 예시) 잠만보 진짜 잠만 잠"
              />
            </label>

            <label>
              <ItemTitle>가격</ItemTitle>
              <Input
                type="text"
                name="price"
                value={price}
                onChange={onChangeprice}
                placeholder=" 예시) 20300원"
              />
            </label>
          </ItemInfo>
          <Btn>
            <BuyBtn type="submit">판매</BuyBtn>
          </Btn>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Sell;
