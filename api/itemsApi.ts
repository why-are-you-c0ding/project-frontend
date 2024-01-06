import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItemInfo } from "@typings/myPage";
import { getCookie } from "@utils/cookie";
import { addCartItem, eachItem, item } from "@typings/items";
const URL = process.env.REACT_APP_BASE_URL;
const isDevelopment = process.env.REACT_START_MSW !== "true";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDevelopment ? URL : "/",
    credentials: "include",
  }),
  tagTypes: ["items"],
  endpoints: (builder) => ({
    getEachItems: builder.query<eachItem, number>({
      query: (id: number) => `/items/${id}`,
    }),
    getAllItems: builder.query({
      query: (page: number) => {
        return {
          url: "/items/",
          params: { page },
        };
      },
    }),
    getSearchItems: builder.query({
      query: ({ word, page }: { word: string; page: number }) => ({
        url: "/items/search",
        params: { keyword: word, page },
      }),
    }),
    addCartItem: builder.mutation({
      query: (cartItemInfo: addCartItem) => ({
        url: "/carts/cart-line-items",
        method: "POST",
        body: { cartItemInfo },
        headers: {
          Authorization: `Bearer ${getCookie("JSESSIONID")}`,
        },
      }),
    }),
  }),
});
