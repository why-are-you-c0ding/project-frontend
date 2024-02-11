import { setupWorker } from "msw";
import { myPage } from "@mock/api/member/myPage";
import { auth } from "@mock/api/member/auth";
import { createItems } from "@mock/api/seller/createItems";
import { getItems } from "@mock/api/items/getItems";
import { addcartItem } from "@mock/api/items/addcartItem";
import { registeredItems } from "@mock/api/seller/RegisteredItems";
import { orderHistoryItems } from "@mock/api/myPage/orderHistory";
import { getUserInfo } from "@mock/api/myPage/userInfo";
import { editUserInfoData } from "@mock/api/myPage/editUserInfo";

export const worker = setupWorker(
  ...auth,
  ...myPage,
  ...createItems,
  ...registeredItems,
  ...orderHistoryItems,
  ...getUserInfo,
  ...editUserInfoData,
  ...getItems,
  ...addcartItem,
);
