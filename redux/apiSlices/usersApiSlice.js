import { apiSlice } from "./apiSlice";
import { API_TAGS } from "@/constants/apiTags";

const USERS_URL = "/user";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.USER],
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.USER],
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = usersApiSlice;
