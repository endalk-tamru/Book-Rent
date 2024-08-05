import {
  DashboardOutlined as Dashboard,
  MenuBookOutlined as MenuBookIcon,
  NotificationsOutlined as NotificationsIcon,
  GroupsOutlined as GroupsIcon,
  PersonOutlined as PersonIcon,
  BarChartOutlined as BarChartIcon,
  SettingsOutlined as SettingsIcon,
} from "@mui/icons-material";

export default function (userRole = {}) {
  const menus = [
    {
      id: Math.random(),
      label: "Dashboard",
      permission: true,
      icon: <Dashboard />,
    },
    {
      id: Math.random(),
      label: "Books",
      permission: true,
      icon: <MenuBookIcon />,
    },
    {
      id: Math.random(),
      label: "Owners",
      permission: true,
      icon: <GroupsIcon />,
    },
    {
      id: Math.random(),
      label: "Other",
      permission: true,
      icon: <BarChartIcon />,
    },
    {
      id: Math.random(),
      label: "Other",
      permission: true,
      icon: <BarChartIcon />,
    },
    {
      id: Math.random(),
      label: "Notification",
      permission: true,
      icon: <NotificationsIcon />,
    },
    {
      id: Math.random(),
      label: "Setting",
      permission: true,
      icon: <SettingsIcon />,
    },
    {
      id: Math.random(),
      label: "Login as Book Owner",
      permission: true,
      icon: <PersonIcon />,
    },
    {
      id: Math.random(),
      label: "Login as Admin",
      permission: true,
      icon: <PersonIcon />,
    },
  ];

  return menus.map((obj) =>
    obj.children ? handleMultipleMenu(obj) : handleSingleMenu(obj)
  );
}

const handleSingleMenu = (obj) => {
  return obj.selected
    ? { ...obj, selected: [...obj.selected, obj.to] }
    : { ...obj, selected: [obj.to] };
};

const handleMultipleMenu = (obj) => {
  var menu = { ...obj };

  menu.permission = menu.children.reduce(
    (prev, current) => prev || current.permission,
    false
  );
  menu.hasChildren = true;
  menu.children = menu.children.map((child) => handleSingleMenu(child));

  return menu;
};
