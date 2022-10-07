import * as React from "react";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { Box } from "@mui/material";
interface Props {
  columns: GridColumns;
  rows: any[];
}

export const DataTable: React.FC<Props> = ({ columns, rows }) => {
  return (
    <Box
      sx={{
        height: 400,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#2196f3",
          color: "white",
          fontWeight: 700,
        },
        "& .MuiDataGrid-row": {
          paddingBottom: "25px",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
};
