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
import SellOption from "@components/SignUpItemBodys/SellOption";
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
      <ReponsiveBar title={"?????? ??????"} />

      <TopHeader>?????? ??????</TopHeader>

      <Wrapper>
        <EachWrapper>
          <Image>
            <h3>?????? ?????? ?????????</h3>

            <div>
              <Preview onDrop={onDrop} onDragOver={onDragOver}>
                {dragOver && (
                  <DragOver>
                    <div>?????? ??????</div>
                  </DragOver>
                )}
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
              </Preview>

              {dragOver && (
                <span>??????(jpeg??? ??????)??? 1:1 ????????? ???????????????.</span>
              )}

              <div>
                <label htmlFor="file">
                  <div>?????? ?????????</div>
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
            <h3>?????? ??????</h3>
            <ItemInfo>
              <div>
                <label>
                  <ItemTitle>?????? ??????</ItemTitle>
                  <Input
                    type="text"
                    name="item-name"
                    value={itemName}
                    onChange={onChangeItemname}
                    placeholder="?????? ????????? ??????????????????."
                  />
                </label>
                <label>
                  <ItemTitle>????????????</ItemTitle>
                  <select onChange={onChangeCategory} value={category}>
                    {categoryList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <ItemTitle>?????? ??????</ItemTitle>
                  <Textarea
                    ref={ref}
                    value={explain}
                    onChange={onChangeInformation}
                    placeholder={"?????? ????????? ??????????????????."}
                  />
                </label>
              </div>
            </ItemInfo>
          </OptionInfo>
        </EachWrapper>

        <EachWrapper>
          <SellOption />
        </EachWrapper>
      </Wrapper>
    </div>
  );
};

export default SignUpItem;
