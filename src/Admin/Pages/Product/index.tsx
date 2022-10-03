import { DataTable } from "Admin/Components/Shared/DataTable";

import { GridActionsCellItem, GridColumns, GridRowId } from "@mui/x-data-grid";
import {
  useGetAllProductQuery,
  useRemoveDataMutation,
} from "services/adminServices/productServices";
import { StyledButton, Wrapper } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { Image } from "types";
import { Link, NavLink } from "react-router-dom";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import { StyledImg } from "Admin/Components/Shared/DataTable/style";
import { Goods } from "types";

export const Product = () => {
  const { data: Goods, isSuccess: GoodsSuccess } = useGetAllProductQuery();
  const [rows, setRows] = React.useState<Goods[]>(Goods ? Goods : []);

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
        headerName: "photos",
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
      { field: "title", headerName: "title", width: 400 },
      { field: "newPrice", headerName: "newPrice", width: 100 },
      { field: "oldPrice", headerName: "oldPrice", width: 100 },
      { field: "stockCount", headerName: "stockCount", width: 100 },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteProduct(params.id)}
          />,
          <Link to={`${AdminLinks.addProduct}/${params.id}`}>
            <GridActionsCellItem icon={<EditIcon />} label="Delete" />,
          </Link>,
        ],
      },
    ],
    [deleteProduct]
  );
  if (isSuccess) {
    toast.success("silindi");
  }

  return (
    <Wrapper>
      <NavLink to={`${AdminLinks.addProduct}/create`}>
        <StyledButton>Create Product</StyledButton>
      </NavLink>
      {<DataTable rows={rows} columns={columns} />}
    </Wrapper>
  );
};
