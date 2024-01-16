import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ImageListType } from "react-images-uploading";
import { Item, ModifyStocks, StockList } from "@typings/sellerPages";
import { ItemPaging } from "@typings/items";
const URL = process.env.REACT_APP_BASE_URL!;
const isDevelopment = process.env.REACT_START_MSW !== "true";

export const sellersApi = createApi({
  reducerPath: "sellersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDevelopment ? URL : "/",
    credentials: "include",
  }),
  tagTypes: ["sellers"],
  endpoints: (builder) => ({
    createImg: builder.mutation({
      query: (image: File) => {
        const formData = new FormData();
        formData.append("images", image);

        return {
          url: "/images",
          method: "POST",
          body: formData,
        };
      },
    }),
    createItems: builder.mutation({
      query: (data: Item) => {
        return {
          url: "/items",
          method: "POST",
          body: data,
        };
      },
    }),
    getSellerItems: builder.query<ItemPaging, number>({
      query: (page: number) => ({ url: "/items/sellers", params: { page } }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        if ("finalPage" in newItems) {
          currentCache.items.push(...newItems.items);
          currentCache.finalPage = newItems.finalPage;
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getItemStocks: builder.query<StockList, string>({
      query: (data: string) => `/stocks?${data}`,
    }),
    modifyItemStocks: builder.mutation({
      query: (data: ModifyStocks) => {
        return { url: "stocks", method: "post", body: data };
      },
    }),
  }),
});
