import { Stack, Typography } from "@mui/material";

export default function Title({ title, subTitle, variant = "h6" }) {
  return (
    <Stack spacing={3}>
      <Typography color="secondary" variant={variant}>
        {title}
      </Typography>
      {subTitle && (
        <Typography variant="body2" color="text.secondary">
          {subTitle}
        </Typography>
      )}
    </Stack>
  );
}
