import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILogin, IRegisterData } from "../types";
import { IComment } from "../Components/shared/specification/types";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/comment",
  }),

  endpoints: (builder) => ({
    commentPost: builder.mutation<void, IComment>({
      query: (body) => {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
    }),
    getComments: builder.query<IComment[], number>({
      query: (id: number) => `/${id}`,
    }),
    removeComment: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useCommentPostMutation,
  useGetCommentsQuery,
  useRemoveCommentMutation,
} = commentApi;
