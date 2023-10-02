import React from "react";
import { Route, Routes } from "react-router";
import loadable from "@loadable/component";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));
const MyPage = loadable(() => import(`@pages/MyPage`));
const SellPage = loadable(() => import(`@pages/SellPage`));
const Shop = loadable(() => import(`@pages/Shop`));
const Order = loadable(() => import(`@pages/Order`));
const CustomerOrder = loadable(() => import(`@pages/CustomerOrder`));
const Checkout = loadable(() => import("@components/Checkout"));
const SearchItem = loadable(() => import(`@pages/SearchItem`));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main/:main" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/mypage/*" element={<MyPage />} />
      <Route path="/sellpage" element={<SellPage />} />
      <Route path="/sellpage/:id" element={<SellPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:itemId" element={<Shop />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/orders/:orderId" element={<Order />} />
      <Route path="/customerorders" element={<CustomerOrder />} />
      <Route path="/customerorders/:orderId" element={<CustomerOrder />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/searchitem" element={<SearchItem />} />
    </Routes>
  );
};

export default App;
