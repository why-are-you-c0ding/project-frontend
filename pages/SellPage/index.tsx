import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Info, Title } from "@components/SellerPages/SellpageSidebar/styles";
import { SellPageMainWrapper, SideBar, Wrapper } from "@pages/SellPage/styles";

const SellPage = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);

  // useEffect(() => {
  //   if (window.location.pathname === "/sellpage/info") {
  //     setSideBar(true);
  //   } else {
  //     setSideBar(false);
  //   }
  // }, []);

  return (
    <div>
      <Wrapper>
        <SideBar sideBar={sideBar}>
          <div>
            <Title>판매자 페이지</Title>

            <Info>
              <span>
                <NavLink
                  to={"/sellpage/registereditems"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  등록 상품 조회
                </NavLink>
              </span>
              <span>
                <NavLink
                  to={"/sellpage/orderitems"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  주문 내역 조회
                </NavLink>
              </span>
              <span>
                <NavLink
                  to={"/sellpage/createitems"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  상품 등록
                </NavLink>
              </span>
            </Info>
          </div>
        </SideBar>
        <SellPageMainWrapper>
          <Outlet />
        </SellPageMainWrapper>
      </Wrapper>
    </div>
  );
};

export default SellPage;
