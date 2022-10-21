import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";
import Product from "@components/Product";
import Checkout from "@components/Checkout";
import EachOrder from "@components/EachOrder";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));
const MyPage = loadable(() => import(`@pages/MyPage`));
const SellPage = loadable(() => import(`@pages/SellPage`));
const Shop = loadable(() => import(`@pages/Shop`));
const Order = loadable(() => import(`@pages/Order`));
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
      <Route path="/mypage/:id" component={MyPage} />
      <Route path="/sellpage" component={SellPage} />
      <Route path="/sellpage/:id" component={SellPage} />
      <Route path="/shop" component={Shop} />
      <Route path="/shop/:itemId" component={Shop} />
      <Route path="/order" component={Order} />
      <Route path="/order/:orderId" component={Order} />
      <Route path="/sellshop" component={SellShop} />
      <Route path="/productpage" component={ProductPage} />
      <Route path="/productpage/:itemId" component={ProductPage} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/checkout/:id" component={Checkout} />
      <Route path="/eachorder" component={EachOrder} />
    </Switch>
  );
};

export default App;
