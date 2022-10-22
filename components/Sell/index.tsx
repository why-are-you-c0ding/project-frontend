import React, { FormEvent, useCallback, useEffect, useState } from "react";
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
  const [information, onChangeInformation, setItemExplain] = useInput("");

  const [files, setFiles] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [dragOver, setDragOver] = useState(true);

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader: any = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        setDragOver(false);

        resolve();
      };
    });
  };

  const onLoadFile = (e: any) => {
    const file = e.target.files;
    setFiles(file);

    encodeFileToBase64(e.target.files[0]);
  };

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (files && imageSrc) {
      const formdata = new FormData();
      formdata.append("images", files[0]);

      axios
        .post("https://waycabvav.shop/images", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setImageUrl(response.data.imageUrl);
          console.log(response);
        })
        .catch((error) => {});
    }
  }, [files, imageSrc]);

  const formData = new FormData();

  const onDrop = useCallback((e: any) => {
    e.preventDefault();
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

    setFiles(e.dataTransfer.files);

    encodeFileToBase64(e.dataTransfer.files[0]);
  }, []);

  const onDragOver = useCallback((e: any) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <Image>
          <h2>등록 상품 이미지</h2>

          <div>
            <Preview onDrop={onDrop} onDragOver={onDragOver}>
              {dragOver && (
                <DragOver>
                  <div>상품 사진</div>
                </DragOver>
              )}
              {imageSrc && <img src={imageSrc} alt="preview-img" />}
            </Preview>

            {dragOver && <span>사진은 정사각형을 권장합니다.</span>}

            <div>
              <label htmlFor="file">
                <div>파일 업로드</div>
              </label>
              <input
                type="file"
                id="file"
                accept="image/jpeg"
                onChange={onLoadFile}
              />
            </div>
          </div>
        </Image>
        <OptionInfo>
          <div>
            <ItemInfo>
              <h2>상품 정보</h2>
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
                  value={information}
                  onChange={onChangeInformation}
                  placeholder=" 예시) 잠만보 진짜 잠만 잠"
                />
              </label>
              <Option
                itemName={itemName}
                imageUrl={imageUrl}
                information={information}
              />
            </ItemInfo>
          </div>
        </OptionInfo>
      </Wrapper>
    </div>
  );
};

export default Sell;
