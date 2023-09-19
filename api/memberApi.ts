import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpInfo } from "@typings/member";
const URL = process.env.REACT_APP_BASE_URL;

export const memberApi = createApi({
  reducerPath: "memberApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["signUp"],
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
    signUSellers: builder.mutation({
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
  }),
});

// export const { useValidateIdQuery } = memberApi;
