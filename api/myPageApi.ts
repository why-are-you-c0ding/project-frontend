import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CartData,
  CartItemInfo,
  EditUserInfo,
  orderHistoryPaging,
  UserInfo,
} from "@typings/myPage";
import { getCookie } from "@utils/cookie";
import { ItemPaging } from "@typings/items";
import { ModifyStocks } from "@typings/sellerPages";
const URL = process.env.REACT_APP_BASE_URL;
const isDevelopment = process.env.REACT_START_MSW !== "true";

export const myPageApi = createApi({
  reducerPath: "myPageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDevelopment ? URL : "/",
    credentials: "include",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getAllCart: builder.query<CartData, string>({
      query: () => "/carts",
    }),
    deleteCartItem: builder.mutation({
      query: ({ cartLineItemId }: { cartLineItemId: number }) => {
        return {
          url: "/carts/cart-line-items",
          method: "delete",
          body: { cartLineItemId },
          headers: {
            Authorization: `Bearer ${getCookie("JSESSIONID")}`,
          },
        };
      },
    }),
    deleteSelectedCartItem: builder.mutation({
      query: ({ cartLineItemId }: { cartLineItemId: number }) => {
        return {
          url: "/carts/cart-line-items",
          method: "delete",
          body: { cartLineItemId },
          headers: {
            Authorization: `Bearer ${getCookie("JSESSIONID")}`,
          },
        };
      },
    }),
    downCartItem: builder.mutation({
      query: ({ cartLineItemId, count }: CartItemInfo) => ({
        url: "/carts/cart-line-items",
        method: "PATCH",
        body: { cartLineItemId, count },
      }),
    }),
    upCartItem: builder.mutation({
      query: ({ cartLineItemId, count }: CartItemInfo) => ({
        url: "/carts/cart-line-items",
        method: "PATCH",
        body: { cartLineItemId, count },
      }),
    }),
    buyAllLikeItem: builder.mutation({
      query: ({ selectedItems }: any) => ({
        url: "/carts/cart-line-items",
        method: "POST",
        body: { selectedItems },
      }),
    }),
    getCustomerOrderHistoryItems: builder.query<orderHistoryPaging, number>({
      query: (page: number) => ({
        url: "/order-line-items/customers",
        params: { page },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if ("finalPage" in newItems) {
          currentCache.orderLineItems.push(...newItems.orderLineItems);
          currentCache.finalPage = newItems.finalPage;
        }
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getSellersOrder: builder.query({
      query: (ItemId: number) =>
        `/order-line-items/sellers?lastLookUpOrderLineItemId=${ItemId}`,
    }),
  }),
});
