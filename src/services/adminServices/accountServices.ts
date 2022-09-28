import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { DataToken } from "services/authServices";
import { ILogin } from "types";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/adminAccount/",
  }),
  endpoints: (build) => ({
    fetchLogin: build.mutation<DataToken, ILogin>({
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
