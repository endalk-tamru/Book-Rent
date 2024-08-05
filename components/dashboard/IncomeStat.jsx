import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowDownward as ArrowDownwardIcon } from "@mui/icons-material";

export default function IncomeStat() {
  return (
    <Card elevation={1} sx={{ my: 4, minWidth: "100%" }}>
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography variant="subtitle1" color="text.secondary">
              Income
            </Typography>
            <Chip size="small" label="This Month" />
          </Stack>
          <Divider />

          <Stack
            direction="row"
            spacing={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontWeight={"bolder"}>
              ETB 9460.00
            </Typography>

            <Typography variant="caption" color="error" fontWeight={"bold"}>
              <Stack direction={"row"} alignItems={"center"}>
                <ArrowDownwardIcon fontSize="small" />
                <span>1.5</span>
              </Stack>
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Compared to ETB 9940 last month
          </Typography>

          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography variant="body2">Last Month Income</Typography>
            <Typography variant="body2">ETB 25658.00</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
