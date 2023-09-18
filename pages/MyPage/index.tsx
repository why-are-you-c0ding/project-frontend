import React, { useEffect } from "react";
import StatusBar from "@components/StatusBar";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import MypageSidebar from "@components/MypageSidebar";
import { Outlet, useNavigate, Route, Routes } from "react-router-dom"; // Updated imports
import loadable from "@loadable/component";

const Buying = loadable(() => import("@components/Buying"));
const Like = loadable(() => import("@components/Like"));
// const Profile = loadable(() => import("@components/Profile"));
// const Address = loadable(() => import("@components/Address"));
// const Payment = loadable(() => import("@components/Payment"));
const My = loadable(() => import("@components/My"));

const MyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <StatusBar sideBar={true} />
      <Wrapper>
        <SideBar>
          <MypageSidebar sideBar={true} />
        </SideBar>
        <RightSide>
          <Routes>
            {" "}
            {/* Use Routes component */}
            {/*<Route path="/my" element={<Profile />} />*/}
            <Route path="/buying" element={<Buying />} />
            <Route path="/like" element={<Like />} />
          </Routes>
        </RightSide>
      </Wrapper>
      <Outlet /> {/* Render nested routes */}
    </div>
  );
};

export default MyPage;
