import React, { FormEvent, useCallback, useState } from "react";
import StatusBar from "@components/StatusBar";
import Option from "@components/Option";
import {
  Wrapper,
  ItemInfo,
  ItemTitle,
  Preview,
  Image,
  OptionInfo,
  DragOver,
} from "@components/Sell/styles";
import { Input } from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import axios from "axios";

const Sell = () => {
  const [itemName, onChangeItemname, setItemName] = useInput("");
  const [itemExplain, onChangeItemExplain, setItemExplain] = useInput("");

  const [files, setFiles] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [dragOver, setDragOver] = useState(false);

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
    console.log(file);
    console.log(file);
    setFiles(file);

    encodeFileToBase64(e.target.files[0]);
  };

  const [imageUrl, setImageUrl] = useState("");
  const [checkImg, setCheckImg] = useState(false);

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
        setCheckImg(true);
        alert("이미지 등록에 성공하셨습니다.");
      })
      .catch((error) => {
        alert("이미지 등록에 실패하셨습니다.");
      });
  };

  const onDrop = useCallback((e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.dataTransfer.item) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          console.log("file[" + i + "].name = " + file.name);
          formData.append("images", file);
        }
      }
    } else {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        console.log("file[" + i + "].name = " + e.dataTransfer.files[i].name);
        formData.append("images", e.dataTransfer.files[i]);
      }
    }
    axios.post("https://waycabvav.shop/images", formData).then((response) => {
      setDragOver(false);
      alert("이미지 등록에 성공하셨습니다.");
    });
  }, []);

  // const onDrop = useCallback((e: any) => {
  //   e.preventDefault();
  //   console.log(e);
  //   const formData = new FormData();
  //   formData.append("images", files);
  //   if (e.dataTransfer.items) {
  //     for (let i = 0; i < e.dataTransfer.items.length; i++) {
  //       if (e.dataTransfer.items[i].kind === "file") {
  //         const file = e.dataTransfer.items[i].getAsFile();
  //         console.log("... file[" + i + "].name = " + file.name);
  //         formData.append("image", file);
  //       }
  //     }
  //   } else {
  //     for (let i = 0; i < e.dataTransfer.files.length; i++) {
  //       console.log(
  //         "... file[" + i + "].name = " + e.dataTransfer.files[i].name
  //       );
  //       formData.append("image", e.dataTransfer.files[i]);
  //     }
  //   }
  //   axios
  //     .post("https://waycabvav.shop/images", formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then((response) => {
  //       setDragOver(false);
  //     });
  // }, []);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <Image>
          <h2>등록 상품 이미지</h2>

          <form onSubmit={handleClick}>
            <Preview onDrop={onDrop} onDragOver={onDragOver}>
              {dragOver && <DragOver>업로드!</DragOver>}
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
                checkImg={checkImg}
              />
            </ItemInfo>
          </div>
        </OptionInfo>
      </Wrapper>
    </div>
  );
};

export default Sell;
