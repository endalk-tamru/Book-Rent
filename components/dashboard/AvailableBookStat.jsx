import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

export default function AvailableBookState() {
  return (
    <Card elevation={1} sx={{ my: 4, minWidth: "100%" }}>
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography variant="subtitle1" color="text.secondary">
              Available Books
            </Typography>
            <Chip size="small" label="Today" />
          </Stack>

          {/* --------- CHART --------- */}
        </Stack>
      </CardContent>
    </Card>
  );
}
