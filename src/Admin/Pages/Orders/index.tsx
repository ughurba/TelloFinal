import { GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { IAdminOrder } from "Admin/Pages/Orders/types";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { Flex } from "Components/shared";
import * as React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  useGetAllOrderQuery,
  useUpdateOrderStatusMutation,
} from "services/adminServices/saleAdminServices";
// import { OrderStatus } from "types";
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
enum OrderStatus {
  Pending,
  Accept,
  Reject,
}
interface ArgTypeOrder {
  orderId: number;
  orderStatus: number;
}
export const Orders = () => {
  const { t } = useTranslation();
  const { data: Orders } = useGetAllOrderQuery();
  const [putOrderStatus] = useUpdateOrderStatusMutation();
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
          return (
            <>
              <StyledImg src={params.value.at(0).path} />
            </>
          );
        },
      },
      { field: "date", headerName: t("OrderHistory"), width: 160 },
      { field: "total", headerName: t("TotalPrice"), width: 120 },
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
        field: "asas",
        type: "actions",
        width: 80,
        renderCell: ({ row }) => {
          return (
            <Flex AlItems="center" JsContent="space-between">
              <StyledCheck
                weight="bold"
                onClick={() =>
                  handleCheckOrderStatus({ orderId: row.id, orderStatus: 1 })
                }
              />
              <StyledRejectIcon
                weight="bold"
                onClick={() =>
                  handleRejectOrderStatus({ orderId: row.id, orderStatus: 2 })
                }
              />
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
