import React, { ChangeEvent, useCallback, useState } from "react";
import StatusBar from "@components/StatusBar";
import {
  Button,
  Header,
  Info,
  Title,
  Wrapper,
} from "@components/Checkout/styles";
import { useLocation } from "react-router-dom";
import { makeOrder } from "@utils/makeOrder";
import axios from "axios";
import Post from "@components/Post";
import Menu from "@components/Menu";

const Checkout = () => {
  const location: any = useLocation();

  const order = makeOrder(
    location.state.eachData,
    location.state.optInfo,
    location.state.count
  );

  console.log(JSON.stringify(order));

  const onClickBuyBtn = useCallback(
    (e: any) => {
      e.preventDefault();

      axios
        .post(
          "https://waycabvav.shop/orders",
          { order },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          alert("성공");
        })
        .catch((err) => {
          alert("실패");
        });
    },
    [order]
  );

  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");

  const zip = (
    <div
      onClick={() => {
        setPopup(!popup);
      }}
    >
      주소 검색
    </div>
  );

  return (
    <div>
      <StatusBar />
      <Menu
        show={popup}
        onCloseModal={() => {
          setPopup(!popup);
        }}
      >
        {
          <div
            onClick={() => {
              setPopup(!popup);
            }}
          >
            주소 검색
          </div>
        }
      </Menu>

      {popup && <Post address={address} setAddress={setAddress}></Post>}
      <Wrapper>
        <Header>
          <h2>주문/결제</h2>
        </Header>

        <Info>
          <Title>
            <h3>구매자 정보</h3>
          </Title>
          <div>
            <span>이름</span>
            <span>김덕배</span>
          </div>
          <div>
            <span>배송주소</span>
            <span>우주 우리은하 태양계 지구 대한민국</span>
          </div>
        </Info>

        <Info>
          <Title>
            <h3>결제 정보</h3>
          </Title>
          <div>
            <span>상품명</span>
            <span>{location.state.eachData.itemName}</span>
          </div>
          <div>
            <span>수량</span>
            <span>{location.state.count}개</span>
          </div>
          <div>
            <span>개당 가격</span>
            <span>{location.state.total}원</span>
          </div>
          <div>
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div>
            <span>총 결제금액</span>
            <span>{location.state.total * location.state.count}원</span>
          </div>
        </Info>

        <Button>
          <button onClick={onClickBuyBtn}>결제하기</button>
        </Button>
      </Wrapper>
    </div>
  );
};

export default Checkout;
