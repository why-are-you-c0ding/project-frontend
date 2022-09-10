import React from "react";
import StatusBar from "@components/StatusBar";
import {
  Wrapper,
  UserProfile,
  SideBar,
  RightSide,
  List,
  LoginId,
  Email,
  EditBtn,
  BuyItem,
  BuyStatus,
  Letter,
  Count,
} from "@pages/MyPage/styles";
import MypageSidebar from "@components/MypageSidebar";
import DetailOrder from "@components/DetailOrder";
import { Route, Switch, useParams } from "react-router";
import Test from "@components/Test";
import My from "@components/My/styles";

const MyPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <SideBar>
          <MypageSidebar></MypageSidebar>
        </SideBar>
        <RightSide>
          <Switch>
            <Route path="/mypage/my" component={My} />
            <Route path="/mypage/buying" component={Test} />
          </Switch>
          {/*<div>123</div>*/}
        </RightSide>
      </Wrapper>
    </div>
  );
};
export default MyPage;
