import { Box, LinearProgress } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

const QuickSearchToolbar = () => {
  return (
    <GridToolbarContainer sx={{ pt: 2, px: 3 }}>
      <GridToolbarQuickFilter debounceMs={300} />
    </GridToolbarContainer>
  );
};

export default function GridData({ rows, columns, ...rest }) {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        slots={{
          // toolbar: QuickSearchToolbar/,
          loadingOverlay: LinearProgress,
        }}
        initialState={{
          pagination: {
            pageSize: 10,
          },
        }}
        rowsPerPageOptions={[5, 10, 25]}
        {...rest}
      />
    </Box>
  );
}
