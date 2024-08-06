"use client";

import { useRouter } from "next/navigation";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function SingleSideBarMenu({ menu }) {
  const router = useRouter();

  if (!menu.permission) return <></>;

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => router.push(menu.link)}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.label} />
      </ListItemButton>
    </ListItem>
  );
}
