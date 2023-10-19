import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItemInfo } from "@typings/myPage";
import { getCookie } from "@utils/cookie";
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
    getCart: builder.query({
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
    downCartItem: builder.mutation({
      query: ({ cartLineItemId, count }: CartItemInfo) => ({
        url: "/carts/cart-line-items",
        method: "PATCH",
        body: { cartLineItemId, count },
        headers: {
          Authorization: `Bearer ${getCookie("JSESSIONID")}`,
        },
      }),
    }),
    upCartItem: builder.mutation({
      query: ({ cartLineItemId, count }: CartItemInfo) => ({
        url: "/carts/cart-line-items",
        method: "PATCH",
        body: { cartLineItemId, count },
        headers: {
          Authorization: `Bearer ${getCookie("JSESSIONID")}`,
        },
      }),
    }),
  }),
});
