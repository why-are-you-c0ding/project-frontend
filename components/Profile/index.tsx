import React from "react";
import { Hr, TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";
import { Info } from "@components/Profile/styles";

const Profile = () => {
  return (
    <div>
      <ReponsiveBar title={"프로필 정보"} />
      <TopHeader>프로필 정보</TopHeader>
      <Hr />
      <Info></Info>
    </div>
  );
};

export default Profile;
