import { IUserAndRoles } from "./../../Admin/Pages/User/types";
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

  endpoints: (build) => ({
    getAllUserAndRole: build.query<IUserAndRoles, void>({
      query: () => `getAllUser`,
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
    }),
  }),
});
export const {
  useGetAllUserAndRoleQuery,
  useUpdateRoleMutation,
  useCreateRoleMutation,
  useRemoveUserMutation,
} = userApi;
