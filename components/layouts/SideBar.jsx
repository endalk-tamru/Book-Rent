import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { LogoutOutlined as LogoutIcon } from "@mui/icons-material";

import sidebarMenus from "@/constants/sidebarMenus";
import MultipleSideBarMenu from "./fragments/MultipleSideBarMenu";

export default function SideBar({
  drawerWidth,
  openDrawer,
  handleDrawerToggle,
}) {
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Book Rent
      </Typography>
      <Divider />

      <MultipleSideBarMenu menus={sidebarMenus()} />
      <Divider />

      <Button
        sx={{ mt: 2, px: 8 }}
        variant="contained"
        color="shadow"
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      {/* using the temporary variant to display a drawer for small screens and
      permanent for a drawer for wider screens. */}
      <Drawer
        // PaperProps={{
        //   sx: {
        //     background: "#171b36",
        //     color: "#fff",
        //     border: "unset",
        //   },
        // }}
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        // PaperProps={{
        //   sx: {
        //     background: "#171b36",
        //     color: "#fff",
        //     border: "unset",
        //   },
        // }}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
