import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItemInfo } from "@typings/myPage";
import { getCookie } from "@utils/cookie";
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
    getEachItems: builder.query({
      query: (id: number) => `/items/${id}`,
    }),
    getAllItems: builder.query({
      query: (index: number) => `/items?page=${index}`,
    }),
  }),
});
