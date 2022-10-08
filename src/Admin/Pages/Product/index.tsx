import { DataTable } from "Admin/Components/Shared/DataTable";

import { GridActionsCellItem, GridColumns, GridRowId } from "@mui/x-data-grid";
import {
  useGetAllProductQuery,
  useRemoveDataMutation,
} from "services/adminServices/productServices";
import { StyledButton, StyledLink, Wrapper } from "./style";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { Image } from "types";
import { Link } from "react-router-dom";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import { StyledImg } from "Admin/Components/Shared/DataTable/style";
import { Goods } from "types";
import { Button } from "Admin/Components/Shared/Button";
import { useTranslation } from "react-i18next";

export const Product = () => {
  const { data: Goods, isSuccess: GoodsSuccess } = useGetAllProductQuery();
  const [rows, setRows] = React.useState<Goods[]>(Goods ? Goods : []);
  const { t } = useTranslation();
  type Row = Goods;
  useEffect(() => {
    if (Goods) {
      setRows(Goods);
    }
  }, [Goods]);
  const [postRemoveData, { isSuccess }] = useRemoveDataMutation();
  const deleteProduct = React.useCallback(
    (id: GridRowId) => () => {
      postRemoveData(id);
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "photos",
        headerName: t("Photos"),
        width: 130,
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              {params.value.map((item: Image, index: number) =>
                item.isMain ? <StyledImg key={index} src={item.path} /> : ""
              )}
            </>
          );
        },
      },
      { field: "title", headerName: t("Title"), width: 320 },
      { field: "newPrice", headerName: t("NewPrice"), width: 100 },
      { field: "oldPrice", headerName: t("OldPrice"), width: 100 },
      { field: "stockCount", headerName: t("StockCount"), width: 120 },
      {
        field: "actions",
        headerName: t("EditTheProduct"),
        type: "actions",
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteProduct(params.id)}
          />,
          <StyledLink to={`${AdminLinks.addProduct}/${params.id}`}>
            <EditIcon color="action" />
          </StyledLink>,
        ],
      },
      {
        field: "createSpecifications",
        headerName: t("TechnicalSpecificationsEdit"),
        type: "actions",
        width: 260,
        getActions: (params) => [
          <Link to={`${AdminLinks.createSpecifications}/${params.id}`}>
            <StyledButton>{t("CreateSpecifications")}</StyledButton>
          </Link>,

          <StyledLink to={`${AdminLinks.editSpecifications}/${params.id}`}>
            <BorderColorIcon color="action" />
          </StyledLink>,
        ],
      },
    ],
    [deleteProduct]
  );
  if (isSuccess) {
    toast.success(t("RemoveProduct"));
  }

  return (
    <>
      <StyledLink to={`${AdminLinks.addProduct}/create`}>
        <Button btnName={t("CreateProduct")} />
      </StyledLink>
      <Wrapper>{<DataTable rows={rows} columns={columns} />}</Wrapper>
    </>
  );
};
