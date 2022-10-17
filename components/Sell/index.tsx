import React, { FormEvent, useState } from "react";
import StatusBar from "@components/StatusBar";
import Option from "@components/Option";
import {
  Wrapper,
  BuyBtn,
  ItemInfo,
  ItemTitle,
  Preview,
  Image,
  OptionInfo,
} from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import axios from "axios";

const Sell = () => {
  const [itemName, onChangeItemname, setItemName] = useInput("");
  const [itemExplain, onChangeItemExplain, setItemExplain] = useInput("");

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

  const [imageUrl, setImageUrl] = useState("");

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("images", files[0]);

    axios
      .post("https://waycabvav.shop/images", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setImageUrl(response.data.imageUrl);
        alert("이미지 등록에 성공하셨습니다.");
      })
      .catch((error) => {
        alert("이미지 등록에 실패하셨습니다.");
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

  const onDrag = (ev: any) => {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          onLoadFile(ev);

          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  const onDragOver = (ev: any) => {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
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

            {/*<div*/}
            {/*  id="drop_zone"*/}
            {/*  style={{*/}
            {/*    border: "5px solid blue",*/}
            {/*    width: "200px",*/}
            {/*    height: "100px",*/}
            {/*  }}*/}
            {/*  onDrop={onDrag}*/}
            {/*  onDragOver={onDragOver}*/}
            {/*>*/}
            {/*  <p>*/}
            {/*    Drag one or more files to this <i>drop zone</i>.*/}
            {/*  </p>*/}
            {/*</div>*/}

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
        <OptionInfo>
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
              <Option
                itemName={itemName}
                imageUrl={imageUrl}
                itemExplain={itemExplain}
              />
            </ItemInfo>
          </div>
        </OptionInfo>
      </Wrapper>
    </div>
  );
};

export default Sell;
