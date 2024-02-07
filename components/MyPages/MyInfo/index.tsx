import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";

import { TopHeader } from "@pages/MyPage/styles";
import {
  InfoBox,
  InfoBoxLeft,
  InfoBoxRight,
  InfoDetail,
  InfoSection,
  UnderLine,
  UpdateInfoBtn,
  UpdateInfoSection,
  Wrapper,
} from "@components/MyPages/MyInfo/styles";
import { myPageApi } from "@api/myPageApi";
import { useNavigate } from "react-router";

const MyInfo = () => {
  const navigate = useNavigate();

  const { data: userData, isLoading } =
    myPageApi.useGetUserDataQuery("getUserData");

  return (
    <div>
      <ReponsiveBar title={"내 정보"} />
      {isLoading && <div>로딩중...</div>}
      {userData && (
        <Wrapper>
          <InfoSection>
            <TopHeader>내 정보</TopHeader>
            <InfoBox>
              <InfoBoxLeft>
                <InfoDetail>
                  <div>닉네임</div>
                  <div>{userData?.UserInfo.nickName}</div>
                </InfoDetail>
                <InfoDetail>
                  <div>아이디</div>
                  <div>{userData?.UserInfo.id}</div>
                </InfoDetail>
                <InfoDetail>
                  <div>이메일</div>
                  <div>{userData?.UserInfo.email}</div>
                </InfoDetail>
              </InfoBoxLeft>
              <InfoBoxRight>
                <InfoDetail>
                  <div>나이</div>
                  <div>{userData?.UserInfo.age}</div>
                </InfoDetail>
                <InfoDetail>
                  <div>직위</div>
                  <div>{userData?.UserInfo.role}</div>
                </InfoDetail>
              </InfoBoxRight>
            </InfoBox>
          </InfoSection>
          <UnderLine></UnderLine>
          <UpdateInfoSection>
            <TopHeader>내 정보 변경</TopHeader>
            <div>내 정보를 업데이트하시려면 버튼을 클릭하세요</div>
            <UpdateInfoBtn
              onClick={() => {
                navigate(`/mypage/editmyinfo`);
              }}
            >
              내 정보 변경
            </UpdateInfoBtn>
          </UpdateInfoSection>
          <UnderLine></UnderLine>
        </Wrapper>
      )}
    </div>
  );
};

export default MyInfo;
