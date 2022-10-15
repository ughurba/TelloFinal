import { ILogin } from "./../../types.d";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { DataToken } from "services/baseServices/authServices";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/AdminAccount/",
  }),
  endpoints: (build) => ({
    fetchLogin: build.mutation<DataToken, FormData>({
      query: (body) => {
        return {
          url: "login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useFetchLoginMutation } = accountApi;
