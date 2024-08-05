import {
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DesktopDatePicker } from "@mui/x-date-pickers";

export default function EarningSummary() {
  return (
    <Card variant="outlined" sx={{ my: 4, pt: 4, minWidth: "100%" }}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" spacing={1.5} justifyContent={"space-between"}>
            <Box>
              <Typography variant="body1" fontWeight={"bold"}>
                Earning Summary
              </Typography>

              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Deadline"
                    inputFormat="dd/MM/yyyy"
                    value={new Date()}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={new Date()}
                  />
                </Stack>
              </LocalizationProvider> */}
            </Box>

            <Stack direction="row" spacing={2}>
              <Typography variant="caption" color={"text.secondary"}>
                • Last 6 months
              </Typography>
              <Typography variant="caption" color={"text.secondary"}>
                • Same period last year
              </Typography>
            </Stack>
          </Stack>

          {/* --------- CHART --------- */}
        </Stack>
      </CardContent>
    </Card>
  );
}
