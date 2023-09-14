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
  }),
});
