import React, { useCallback, useState } from "react";

import {
  BuyBtn,
  Delete,
  ItemTitle,
  ListBox,
  MiddleSide,
  RightSide,
  Wrapper,
  ItemSum,
  ItemBox,
} from "@components/Like/styles";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import { Link } from "react-router-dom";

const Like = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState("");

  const ItemList = [
    {
      id: "1번 상품",
      name: "진짜 네임",
      subname: "서브네임",
      info: "상품 설명",
      price: " 가격",
    },
    {
      id: "2번 상품",
      name: "진짜 네임",
      subname: "서브네임",
      info: "상품 설명",
      price: " 가격",
    },
  ];
  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
    setCount(count - 1);
  };

  const remove = useCallback(() => {}, []);

  return (
    <div>
      <ReponsiveBar title={"장바구니"} />
      <Wrapper>
        <TopHeader>관심 상품</TopHeader>
        <ListBox>
          <table>
            <img
              src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
              alt=""
            />
            <ItemTitle>
              <div>강아지</div>
              <div>레브라도 리트리버</div>
              <div>짱 귀여워</div>
            </ItemTitle>
            <MiddleSide>
              <div>수량 :{count}</div>
              <div>
                <button onClick={Plus}>+</button>
                <button onClick={Minus}>-</button>
              </div>
            </MiddleSide>
            <RightSide>
              <Link to="/checkout">
                <BuyBtn>
                  <div>구매</div>
                  <div>200원</div>
                </BuyBtn>
              </Link>
              <Delete>
                <button onClick={remove}>삭제</button>
              </Delete>
            </RightSide>
          </table>
        </ListBox>

        <ListBox>
          <table>
            <img
              src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
              alt=""
            />
            <ItemTitle>
              <div>강아지</div>
              <div>레브라도 리트리버</div>
              <div>짱 귀여워</div>
            </ItemTitle>
            <MiddleSide>
              <div>수량 :{count}</div>
              <div>
                <button onClick={Plus}>+</button>
                <button onClick={Minus}>-</button>
              </div>
            </MiddleSide>
            <RightSide>
              <BuyBtn>
                <div>구매</div>
                <div>200원</div>
              </BuyBtn>
              <Delete>
                <button onClick={remove}>삭제</button>
              </Delete>
            </RightSide>
          </table>
        </ListBox>
        <ItemSum>{ItemList.length}개의 상품이 담겨있습니다.</ItemSum>
        <ItemBox>
          {ItemList.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.subname}</div>
              <div>{item.info}</div>
              <div>{item.price}</div>
            </div>
          ))}
        </ItemBox>
      </Wrapper>
    </div>
  );
};

export default Like;
