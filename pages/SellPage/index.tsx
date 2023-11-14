import React, { useEffect, useState } from "react";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import { Outlet, useNavigate } from "react-router-dom";
import SellpageSidebar from "@components/SellerPages/SellpageSidebar";

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

  return (
    <div>
      <Wrapper>
        <SideBar>
          <SellpageSidebar sideBar={sideBar} />
        </SideBar>
        <RightSide>
          <Outlet />
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default SellPage;
