import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
  }),
});

// export const { useValidateIdQuery } = memberApi;
