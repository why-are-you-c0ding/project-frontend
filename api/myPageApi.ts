import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItemInfo } from "@typings/myPage";
const URL = process.env.REACT_APP_BASE_URL;
const isDevelopment = process.env.NODE_ENV !== "development";

export const myPageApi = createApi({
  reducerPath: "myPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: isDevelopment ? URL : "/" }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/carts",
    }),
    getCount: builder.query({
      query: () => "/carts/current",
      providesTags: (result, error, arg) => {
        return [{ type: "cart", id: "current" }];
      },
    }),
    deleteCartItem: builder.mutation({
      query: ({ cartLineItemId }: { cartLineItemId: number }) => {
        return {
          url: "/carts/cart-line-items",
          method: "delete",
          body: { cartLineItemId },
        };
      },
    }),
    downCartItem: builder.mutation({
      query: ({ cartLineItemId, count }: CartItemInfo) => ({
        url: `/carts/cart-line-items`,
        method: "PATCH",
        body: { cartLineItemId, count },
      }),
    }),
    upCartItem: builder.mutation({
      query: ({ cartLineItemId, count }: CartItemInfo) => ({
        url: `/carts/cart-line-items`,
        method: "PATCH",
        body: { cartLineItemId, count },
      }),
    }),
  }),
});
