import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin, IRegisterData } from "../types";

interface DataToken {
  token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/account/",
  }),

  endpoints: (builder) => ({
    fetchRegisters: builder.mutation<any, IRegisterData>({
      query: (body: IRegisterData) => {
        return {
          url: "register",
          method: "POST",
          body,
        };
      },
    }),
    fetchLogin: builder.mutation<DataToken, ILogin>({
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
export const { useFetchRegistersMutation, useFetchLoginMutation } = authApi;
