import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import StatusBar from "@components/StatusBar";
import { Wrapper, SideBar, RightSide } from "@pages/MyPage/styles";
import MypageSidebar from "@components/MypageSidebar";
import { Route, Switch, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import loadable from "@loadable/component";

const Buying = loadable(() => import("@components/Buying"));
const Like = loadable(() => import("@components/Like"));
const Profile = loadable(() => import("@components/Profile"));
const Address = loadable(() => import("@components/Address"));
const Payment = loadable(() => import("@components/Payment"));
const My = loadable(() => import("@components/My"));

const MyPage = () => {
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    console.log(location.pathname);

    if (location.pathname === "/mypage/my") {
      setSideBar(true);
    } else setSideBar(false);
    console.log(sideBar);
  }, [location, sideBar]);

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <SideBar>
          <MypageSidebar sideBar={sideBar} />
        </SideBar>
        <RightSide>
          <Switch>
            <Route path="/mypage/my" component={My} />
            <Route path="/mypage/buying" component={Buying} />
            <Route path="/mypage/like" component={Like} />
            <Route path="/mypage/profile" component={Profile} />
            <Route path="/mypage/address" component={Address} />
            <Route path="/mypage/payment" component={Payment} />
          </Switch>
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default MyPage;
