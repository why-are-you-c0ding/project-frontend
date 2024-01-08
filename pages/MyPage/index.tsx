import React from "react";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import MypageSidebar from "@components/MyPages/MypageSidebar";
import { useNavigate, Route, Routes, Outlet } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Wrapper>
        <SideBar>
          <MypageSidebar sideBar={true} />
        </SideBar>
        <RightSide>
          <Outlet />
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default MyPage;
