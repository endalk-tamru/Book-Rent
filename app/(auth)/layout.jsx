"use client";

import { Grid, Stack } from "@mui/material";
import { MenuBookOutlined as MenuBookIcon } from "@mui/icons-material";

export default function AuthLayout({ children }) {
  return (
    <Grid container direction={{ xs: "column", md: "row" }}>
      {/* --------- LOGO --------- */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: { xs: "30vh", md: "100vh" },
        }}
      >
        <Stack
          height="100%"
          justifyContent="center"
          alignItems="center"
          bgcolor={(theme) => theme.palette.secondary.main}
        >
          <MenuBookIcon
            sx={{
              fontSize: { xs: 100, md: 200 },
              color: (theme) => theme.palette.common.white,
            }}
          />
        </Stack>
      </Grid>

      {/* --------- LOGIN/SING-UP FORM --------- */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: { xs: "70vh", md: "100vh" },
        }}
      >
        <Stack height="100%" justifyContent="center" alignItems="center">
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
}
