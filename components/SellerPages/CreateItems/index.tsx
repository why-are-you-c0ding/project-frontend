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
import { useAppSelector } from "@redux/hooks";
// import { useAppDispatch, useAppSelector } from "@redux/hooks";
// import { signUpItem } from "@redux/actions/signUpItemAPI";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { signUpItem } from "../../redux/actions/signUpItemAPI";

const CreateItems = () => {
  // const dispatch = useAppDispatch();

  const { optionTableList, isTable, itemImg, categoryList } = useAppSelector(
    (state) => state.createItems,
  );

  const [itemName, onChangeItemName, setItemName] = useInput("");
  const [price, setPrice] = useState("");
  const [information, setInformation] = useState("");
  const [category, setCategory] = useState(categoryList[0]);

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

  const onClickSignItem = useCallback(() => {
    if (itemImg.length === 0) {
      alert("이미지를 입력하세요.");
      return;
    }
    if (!itemName) {
      alert("아이템 이름을 입력하세요.");
      return;
    }
    if (!information) {
      alert("상세 설명을 입력하세요.");
      return;
    }
    if (!isTable) {
      alert("옵션을 입력하세요.");
      return;
    }

    for (let options of optionTableList) {
      for (let option of options.options) {
        if (!option.price) {
          alert("추가 가격을 입력해주세요.");
          return;
        }
        if (option.price < 1000) {
          alert("추가 가격은 1,000원 이상 입력해주세요.");
          return;
        }
      }
    }

    // dispatch(
    //   signUpItem({
    //     jwt,
    //     itemImg,
    //     itemName,
    //     information,
    //     category,
    //     optionGroups: optionTableList,
    //     isTable,
    //   }),
    // );
  }, [itemImg, itemName, information, category, optionTableList]);

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
                    onChange={onChangeItemName}
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
                    onChange={onChangeInformation}
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
