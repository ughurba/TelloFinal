import * as React from "react";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { Goods } from "types";
import { Wrapper } from "./style";
interface Props {
  columns: GridColumns;
  rows: any[];
}

export const DataTable: React.FC<Props> = ({ columns, rows }) => {
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
