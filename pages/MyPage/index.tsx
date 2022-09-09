import React from "react";
import StatusBar from "@components/StatusBar";
import {
  Wrapper,
  UserProfile,
  SideBar,
  RightSide,
  List,
  LoginId,
  Email,
  EditBtn,
  BuyItem,
  BuyStatus,
  Letter,
  Count,
} from "@pages/MyPage/styles";
import MypageSidebar from "@components/MypageSidebar";
import DetailOrder from "@components/DetailOrder";

const MyPage = () => {
  return (
    <div>
      <StatusBar />
      <Wrapper>
        <SideBar>
          <MypageSidebar></MypageSidebar>
        </SideBar>
        <RightSide>
          <UserProfile>
            {/* 이미지 그라바타로 구현 */}
            <img
              src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200"
              alt=""
            />
            <List>
              <LoginId>chuseonggun</LoginId>
              <Email>c+@linux.com</Email>
              <EditBtn>프로필 수정</EditBtn>
            </List>
          </UserProfile>

          <BuyItem>
            <span>구매 내역</span>
            <BuyStatus>
              <div>
                <Letter>전체</Letter>
                <Count>18</Count>
              </div>
              <div>
                <Letter>입금/결제</Letter>
                <Count>0</Count>
              </div>
              <div>
                <Letter>구매확정</Letter>
                <Count>15</Count>
              </div>
              <div>
                <Letter>배송완료</Letter>
                <Count>3</Count>
              </div>
            </BuyStatus>
          </BuyItem>

          <DetailOrder />
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default MyPage;
