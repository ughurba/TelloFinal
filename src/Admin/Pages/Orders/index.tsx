import { Button, Tooltip } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { GridColumns } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { IAdminOrder } from "Admin/Pages/Orders/types";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { Flex } from "Components/shared";
import { OrderStatus } from "Helper";
import * as React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useGetAllOrderQuery,
  useUpdateOrderStatusMutation,
} from "services/adminServices/saleAdminServices";
import Swal from "sweetalert2";
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
import { Package } from "phosphor-react";

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
    Swal.fire({
      title: t("YouAreReadyToConfirmTheOrder"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("YesConfirm"),
    }).then((result) => {
      if (result.isConfirmed) {
        putOrderStatus(arg);
        toast.success(t("OrderConfirmed"));
      }
    });
  };

  const handleRejectOrderStatus = (arg: ArgTypeOrder) => {
    Swal.fire({
      title: t("AreYouSureYouWantToCancelTheOrder"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("YesCancelTheOrder"),
    }).then((result) => {
      if (result.isConfirmed) {
        putOrderStatus(arg);
        toast.success(t("TheOrderWasCancelled"));
      }
    });
  };
  useEffect(() => {
    getAllOrder();
  }, []);

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
            return <StyledPending>{t("Pending")}</StyledPending>;
          } else if (params.value === OrderStatus.Accept) {
            return <StyledSuccsess>{t("Success")}</StyledSuccsess>;
          } else {
            return <StyledReject>{t("Reject")}</StyledReject>;
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
              <Tooltip title={t("ConfirmTheOrder")}>
                <Button
                  disabled={row.orderStatus === OrderStatus.Accept}
                  onClick={() =>
                    handleCheckOrderStatus({ orderId: row.id, orderStatus: 1 })
                  }
                >
                  <StyledCheck weight="bold" />
                </Button>
              </Tooltip>
              <Tooltip title={t("CancelTheOrder")}>
                <Button
                  onClick={() =>
                    handleRejectOrderStatus({ orderId: row.id, orderStatus: 2 })
                  }
                  disabled={row.orderStatus === OrderStatus.Reject}
                >
                  <StyledRejectIcon weight="bold" />
                </Button>
              </Tooltip>
            </Flex>
          );
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 100,
        getActions: (params) => [
          <Link to={`${AdminLinks.orderItems}/${params.id}`}>
            <Package size={25} color="#007aff" weight="bold" />{" "}
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
