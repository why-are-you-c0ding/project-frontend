import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import {
  DragOver,
  EachWrapper,
  Image,
  ItemInfo,
  ItemTitle,
  OptionInfo,
  Preview,
  Textarea,
  Wrapper,
} from "@components/SignUpItem/styles";
import { Input } from "@pages/SignUp/styles";
import Option from "@components/Option";
import useInput from "@hooks/useInput";
import axios from "axios";
import autosize from "autosize";

const SignUpItem = () => {
  const categoryList = [
    "Food",
    "Health",
    "Electronics",
    "Sports & Outdoors",
    "Baby",
    "Home",
    "Household Essentials",
    "Clothing",
    "Personal Care",
    "Toys",
    "Beauty",
    "Shop by Brand",
    "Home Improvement",
    "Industrial & Scientific",
    "Patio & Garden",
    "Pets",
    "Arts Crafts & Sewing",
    "Premium Beauty",
  ];

  const [itemName, onChangeItemname, setItemName] = useInput("");
  const [explain, , setItemExplain] = useInput("");
  const [category, setCategory] = useState(categoryList[0]);

  const onChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const onChangeInformation = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setItemExplain(e.target.value);
    },
    []
  );

  const [files, setFiles] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [dragOver, setDragOver] = useState(true);

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader: any = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        if (reader.result) setImageSrc(reader.result);
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
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "multipart/form-data",
          },
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
          formData.append("images", file);
        }
      }
    } else {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        formData.append("images", e.dataTransfer.files[i]);
      }
    }

    setFiles(e.dataTransfer.files);

    encodeFileToBase64(e.dataTransfer.files[0]);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref) {
      autosize(ref.current as HTMLTextAreaElement);
    }
  }, []);

  return (
    <div>
      <ReponsiveBar title={"상품 등록"} />

      <TopHeader>상품 등록</TopHeader>

      <Wrapper>
        <EachWrapper>
          <Image>
            <h3>등록 상품 이미지</h3>

            <div>
              <Preview onDrop={onDrop} onDragOver={onDragOver}>
                {dragOver && (
                  <DragOver>
                    <div>상품 사진</div>
                  </DragOver>
                )}
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
              </Preview>

              {dragOver && (
                <span>사진(jpeg만 가능)은 1:1 비율을 권장합니다.</span>
              )}

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
        </EachWrapper>

        <EachWrapper>
          <OptionInfo>
            <h3>상품 정보</h3>
            <ItemInfo>
              <div>
                <label>
                  <ItemTitle>상품 이름</ItemTitle>
                  <Input
                    type="text"
                    name="item-name"
                    value={itemName}
                    onChange={onChangeItemname}
                    placeholder="상품 이름을 입력해주세요."
                  />
                </label>
                <label>
                  <ItemTitle>카테고리</ItemTitle>
                  <select onChange={onChangeCategory} value={category}>
                    {categoryList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <ItemTitle>상세 설명</ItemTitle>
                  <Textarea
                    ref={ref}
                    value={explain}
                    onChange={onChangeInformation}
                    placeholder={"상품 설명을 입력해주세요."}
                  />
                </label>
              </div>
            </ItemInfo>
          </OptionInfo>
        </EachWrapper>

        <Option
          itemName={itemName}
          imageUrl={imageUrl}
          explain={explain}
          category={category}
        />
      </Wrapper>
    </div>
  );
};

export default SignUpItem;
