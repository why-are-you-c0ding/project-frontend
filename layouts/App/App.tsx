import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router";
import loadable from "@loadable/component";
import "react-toastify/dist/ReactToastify.css";
import StatusBar from "@components/UI/StatusBar";
import { useLocation } from "react-router-dom";
import { NoneHeader, ScrollTop, SpinnerWrapper } from "@layouts/App/styles";
import Scrollbars from "react-custom-scrollbars";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));
const MyPage = loadable(() => import(`@pages/MyPage`));
const Buying = loadable(() => import("@components/MyPages/Buying"));
const Like = loadable(() => import("@components/MyPages/Like"));
const SellPage = loadable(() => import(`@pages/SellPage`));
const EachItem = loadable(() => import(`@pages/EachItem`));
const Order = loadable(() => import(`@pages/Order`));
const CustomerOrder = loadable(() => import(`@pages/CustomerOrder`));
const Approval = loadable(() => import("@pages/Approval"));
const SearchItem = loadable(() => import(`@pages/SearchItem`));
const CreateItems = loadable(
  () => import("@components/SellerPages/CreateItems"),
);
const OrderItems = loadable(() => import("@components/SellerPages/OrderItems"));
const RegisteredItems = loadable(
  () => import("@components/SellerPages/RegisteredItems"),
);
const DetailRegisteredItem = loadable(
  () => import("@components/SellerPages/DetailRegisteredItems"),
);

import { FaArrowUp } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";

const App = () => {
  const { pathname } = useLocation();
  const ref = useRef<Scrollbars>(null);

  const [positionY, setPositionY] = useState(0);
  const handleScroll = (e: any) => {
    setPositionY(e.target.scrollTop);
  };

  const onScrollTop = () => {
    ref.current?.scrollTop(0);
  };

  return (
    <Scrollbars ref={ref} onScroll={handleScroll}>
      <SpinnerWrapper>
        <div>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      </SpinnerWrapper>
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
            <Route
              path="registereditems/:id"
              element={<DetailRegisteredItem />}
            />
            <Route path="registereditems" element={<RegisteredItems />} />
            <Route path="orderitems" element={<OrderItems />} />
            <Route path="createitems" element={<CreateItems />} />
          </Route>
          <Route path="/sellpage/:id" element={<SellPage />} />
          <Route path="/eachitem" element={<EachItem />} />
          <Route path="/eachitem/:itemId" element={<EachItem />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/orders/:orderId" element={<Order />} />
          <Route path="/customerorders" element={<CustomerOrder />} />
          <Route path="/customerorders/:orderId" element={<CustomerOrder />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/searchitem" element={<SearchItem />} />
          <Route path="/searchitem/:word" element={<SearchItem />} />
        </Routes>

        {positionY > 1000 &&
          (pathname === "/" || pathname.slice(0, 11) === "/searchitem") && (
            <ScrollTop onClick={onScrollTop}>
              <FaArrowUp />
              <span>TOP</span>
            </ScrollTop>
          )}
      </NoneHeader>
    </Scrollbars>
  );
};

export default App;
