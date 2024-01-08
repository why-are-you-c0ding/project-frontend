import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItemInfo } from "@typings/myPage";
import { getCookie } from "@utils/cookie";
import { addCartItem, eachItem, item, ItemPaging } from "@typings/items";
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
    getAllItems: builder.query<ItemPaging, number>({
      query: (page: number) => {
        return {
          url: "/items/",
          params: { page },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.finalPage = newItems.finalPage;
        currentCache.items.push(...newItems.items);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getSearchItems: builder.query<
      ItemPaging | { message: string },
      { word: string; page: number }
    >({
      query: ({ word, page }: { word: string; page: number }) => ({
        url: "/items/search",
        params: { keyword: word, page },
      }),
      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        return endpointName + queryArgs.word;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        if ("finalPage" in currentCache && "finalPage" in newItems) {
          currentCache.finalPage = newItems.finalPage;
          currentCache.items.push(...newItems.items);
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
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
