import { IRole, IUserAndRoles } from "./../../Admin/Pages/User/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GridRowId } from "@mui/x-data-grid";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/AdminUser/",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userAdminToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Role"],

  endpoints: (build) => ({
    getAllUserAndRole: build.query<IUserAndRoles, void>({
      query: () => `getAllUser`,
      providesTags: ["Role"],
    }),
    getAllRoles: build.query<IRole[], void>({
      query: () => `getAllRole`,
      providesTags: ["Role"],
    }),
    removeRole: build.mutation<void, { id: string }>({
      query: (arg) => {
        return {
          url: `removeRole?id=${arg.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Role"],
    }),
    removeUser: build.mutation<void, { id: GridRowId }>({
      query: (arg) => {
        return {
          url: `userRemove?id=${arg.id}`,
          method: "DELETE",
        };
      },
    }),
    updateRole: build.mutation<void, { id: GridRowId; role: string }>({
      query: (body) => {
        return {
          url: `updateRole`,
          method: "PUT",
          body,
        };
      },
    }),
    createRole: build.mutation<void, { role: string }>({
      query: (role) => {
        return {
          url: `createRole/${role.role}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Role"],
    }),
  }),
});

export const {
  useUpdateRoleMutation,
  useCreateRoleMutation,
  useRemoveUserMutation,
  useGetAllRolesQuery,
  useRemoveRoleMutation,
  useGetAllUserAndRoleQuery,
} = userApi;
