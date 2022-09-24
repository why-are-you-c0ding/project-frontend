import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));
const MyPage = loadable(() => import(`@pages/MyPage`));
const SellPage = loadable(() => import(`@pages/SellPage`));
const Shop = loadable(() => import(`@pages/Shop`));
const SellShop = loadable(() => import(`@pages/SellShop`));
const ProductPage = loadable(() => import(`@pages/ProductPage`));

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="main" />
      </Route>
      <Route path="/main" component={Main} />
      <Route path="/main/:main" component={Main} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/mypage:id" component={MyPage} />
      <Route path="/sellpage" component={SellPage} />
      <Route path="/sellpage:id" component={SellPage} />
      <Route path="/shop" component={Shop} />
      <Route path="/sellshop" component={SellShop} />
      <Route path="/productpage" component={ProductPage} />
    </Switch>
  );
};

export default App;
