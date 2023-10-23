import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery(BASE_URL);

const apiSlice = createApi({
  baseQuery,
  tagTypes: ["EVENTS"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
