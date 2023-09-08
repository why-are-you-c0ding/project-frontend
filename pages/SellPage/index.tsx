import React, { useEffect, useState } from "react";
import StatusBar from "@components/StatusBar";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import { Outlet, useNavigate, Route, Routes } from "react-router-dom"; // Updated imports
import loadable from "@loadable/component";
import SellpageSidebar from "@components/SellpageSidebar";

const SellInfo = loadable(() => import("@components/SellInfo"));
const SignUpItem = loadable(() => import("@components/SignUpItem"));
const SellStock = loadable(() => import("@components/SellStock"));
const SellStockLook = loadable(() => import("@components/SellStockLook"));
const SellList = loadable(() => import("@components/SellList"));
const SellOrderList = loadable(() => import("@components/SellOrderList"));

const SellPage = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/sellpage/info") {
      setSideBar(true);
    } else {
      setSideBar(false);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <StatusBar sideBar={sideBar} />
      <Wrapper>
        <SideBar>
          <SellpageSidebar sideBar={sideBar} />
        </SideBar>
        <RightSide>
          <Routes>
            {" "}
            {/* Use Routes component */}
            <Route path="/info" element={<SellInfo />} />
            <Route path="/signupitem" element={<SignUpItem />} />
            <Route path="/sellstock" element={<SellStock />} />
            <Route path="/sellstocklook" element={<SellStockLook />} />
            <Route path="/selllist" element={<SellList />} />
            <Route path="/sellorderlist" element={<SellOrderList />} />
          </Routes>
        </RightSide>
      </Wrapper>
      <Outlet /> {/* Render nested routes */}
    </div>
  );
};

export default SellPage;
