import { USERS_URL } from "../constants.js";
import apiSlice from "./apiSlice.js";

const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userSlice;