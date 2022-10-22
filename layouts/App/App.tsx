import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));
const MyPage = loadable(() => import(`@pages/MyPage`));
const SellPage = loadable(() => import(`@pages/SellPage`));
const Shop = loadable(() => import(`@pages/Shop`));
const Order = loadable(() => import(`@pages/Order`));
const CustomerOrder = loadable(() => import(`@pages/CustomerOrder`));
const Checkout = loadable(() => import("@components/Checkout"));
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
      <Route path="/orders" component={Order} />
      <Route path="/orders/:orderId" component={Order} />
      <Route path="/customerorders" component={CustomerOrder} />
      <Route path="/customerorders/:orderId" component={CustomerOrder} />
      <Route path="/sellshop" component={SellShop} />
      <Route path="/productpage" component={ProductPage} />
      <Route path="/productpage/:itemId" component={ProductPage} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/checkout/:id" component={Checkout} />
    </Switch>
  );
};

export default App;
