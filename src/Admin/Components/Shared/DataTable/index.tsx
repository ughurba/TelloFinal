import * as React from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
} from "@mui/x-data-grid";
import { Goods } from "types";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRemoveDataMutation } from "services/adminServices/productServices";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { Image } from "types";
import { Link, NavLink } from "react-router-dom";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { StyledImg, Wrapper } from "./style";
interface Props {
  product: Goods[];
}

export const DataTable: React.FC<Props> = ({ product }) => {
  const [rows, setRows] = React.useState<Goods[]>(product);
  type Row = typeof product[number];
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Wrapper>
  );
};
