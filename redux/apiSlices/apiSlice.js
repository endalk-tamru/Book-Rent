import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_URL } from "@/constants/apiTags";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: { "Content-Type": "application/json" },
  }),
  tagTypes: Object.values(API_TAGS),
  endpoints: (builder) => ({}),
});
