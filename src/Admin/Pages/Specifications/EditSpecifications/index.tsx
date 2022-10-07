import { useTranslation } from "react-i18next";
import { GridActionsCellItem, GridColumns, GridRowId } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useGetAllSpecificationsQuery } from "services/adminServices/productServices";
import { ISpecifications } from "../CreateSpecifications/types";
import { AdminLinks } from "Admin/Routes/AdminLinks";
export const Wrapper = styled.div``;
export const EditSpecifications = () => {
  const { t } = useTranslation();
  const { productId = "" } = useParams();
  const { data } = useGetAllSpecificationsQuery(productId);

  const [rows, setRows] = React.useState<ISpecifications[]>(data ? data : []);
  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);
  type Row = ISpecifications;
  const deleteProduct = React.useCallback(
    (id: GridRowId) => () => {
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
        width: 200,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteProduct(params.id)}
          />,

          <Link
            to={`${AdminLinks.updateSpecifications}/${productId}/${params.id}`}
          >
            <GridActionsCellItem icon={<EditIcon />} label="edit" />
          </Link>,
        ],
      },
    ],
    []
  );
  return <Wrapper>{<DataTable rows={rows} columns={columns} />}</Wrapper>;
};
