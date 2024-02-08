import React from "react";
import ReponsiveBar from "@components/UI/ReponsiveBar";

import { Wrapper } from "@components/MyPages/MyInfo/styles";
import { TopHeader } from "@pages/MyPage/styles";
import {
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
              <div>{userData?.UserInfo.nickName}</div>
            </TableDetail>
            <TableDetail>
              <div>아이디</div>
              <div>{userData?.UserInfo.id}</div>
            </TableDetail>
            <TableDetail>
              <div>이메일</div>
              <div>{userData?.UserInfo.email}</div>
            </TableDetail>
            <TableDetail>
              <div>나이</div>
              <div>{userData?.UserInfo.age}</div>
            </TableDetail>
            <TableDetail>
              <div>직위</div>
              <div>{userData?.UserInfo.role}</div>
            </TableDetail>
          </TableSection>
        </Wrapper>
      )}
    </div>
  );
};

export default EditMyInfo;
