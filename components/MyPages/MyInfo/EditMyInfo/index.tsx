import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";

import { Wrapper } from "@components/MyPages/MyInfo/styles";
import { TopHeader } from "@pages/MyPage/styles";
import {
  DetailEditBtn,
  TableDetail,
  TableSection,
} from "@components/MyPages/MyInfo/EditMyInfo/styles";
import { myPageApi } from "@api/myPageApi";

const EditMyInfo = () => {
  const { data: userData, isLoading } =
    myPageApi.useGetUserDataQuery("getUserData");

  return (
    <div>
      <ReponsiveBar title={"내 정보 수정하기"} />
      {isLoading && <div>로딩중...</div>}
      {userData && (
        <Wrapper>
          <TopHeader>내 정보 변경</TopHeader>
          <TableSection>
            <TableDetail>
              <div>닉네임</div>
              <div>
                <div>{userData?.UserInfo.nickName}</div>
                <DetailEditBtn>닉네임 변경</DetailEditBtn>
              </div>
            </TableDetail>
            <TableDetail>
              <div>아이디</div>
              <div>
                <div>{userData?.UserInfo.id}</div>
                <DetailEditBtn>아이디 변경</DetailEditBtn>
              </div>
            </TableDetail>
            <TableDetail>
              <div>이메일</div>
              <div>
                <div>{userData?.UserInfo.email}</div>
                <DetailEditBtn>이메일 변경</DetailEditBtn>
              </div>
            </TableDetail>
            <TableDetail>
              <div>나이</div>
              <div>
                <div>{userData?.UserInfo.age}</div>
              </div>
            </TableDetail>
            <TableDetail>
              <div>직위</div>
              <div>
                <div>{userData?.UserInfo.role}</div>
              </div>
            </TableDetail>
          </TableSection>
        </Wrapper>
      )}
    </div>
  );
};

export default EditMyInfo;
