import React from "react";
import StatusBar from "@components/StatusBar";
import {
  Button,
  Header,
  Info,
  Title,
  Wrapper,
} from "@components/Checkout/styles";

const Checkout = () => {
  return (
    <div>
      <StatusBar />
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
            <span>총 상품가격</span>
            <span>500000원</span>
          </div>
          <div>
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div>
            <span>총 결제금액</span>
            <span>478000원</span>
          </div>
        </Info>

        <Button>
          <button>결제하기</button>
        </Button>
      </Wrapper>
    </div>
  );
};

export default Checkout;
