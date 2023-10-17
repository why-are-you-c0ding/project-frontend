import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginInfo, SignUpInfo } from "@typings/member";
const URL = process.env.REACT_APP_BASE_URL;
const isDevelopment = process.env.NODE_ENV !== "development";

export const memberApi = createApi({
  reducerPath: "memberApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDevelopment ? URL : "/",
    credentials: "include",
  }),
  tagTypes: ["member"],
  endpoints: (builder) => ({
    validateId: builder.mutation({
      query: ({ loginId }: { loginId: string }) => {
        return {
          url: "/verification/login-id",
          method: "POST",
          body: { loginId },
        };
      },
    }),
    receiveEmail: builder.mutation({
      query: ({ receiveEmail }: { receiveEmail: string }) => {
        return {
          url: "/emails",
          method: "POST",
          body: { receiveEmail },
        };
      },
    }),
    verificationNickName: builder.mutation({
      query: ({ nickName }: { nickName: string }) => {
        return {
          url: "/verification/nick-name",
          method: "POST",
          body: { nickName },
        };
      },
    }),
    signUpConsumers: builder.mutation({
      query: ({
        nickName,
        email,
        loginId,
        password,
        checkPassword,
        age,
        authKey,
      }: SignUpInfo) => {
        return {
          url: "/members/consumers",
          method: "POST",
          body: {
            nickName,
            email,
            loginId,
            password,
            checkPassword,
            age,
            authKey,
          },
        };
      },
    }),
    signUpSellers: builder.mutation({
      query: ({
        nickName,
        email,
        loginId,
        password,
        checkPassword,
        age,
        authKey,
      }: SignUpInfo) => {
        return {
          url: "/members/sellers",
          method: "POST",
          body: {
            nickName,
            email,
            loginId,
            password,
            checkPassword,
            age,
            authKey,
          },
        };
      },
    }),
    login: builder.mutation({
      query: ({ loginId, password }: LoginInfo) => {
        return {
          url: "/local/login",
          method: "POST",
          body: {
            loginId,
            password,
          },
        };
      },
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "/logout",
          method: "POST",
        };
      },
    }),
  }),
});
