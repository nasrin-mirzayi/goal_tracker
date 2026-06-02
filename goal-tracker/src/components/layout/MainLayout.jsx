import {
  Box,
  Toolbar,
} from "@mui/material";

import {
  Outlet,
  Navigate,
} from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import {
  useUser,
} from "../../context/UserContext";

export default function MainLayout() {
  const { user } =
    useUser();

  if (
    !user?.isLoggedIn
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor:
      "background.default",
      }}
    >
      <Navbar />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor:
            "background.default",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}