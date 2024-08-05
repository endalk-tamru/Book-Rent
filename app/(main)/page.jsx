import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import IncomeStat from "@/components/dashboard/IncomeStat";
import AvailableBookState from "@/components/dashboard/AvailableBookStat";
import LiveBookStatus from "@/components/dashboard/LiveBookStatus";
import EarningSummary from "@/components/dashboard/EarningSummary";

export default function Home() {
  return (
    <Grid container spacing={5}>
      {/* --------- LEFT SIDE --------- */}
      <Grid item xs={12} md={4}>
        <Card variant="outlined" sx={{ minWidth: "100%" }}>
          <CardContent>
            <Typography color="secondary" variant="body1">
              This Month Statistics
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date()?.toLocaleString()}
            </Typography>

            <IncomeStat />

            <AvailableBookState />
          </CardContent>
        </Card>
      </Grid>

      {/* --------- RIGHT SIDE --------- */}
      <Grid item xs={12} md={8}>
        <LiveBookStatus />
        <EarningSummary />
      </Grid>
    </Grid>
  );
}
