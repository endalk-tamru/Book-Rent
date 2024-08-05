import { Box, Typography } from "@mui/material";
import statusTags from "@/constants/statusTags";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(1.5)" }}
  >
    •
  </Box>
);

export default function StatusLabel({ status }) {
  return (
    <Typography
      component="div"
      sx={{
        fontSize: 14,
        color:
          Object.values(statusTags)?.find((obj) => obj?.label === status)
            ?.bgColor ?? "default",
        textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
      }}
    >
      {bull} {status ?? ""}
    </Typography>
  );
}
