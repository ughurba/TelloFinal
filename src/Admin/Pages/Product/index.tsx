import { DataTable } from "Admin/Components/Shared/DataTable";

import { GridActionsCellItem, GridColumns, GridRowId } from "@mui/x-data-grid";
import {
  useGetAllProductQuery,
  useRemoveDataMutation,
} from "services/adminServices/productServices";
import { StyledLink, Wrapper } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { Image } from "types";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import { StyledImg } from "Admin/Components/Shared/DataTable/style";
import { Goods } from "types";
import { Button } from "Admin/Components/Shared/Button";
import { useTranslation } from "react-i18next";
import { Loader } from "Components/shared";
import { Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import { ClipboardText } from "phosphor-react";
import { TableButtons } from "Admin/Components/Shared/TableButtons";

export const Product = () => {
  const {
    data: Goods,
    refetch: getAllProduct,
    isSuccess: GoodsSuccess,
    isLoading,
  } = useGetAllProductQuery();
  const [rows, setRows] = React.useState<Goods[]>(Goods ? Goods : []);
  const { t } = useTranslation();
  type Row = Goods;
  useEffect(() => {
    getAllProduct();
  }, []);
  useEffect(() => {
    if (Goods) {
      setRows(Goods);
    }
  }, [Goods]);
  const [postRemoveData, { isSuccess }] = useRemoveDataMutation();
  const deleteProduct = React.useCallback(
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
          postRemoveData(id);
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
      { field: "title", headerName: t("Title"), width: 470 },
      { field: "newPrice", headerName: t("NewPrice"), width: 100 },
      { field: "oldPrice", headerName: t("OldPrice"), width: 100 },
      { field: "stockCount", headerName: t("StockCount"), width: 120 },
      {
        field: "actions",
        headerName: t("EditTheProduct"),
        type: "actions",
        width: 110,
        getActions: (params) => [
          <Tooltip title={t("RemoveProducting")}>
            <GridActionsCellItem
              icon={<TableButtons onRemoveBtn={true} />}
              label="Delete"
              onClick={deleteProduct(params.id)}
            />
          </Tooltip>,
          <TableButtons
            onEditBtn={true}
            toRouting={`${AdminLinks.addProduct}/${params.id}`}
            titleToolTip={t("EditProduct")}
          />,
        ],
      },
      {
        field: "createSpecifications",
        headerName: t("TechnicalCharacteristics"),
        type: "actions",
        width: 170,
        getActions: (params) => [
          <TableButtons
            onAddBtn={true}
            titleToolTip={t("AddSpecification")}
            toRouting={`${AdminLinks.createSpecifications}/${params.id}`}
          />,

          <Tooltip title={t("AccessToSpecifications")}>
            <StyledLink to={`${AdminLinks.editSpecifications}/${params.id}`}>
              <ClipboardText size={25} color="#007aff" weight="bold" />
            </StyledLink>
          </Tooltip>,
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledLink to={`${AdminLinks.addProduct}/create`}>
            <Button btnName={t("CreateProduct")} />
          </StyledLink>
          <Wrapper>{<DataTable rows={rows} columns={columns} />}</Wrapper>
        </>
      )}
    </>
  );
};
