
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

export default function Sidebar({
  mobileOpen,
  onClose,
  isMobile,
}) {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { label: t("dashboard"), path: "/dashboard" },
    { label: t("goals"), path: "/goals" },
    { label: t("createGoal"), path: "/goals/new" },
    { label: t("categories"), path: "/categories" },
    { label: t("achievements"), path: "/achievements" },
    { label: t("profile"), path: "/profile" },
    { label: t("settings"), path: "/settings" },
  ];

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={isMobile ? onClose : undefined}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}