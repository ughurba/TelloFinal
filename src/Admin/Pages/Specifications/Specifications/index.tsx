import { useTranslation } from "react-i18next";
import { GridActionsCellItem, GridColumns, GridRowId } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import {
  useGetAllSpecificationsQuery,
  useRemoveSpecificationsMutation,
} from "services/adminServices/productServices";
import { ISpecifications } from "../CreateSpecifications/types";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Tooltip } from "@mui/material";
import { PlusCircle } from "phosphor-react";
import { TableButtons } from "Admin/Components/Shared/TableButtons";
export const Wrapper = styled.div``;
export const EditSpecifications = () => {
  const { t } = useTranslation();
  const { productId = "" } = useParams();
  const { data, refetch: getAllSpec } = useGetAllSpecificationsQuery(productId);
  const [removeSpecifications, { isSuccess }] =
    useRemoveSpecificationsMutation();
  const [rows, setRows] = React.useState<ISpecifications[]>(data ? data : []);

  useEffect(() => {
    getAllSpec();
  }, []);

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);
  useEffect(() => {
    if (isSuccess) {
      toast.success(t("SuccsessDelete"));
    }
  }, [isSuccess]);
  type Row = ISpecifications;
  const deleteSpecification = React.useCallback(
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
          removeSpecifications({ productId: productId, specId: id });
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
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Key", width: 300 },
      { field: "value", headerName: "Value", width: 300 },
      {
        field: "actions",
        headerName: t("EditTheProduct"),
        type: "actions",
        width: 450,
        getActions: (params) => [
          <Tooltip title={t("RemoveSpecification")}>
            <GridActionsCellItem
              icon={<TableButtons onRemoveBtn={true} />}
              label="Delete"
              onClick={deleteSpecification(params.id)}
            />
          </Tooltip>,
          <TableButtons
            onEditBtn={true}
            titleToolTip={t("EditSpecification")}
            toRouting={`${AdminLinks.updateSpecifications}/${productId}/${params.id}`}
          />,
        ],
      },
    ],
    [deleteSpecification]
  );
  return <Wrapper>{<DataTable rows={rows} columns={columns} />}</Wrapper>;
};
