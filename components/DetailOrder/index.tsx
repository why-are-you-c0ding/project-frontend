import React from "react";
import { Menu } from "@components/DetailOrder/styles";

const DetailOrder = () => {
  return (
    <Menu>
      <span>주문 내역</span>

      <div>
        <span>상품정보</span>
        <span>주문일자</span>
        <span>주문번호</span>
        <span>주문금액</span>
        <span>주문 상태</span>
      </div>
      {/* 컴포넌트로 여기 동적으로 상품 정보 */}
    </Menu>
  );
};

export default DetailOrder;
