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
  EachWrapper,
  Image,
  ItemInfo,
  ItemTitle,
  OptionInfo,
  SignBtn,
  Textarea,
  Wrapper,
} from "@components/SellerPages/CreateItems/styles";
import { Input } from "@pages/SignUp/styles";
import SellOption from "@components/SellerPages/CreateItemsBodys/SellOption";
import useInput from "@hooks/useInput";
import autosize from "autosize";
import SellOptionImg from "@components/SellerPages/CreateItemsBodys/SellOptionImg";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toast } from "react-toastify";
import { imageUrl } from "@mock/api/data/sellers/createItem";
import { ImageType } from "react-images-uploading/dist/typings";
import { sellersApi } from "@api/sellersApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Item } from "@typings/sellerPages";

const CreateItems = () => {
  const dispatch = useAppDispatch();

  const { optionTableList, isTable, itemImg, categoryList } = useAppSelector(
    (state) => state.createItems,
  );
  const ref = useRef<HTMLTextAreaElement>(null);

  const [itemName, onChangeItemName, setItemName] = useInput("");
  const [price, setPrice] = useState("");
  const [information, setInformation] = useState("");
  const [category, setCategory] = useState(categoryList[0]);

  const [createImgMutation] = sellersApi.useCreateImgMutation();
  const [createItemsMutation] = sellersApi.useCreateItemsMutation();

  const onChangePrice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 9) return;

    const { value } = e.target;
    let temp = "",
      flag = false;

    temp = value
      .split("")
      .map((item) => {
        // 숫자가 아니면 제거
        if (!/^\d+$/.test(item)) return "";

        if (item === "0" && !flag) return "";
        else {
          flag = true;
          return item;
        }
      })
      .join("");

    setPrice(temp);
  }, []);

  const onChangeCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }, []);

  const onChangeInformation = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInformation(e.target.value);
    },
    [],
  );

  const onClickSignItem = useCallback(async () => {
    if (itemImg.length === 0) {
      toast.warning("이미지를 입력하세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!itemName) {
      toast.warning("상품 이름을 입력하세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (price && +price < 1000) {
      toast.warning("상품 가격은 1,000원 이상 입력해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!price) {
      toast.warning("상품 가격을 입력하세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!information) {
      toast.warning("상세 설명을 입력하세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!isTable) {
      toast.warning("옵션을 입력하세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    for (let options of optionTableList) {
      for (let option of options.options) {
        if (!option.price) {
          toast.warning("추가 가격을 입력해주세요.", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        if (option.price < 1000) {
          toast.warning("추가 가격은 1,000원 이상 입력해주세요.", {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
      }
    }

    let imageUrl = "";
    const createImg:
      | { data: { imageUrl: string } }
      | { error: FetchBaseQueryError | SerializedError } =
      await createImgMutation((itemImg?.[0] as ImageType)?.file!);

    if ("data" in createImg) {
      imageUrl = createImg.data.imageUrl;
    } else {
      toast.error("다시 시도해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const data: Item = {
      itemName,
      imageUrl,
      information,
      category,
      price: +price,
      optionGroups: optionTableList,
    };

    const result:
      | { data: { message: string } }
      | { error: FetchBaseQueryError | SerializedError } =
      await createItemsMutation(data);

    // TODO: 에러처리 + 상품 생성 성공하면 리다이렉팅 시켜야함
    if ("data" in result) {
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [
    itemImg,
    itemName,
    price,
    information,
    category,
    optionTableList,
    dispatch,
  ]);

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
            <SellOptionImg />
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      if (e.target.value.length > 20) return;
                      onChangeItemName(e);
                    }}
                    placeholder="상품 이름을 입력해주세요."
                  />
                </label>
                <label>
                  <ItemTitle>기본 가격</ItemTitle>
                  <Input
                    type="number"
                    name="item-price"
                    value={price ?? ""}
                    onChange={onChangePrice}
                    placeholder="1,000원 이상 입력해주세요."
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
                    value={information}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      if (e.target.value.length > 300) return;
                      onChangeInformation(e);
                    }}
                    placeholder={"상품 설명을 입력해주세요."}
                  />
                </label>
              </div>
            </ItemInfo>
          </OptionInfo>
        </EachWrapper>

        <EachWrapper>
          <SellOption />
        </EachWrapper>

        <SignBtn onClick={onClickSignItem}>상품 등록</SignBtn>
      </Wrapper>
    </div>
  );
};

export default CreateItems;
