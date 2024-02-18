import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EditUserInfo, UserInfo } from "@typings/myPage";

const URL = process.env.REACT_APP_BASE_URL;
const isDevelopment = process.env.REACT_START_MSW !== "true";

export const userInfoApi = createApi({
  reducerPath: "userInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDevelopment ? URL : "/",
    credentials: "include",
  }),
  tagTypes: ["userinfo"],
  endpoints: (builder) => ({
    getUserData: builder.query<UserInfo | undefined, string>({
      query: () => "/userinfo",
    }),

    editUserInfo: builder.mutation({
      query: (data: EditUserInfo) => {
        return { url: "userinfo", method: "post", body: data };
      },
      // invalidatesTags: [{ type: "userinfo" }],
    }),
  }),
});
