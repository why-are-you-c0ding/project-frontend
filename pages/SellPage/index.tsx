import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import StatusBar from "@components/StatusBar";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";
import loadable from "@loadable/component";
import SellpageSidebar from "@components/SellpageSidebar";

const SellInfo = loadable(() => import("@components/SellInfo"));
const SellRegister = loadable(() => import("@components/SellRegister"));
const SellStock = loadable(() => import("@components/SellStock"));
const SellStockLook = loadable(() => import("@components/SellStockLook"));

const SellPage = () => {
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    console.log(location.pathname);

    if (location.pathname === "/sellpage/info") {
      setSideBar(true);
    } else setSideBar(false);
  }, [location, sideBar]);

  return (
    <div>
      <StatusBar sideBar={sideBar} />
      <Wrapper>
        <SideBar>
          <SellpageSidebar sideBar={sideBar} />
        </SideBar>
        <RightSide>
          <Switch>
            <Route path="/sellpage/info" component={SellInfo} />
            <Route path="/sellpage/sellregister" component={SellRegister} />
            <Route path="/sellpage/sellstock" component={SellStock} />
            <Route path="/sellpage/sellstocklook" component={SellStockLook} />
          </Switch>
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default SellPage;
