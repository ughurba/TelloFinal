import * as React from "react";
import {
  DataGrid,
  GridColumns,
  GridEventListener,
  gridClasses,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
interface Props {
  columns: GridColumns;
  rows: any[];
  handleRowEditCommit?: GridEventListener<"cellEditCommit"> | undefined;
}

export const DataTable: React.FC<Props> = ({
  columns,
  rows,
  handleRowEditCommit,
}) => {
  return (
    <Box
      sx={{
        height: 500,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#2196f3",
          color: "white",
          fontWeight: 700,
        },
        // "& .MuiDataGrid-row": {
        //   paddingBottom: "25px",
        // },
      }}
    >
      <DataGrid
        getRowHeight={() => "auto"}
        onCellEditCommit={handleRowEditCommit}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 1,
          },
        }}
      />
    </Box>
  );
};
