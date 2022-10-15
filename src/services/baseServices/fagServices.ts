import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFag } from "../../Pages/question/type";

export const fagApi = createApi({
  reducerPath: "fagApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/fag",
  }),
  endpoints: (build) => ({
    getAllFags: build.query<IFag[], void>({
      query: () => ``,
    }),
  }),
});
export const { useGetAllFagsQuery } = fagApi;
