import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFag } from "../../Pages/question/type";

export const fagAdminApi = createApi({
  reducerPath: "fagAdminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/Adminfag",

    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userAdminToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["addFag"],

  endpoints: (build) => ({
    getAllFags: build.query<IFag[], void>({
      query: () => ``,
      providesTags: ["addFag"],
    }),
    createFag: build.mutation<void, { key: string; value: string }>({
      query: (body) => {
        return {
          url: "",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["addFag"],
    }),
    removeFag: build.mutation<void, number>({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["addFag"],
    }),
  }),
});
export const {
  useGetAllFagsQuery,
  useCreateFagMutation,
  useRemoveFagMutation,
} = fagAdminApi;
