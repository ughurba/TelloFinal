import { Button } from "@mui/material";
import { GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { IAdminOrder } from "Admin/Pages/Orders/types";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { Flex } from "Components/shared";
import { OrderStatus } from "Helper";
import * as React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  useGetAllOrderQuery,
  useUpdateOrderStatusMutation,
} from "services/adminServices/saleAdminServices";
import {
  Wrapper,
  StyledImg,
  StyledPending,
  StyledButton,
  StyledReject,
  StyledSuccsess,
  StyledCheck,
  StyledRejectIcon,
} from "./style";

interface ArgTypeOrder {
  orderId: number;
  orderStatus: number;
}
export const Orders = () => {
  const { t } = useTranslation();
  const { data: Orders, refetch: getAllOrder } = useGetAllOrderQuery();
  const [putOrderStatus, { isSuccess }] = useUpdateOrderStatusMutation();
  const [rows, setRows] = React.useState<IAdminOrder[]>(Orders ? Orders : []);
  useEffect(() => {
    if (Orders) {
      setRows(Orders);
    }
  }, [Orders]);

  const handleCheckOrderStatus = (arg: ArgTypeOrder) => {
    putOrderStatus(arg);
  };

  const handleRejectOrderStatus = (arg: ArgTypeOrder) => {
    putOrderStatus(arg);
  };
  useEffect(() => {
    getAllOrder();
  }, []);
  useEffect(() => {
    if (isSuccess) {
      getAllOrder();
    }
  }, [isSuccess]);
  type Row = IAdminOrder;
  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "photos",
        headerName: t("Photo"),
        width: 110,
        sortable: false,
        renderCell: (params) => {
          return <>{<StyledImg src={params.value.at(0).path} />}</>;
        },
      },
      { field: "date", headerName: t("OrderHistory"), width: 160 },
      {
        field: "total",
        headerName: t("TotalPrice"),
        width: 120,
        renderCell: (params) => {
          return (
            <>
              <span>{params.value.toFixed(2)}</span>
            </>
          );
        },
      },
      { field: "adress", headerName: t("Adress"), width: 80 },
      {
        field: "mobile",
        headerName: t("MobileNumber"),
        width: 130,
        renderCell: (params) => {
          return (
            <>
              <span>+{params.value}</span>
            </>
          );
        },
      },
      { field: "note", headerName: t("CourierNote"), width: 120 },
      { field: "userName", headerName: t("UserName"), width: 120 },
      {
        field: "orderStatus",
        headerName: t("OrderStatus"),
        width: 120,
        renderCell: (params) => {
          if (params.value === OrderStatus.Pending) {
            return <StyledPending>Pending</StyledPending>;
          } else if (params.value === OrderStatus.Accept) {
            return <StyledSuccsess>Succsess</StyledSuccsess>;
          } else {
            return <StyledReject>Reject</StyledReject>;
          }
        },
      },
      {
        field: "cash",
        headerName: t("Payment"),
        width: 70,
        renderCell: (params) => {
          return (
            <>
              <span>{params.value ? "Nəğd " : ""}</span>
            </>
          );
        },
      },
      {
        field: "asas",
        type: "actions",
        width: 100,
        renderCell: ({ row }) => {
          return (
            <Flex AlItems="center" JsContent="space-between">
              <Button
                disabled={row.orderStatus === OrderStatus.Accept}
                onClick={() =>
                  handleCheckOrderStatus({ orderId: row.id, orderStatus: 1 })
                }
              >
                <StyledCheck weight="bold" />
              </Button>
              <Button
                onClick={() =>
                  handleRejectOrderStatus({ orderId: row.id, orderStatus: 2 })
                }
                disabled={row.orderStatus === OrderStatus.Reject}
              >
                <StyledRejectIcon weight="bold" />
              </Button>
            </Flex>
          );
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 180,
        getActions: (params) => [
          <Link to={`${AdminLinks.orderItems}/${params.id}`}>
            <StyledButton>Sifarişin detalları</StyledButton>
          </Link>,
        ],
      },
    ],
    []
  );

  return (
    <Wrapper>
      <DataTable columns={columns} rows={rows} />
    </Wrapper>
  );
};
