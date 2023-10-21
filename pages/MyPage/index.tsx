import React, { useEffect } from "react";
import StatusBar from "@components/StatusBar";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import MypageSidebar from "@components/MypageSidebar";
import { useNavigate, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { getCookie } from "@utils/cookie";

const Buying = loadable(() => import("@components/Buying"));
const Like = loadable(() => import("@components/Like"));
// const Profile = loadable(() => import("@components/Profile"));
// const Address = loadable(() => import("@components/Address"));
// const Payment = loadable(() => import("@components/Payment"));
const My = loadable(() => import("@components/My"));

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Wrapper>
        <SideBar>
          <MypageSidebar sideBar={true} />
        </SideBar>
        <RightSide>
          <Routes>
            <Route path="/" element={<MyPage />} />
            <Route path="buying" element={<Buying />} />
            <Route path="like" element={<Like />} />
          </Routes>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default MyPage;
