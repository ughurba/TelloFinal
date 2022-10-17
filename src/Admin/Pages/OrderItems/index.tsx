import { GridColumns } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useGetAllOrderItemQuery } from "services/adminServices/saleAdminServices";
import { IOrderItem } from "types";
import { StyledImg } from "../Orders/style";
import { StyledColor } from "./style";

export const OrderItems = () => {
  const { orderId = "" } = useParams();
  const [rows, setRows] = useState<IOrderItem[]>([]);
  const { data } = useGetAllOrderItemQuery(orderId);
  const { t } = useTranslation();
  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  type Row = IOrderItem;
  const columns = useMemo<GridColumns<Row>>(
    () => [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "photos",
        headerName: t("Photo"),
        width: 90,
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <StyledImg src={params.value.at(0).path} />
            </>
          );
        },
      },
      { field: "title", headerName: "Title", width: 500 },
      { field: "count", headerName: t("Count"), width: 90 },
      {
        field: "storage",
        headerName: t("Storage"),
        width: 120,
        renderCell: (params) => {
          return (
            <>
              <span>{params.value}GB</span>
            </>
          );
        },
      },
      {
        field: "code",
        headerName: t("Color"),
        width: 80,
        renderCell: (params) => {
          return (
            <>
              <StyledColor color={params.value} />
            </>
          );
        },
      },
      { field: "total", headerName: t("Total"), width: 170 },
    ],
    []
  );
  return (
    <>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};
