import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = process.env.REACT_APP_BASE_URL;

export const myPageApi = createApi({
  reducerPath: "myPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCount: builder.query({
      query: () => "/carts",
      providesTags: (result, error, arg) => {
        return [{ type: "cart", id: arg.name }];
      },
    }),
    getCart: builder.query({
      query: () => "/carts/current",
      providesTags: (result, error, arg) => {
        return [{ type: "cart", id: "current" }];
      },
    }),
    deleteCartItem: builder.mutation({
      query: ({ cartLineItemId }) => ({
        url: `/carts/cart-line-items/${cartLineItemId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "cart", id: "current" }];
      },
    }),
    downCartItem: builder.mutation({
      query: ({ cartLineItemId, count }) => ({
        url: `/carts/cart-line-items/${cartLineItemId}`,
        method: "PATCH",
        body: { count },
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "cart", id: "current" }];
      },
    }),
    upCartItem: builder.mutation({
      query: ({ cartLineItemId, count }) => ({
        url: `/carts/cart-line-items/${cartLineItemId}`,
        method: "PATCH",
        body: { count },
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "cart", id: "current" }];
      },
    }),
  }),
});
