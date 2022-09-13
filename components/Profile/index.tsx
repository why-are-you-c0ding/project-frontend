import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/ReponsiveBar";

const Profile = () => {
  return (
    <div>
      <ReponsiveBar title={"프로필 정보"} />
      <TopHeader>프로필 정보</TopHeader>
    </div>
  );
};

export default Profile;
