import {
  GridActionsCellItem,
  GridCellEditCommitParams,
  GridColumns,
  GridRowId,
  MuiBaseEvent,
  MuiEvent,
} from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { DataTable } from "Admin/Components/Shared/DataTable";
import {
  useCreateRoleMutation,
  useGetAllUserAndRoleQuery,
  useRemoveUserMutation,
  useUpdateRoleMutation,
} from "services/adminServices/userServices";
import { IUser } from "./types";
import { Loader } from "Components/shared";
import { BasicModalDialog } from "../../Components/Shared/Modal";
import RemoveRoleModal from "./components/removeModalRole";
import { StyledCreateRole, StyledRemoveRole } from "./style";
import { useSuccess } from "Hooks/useSuccess";
import { Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import { TableButtons } from "Admin/Components/Shared/TableButtons";
export const Wrapper = styled.div``;
const Users = () => {
  const { data, isLoading } = useGetAllUserAndRoleQuery();
  const [updateRole, { isSuccess }] = useUpdateRoleMutation();
  const [postRole, { isSuccess: roleCreateSuccess }] = useCreateRoleMutation();

  const [removeUser, { isSuccess: removeSuccess }] = useRemoveUserMutation();
  const [rows, setRows] = React.useState<IUser[]>(
    data?.returnUserDtos ? data.returnUserDtos : []
  );
  const { t } = useTranslation();
  type Row = IUser;

  useEffect(() => {
    if (data) {
      setRows(data.returnUserDtos);
    }
  }, [data]);

  useSuccess(isSuccess, "InformationHasBeenUpdated");
  useSuccess(removeSuccess, "UserDelete");
  useSuccess(roleCreateSuccess, "RoleAdded");
  const handleRowEditCommit = React.useCallback(
    (params: GridCellEditCommitParams, event: MuiEvent<MuiBaseEvent>) => {
      updateRole({ id: params.id, role: params.value });
    },
    []
  );
  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      Swal.fire({
        title: t("AreYouSure"),
        text: t("YouWontbeAbleToRevertThis"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: t("YesDeletIt"),
      }).then((result) => {
        if (result.isConfirmed) {
          removeUser({ id: id });
          setTimeout(() => {
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        }
      });
    },
    []
  );

  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: "name", headerName: t("Name"), width: 150 },
      { field: "surname", headerName: t("Surname"), width: 150 },
      { field: "birthday", headerName: t("Birthday"), width: 150 },
      { field: "email", headerName: t("EMail"), width: 170 },
      {
        field: "userRoles",
        type: "singleSelect",
        headerName: t("Role"),
        valueOptions: data?.role,
        editable: true,
        width: 250,
      },
      {
        field: "actions",
        headerName: "actions",
        type: "actions",
        width: 230,

        getActions: (params) => [
          <Tooltip title={t("RemoveUser")}>
            <GridActionsCellItem
              icon={<TableButtons onRemoveBtn={true} />}
              label="Delete"
              onClick={deleteUser(params.id)}
            />
          </Tooltip>,
        ],
      },
    ],
    [deleteUser, data, t]
  );
  const handleCreateRole = (value: string) => {
    postRole({ role: value });
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledCreateRole>
            <BasicModalDialog
              btnName={t("AddRole")}
              label="Role Name"
              title={t("EnterTheRoll")}
              postFn={handleCreateRole}
            />
          </StyledCreateRole>
          <StyledRemoveRole>
            <RemoveRoleModal />
          </StyledRemoveRole>

          <DataTable
            handleRowEditCommit={handleRowEditCommit}
            rows={rows}
            columns={columns}
          />
        </>
      )}
    </Wrapper>
  );
};
export default Users;
