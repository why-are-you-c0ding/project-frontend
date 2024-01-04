import React, { useCallback, useRef } from "react";
import { Route, Routes } from "react-router";
import loadable from "@loadable/component";
import "react-toastify/dist/ReactToastify.css";
import StatusBar from "@components/UI/StatusBar";
import { BrowserRouter } from "react-router-dom";
import { NoneHeader } from "@layouts/App/styles";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@redux/hooks";
import { onChangeScrollTrue } from "@redux/reducers/commonSlice";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));
const MyPage = loadable(() => import(`@pages/MyPage`));
const Buying = loadable(() => import("@components/Buying"));
const Like = loadable(() => import("@components/Like"));
const SellPage = loadable(() => import(`@pages/SellPage`));
const EachItem = loadable(() => import(`@pages/EachItem`));
const Order = loadable(() => import(`@pages/Order`));
const CustomerOrder = loadable(() => import(`@pages/CustomerOrder`));
const Approval = loadable(() => import("@pages/Approval"));
const SearchItem = loadable(() => import(`@pages/SearchItem`));
const CreateItems = loadable(
  () => import("@components/SellerPages/CreateItems"),
);
const SellInfo = loadable(() => import("@components/SellerPages/SellInfo"));
const SellStock = loadable(() => import("@components/SellerPages/SellStock"));
const SellStockLook = loadable(
  () => import("@components/SellerPages/SellStockLook"),
);
const SellList = loadable(() => import("@components/SellerPages/SellList"));
const SellOrderList = loadable(
  () => import("@components/SellerPages/SellOrderList"),
);

const App = () => {
  const dispatch = useAppDispatch();
  const onScroll = useCallback((values: { top: number }) => {
    if (values.top > 0.95) {
      dispatch(onChangeScrollTrue());
    }
  }, []);

  return (
    <BrowserRouter>
      <Scrollbars onScrollFrame={onScroll}>
        <StatusBar />
        <NoneHeader>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/main/:main" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/mypage" element={<MyPage />}>
              <Route path="like" element={<Like />} />
              <Route path="buying" element={<Buying />} />
            </Route>
            <Route path="/sellpage" element={<SellPage />}>
              <Route path=":signupitem" element={<CreateItems />} />
              <Route path=":info" element={<SellInfo />} />
              <Route path=":sellstock" element={<SellStock />} />
              <Route path=":sellstocklook" element={<SellStockLook />} />
              <Route path=":selllist" element={<SellList />} />
              <Route path=":sellorderlist" element={<SellOrderList />} />
            </Route>
            <Route path="/sellpage/:id" element={<SellPage />} />
            <Route path="/eachitem" element={<EachItem />} />
            <Route path="/eachitem/:itemId" element={<EachItem />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/orders/:orderId" element={<Order />} />
            <Route path="/customerorders" element={<CustomerOrder />} />
            <Route
              path="/customerorders/:orderId"
              element={<CustomerOrder />}
            />
            <Route path="/approval" element={<Approval />} />
            <Route path="/searchitem" element={<SearchItem />} />
          </Routes>
        </NoneHeader>
      </Scrollbars>
    </BrowserRouter>
  );
};

export default App;
