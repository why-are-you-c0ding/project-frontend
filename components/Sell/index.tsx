import React, { FormEvent, useState } from "react";
import StatusBar from "@components/StatusBar";
import Option from "@components/Option";
import {
  Wrapper,
  RightSide,
  BuyBtn,
  ItemInfo,
  ItemTitle,
  Preview,
  Image,
} from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import axios from "axios";

const Sell = () => {
  const [itemName, onChangeItemname, setItemName] = useInput("");
  const [itemExplain, onChangeItemExplain, setItemExplain] = useInput("");
  const [itemPrice, onChangeItemPrice, setItemPrice] = useInput("");

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
        <Image>
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
              <button type="submit">상품 사진 등록</button>
            </div>
          </form>
        </Image>
        <RightSide>
          <div>
            <ItemInfo>
              <label>
                <ItemTitle>상품 이름</ItemTitle>
                <Input
                  type="text"
                  name="item-name"
                  value={itemName}
                  onChange={onChangeItemname}
                  placeholder=" 예시) 잠만보"
                />
              </label>
              <label>
                <ItemTitle>상세 설명</ItemTitle>
                <Input
                  type="text"
                  name="item-fullname"
                  value={itemExplain}
                  onChange={onChangeItemExplain}
                  placeholder=" 예시) 잠만보 진짜 잠만 잠"
                />
              </label>
              {/*<label>*/}
              {/*  <ItemTitle>기본 가격</ItemTitle>*/}
              {/*  <Input*/}
              {/*    type="text"*/}
              {/*    name="item-fullname"*/}
              {/*    value={itemExplain}*/}
              {/*    onChange={onChangeItemExplain}*/}
              {/*    placeholder=" 예시) 20000"*/}
              {/*  />*/}
              {/*</label>*/}
              <Option itemName={itemName} />
            </ItemInfo>
          </div>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default Sell;
