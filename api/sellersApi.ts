import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ImageListType } from "react-images-uploading";
import { Item } from "@typings/sellerPages";
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
    getCreateItems: builder.query({
      query: (index: number) => `/items/sellers?page=${index}`,
    }),
    getItemStocks: builder.query({
      query: (data: string) => `/stocks?${data}`,
    }),
  }),
});
