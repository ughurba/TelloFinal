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
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { DataTable } from "Admin/Components/Shared/DataTable";
import {
  useGetAllUserAndRoleQuery,
  useRemoveUserMutation,
  useUpdateRoleMutation,
} from "services/adminServices/userServices";
import { IUser } from "./types";
import { Loader } from "Components/shared";
import { toast } from "react-toastify";
import { BasicModalDialog } from "./components/modal";

export const Wrapper = styled.div``;
export const Users = () => {
  const { data, isLoading } = useGetAllUserAndRoleQuery();
  const [updateRole, { isSuccess }] = useUpdateRoleMutation();
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
  useEffect(() => {
    if (isSuccess) {
      toast.success("Update olundu dostum");
    }
    if (removeSuccess) {
      toast.success("silindi dostum");
    }
  }, [isSuccess, removeSuccess]);

  const handleRowEditCommit = React.useCallback(
    (params: GridCellEditCommitParams, event: MuiEvent<MuiBaseEvent>) => {
      updateRole({ id: params.id, role: params.value });
    },
    []
  );
  const deleteProduct = React.useCallback(
    (id: GridRowId) => () => {
      removeUser({ id: id });
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
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
        headerName: t("Role"),
        type: "singleSelect",
        valueOptions: data?.role,
        editable: true,
        width: 150,
      },
      {
        field: "actions",
        headerName: "actions",
        type: "actions",
        width: 350,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteProduct(params.id)}
          />,
          <BasicModalDialog />,
        ],
      },
    ],
    [deleteProduct, data]
  );
  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          handleRowEditCommit={handleRowEditCommit}
          rows={rows}
          columns={columns}
        />
      )}
    </Wrapper>
  );
};
