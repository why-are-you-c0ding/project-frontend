import React from "react";
import DetailOrder from "@components/DetailOrder";
import ReponsiveBar from "@components/ReponsiveBar";
import { TopHeader } from "@pages/MyPage/styles";
import {
  CartItem,
  InfoBottom,
  InfoTop,
  ItemInfo,
} from "@components/Like/styles";

const Buying = () => {
  return (
    <div>
      <ReponsiveBar title={"주문 내역"} />

      <TopHeader>주문 내역</TopHeader>

      {/*<DetailOrder />*/}

      <div style={{ marginTop: "6rem", padding: "0 2rem" }}>
        <CartItem>
          <img
            src="http://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
            alt=""
          />
          <ItemInfo>
            <InfoTop>
              <div>
                <span>아이템 이름</span>
                <span>10000원</span>
              </div>
              <div></div>
            </InfoTop>
            <InfoBottom>
              <div>
                <span>2~3일 내 도착</span>
              </div>
              <div>
                <div>
                  <span>2개</span>
                </div>

                <div>
                  <span>총 금액: 20000원</span>
                  <span>
                    <button onClick={(event) => {}}>
                      <span style={{ fontSize: "1rem", color: "red" }}>
                        주문 취소
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </InfoBottom>
          </ItemInfo>
        </CartItem>
      </div>
    </div>
  );
};

export default Buying;
