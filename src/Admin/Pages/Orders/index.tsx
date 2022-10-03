import { GridColumns } from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { IAdminOrder } from "Admin/Pages/Orders/types";
import * as React from "react";
import { useEffect } from "react";
import { useGetAllOrderQuery } from "services/adminServices/saleAdminServices";

import { Wrapper, StyledImg } from "./style";

export const Orders = () => {
  const { data: Orders } = useGetAllOrderQuery();
  const [rows, setRows] = React.useState<IAdminOrder[]>(Orders ? Orders : []);

  useEffect(() => {
    if (Orders) {
      setRows(Orders);
    }
  }, [Orders]);
  type Row = IAdminOrder;
  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "photos",
        headerName: "photo",
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
      { field: "date", headerName: "date", width: 200 },
      { field: "total", headerName: "total", width: 80 },
      { field: "adress", headerName: "adress", width: 80 },
      { field: "modile", headerName: "modile", width: 80 },
      { field: "note", headerName: "note", width: 80 },
      { field: "userName", headerName: "Name", width: 80 },
      {
        field: "orderStatus",
        headerName: "Status",
        width: 80,
        renderCell: (params) => {
          console.log(params.value);
          return <>{params.value === 0 ? <h5>Succsess</h5> : ""}</>;
        },
      },

      // {
      //   field: "actions",
      //   type: "actions",
      //   width: 80,
      //   getActions: (params) => [
      //     <GridActionsCellItem
      //       icon={<DeleteIcon />}
      //       label="Delete"
      //       onClick={deleteProduct(params.id)}
      //     />,
      //     <Link to={`${AdminLinks.addProduct}/${params.id}`}>
      //       <GridActionsCellItem icon={<EditIcon />} label="Delete" />,
      //     </Link>,
      //   ],
      // },
    ],
    []
  );
  return (
    <Wrapper>
      <DataTable columns={columns} rows={rows} />
    </Wrapper>
  );
};
