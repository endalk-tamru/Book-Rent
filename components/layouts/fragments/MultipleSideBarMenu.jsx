import { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import SingleSideBarMenu from "./SingleSideBarMenu";

export default function MultipleSideBarMenu({ menus }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <List>
      {menus?.map((menu, index) =>
        menu.hasChildren ? (
          menu.permission && (
            <Fragment key={menu.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? -1 : index))
                  }
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.label} />
                  {openIndex === index ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List dense component="div" sx={{ paddingLeft: 1.5 }}>
                  {menu?.children?.map((child) => (
                    <SingleSideBarMenu key={child.id} menu={child} />
                  ))}
                </List>
              </Collapse>
            </Fragment>
          )
        ) : (
          <SingleSideBarMenu key={menu.id} menu={menu} />
        )
      )}
    </List>
  );
}
