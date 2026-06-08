import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Chip,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useUser } from "../../context/UserContext";
import { useThemeMode } from "../../context/ThemeContext";

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, logout } = useUser();
  const { settings } = useThemeMode();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      color="inherit"
    >
      <Toolbar>
        {isMobile && (
          <IconButton onClick={onMenuClick} edge="start" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Goal Tracker
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!isMobile && (
            <>
              <Chip color="primary" label={`XP ${user.xp}`} />
              <Chip
                variant="outlined"
                label={`${settings.color} • ${settings.mode}`}
              />
              <Typography>{user.name}</Typography>
            </>
          )}

          <Avatar>{user.name?.[0]?.toUpperCase()}</Avatar>

          <Button color="error" onClick={handleLogout}>
            {t("logout")}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}