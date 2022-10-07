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
  const deleteProduct = React.useCallback(
    (id: GridRowId) => () => {
      removeSpecifications({ productId: productId, specId: id });
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
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
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteProduct(params.id)}
          />,

          <Link
            to={`${AdminLinks.updateSpecifications}/${productId}/${params.id}`}
          >
            <EditIcon color="action" />
          </Link>,
        ],
      },
    ],
    []
  );
  return <Wrapper>{<DataTable rows={rows} columns={columns} />}</Wrapper>;
};
