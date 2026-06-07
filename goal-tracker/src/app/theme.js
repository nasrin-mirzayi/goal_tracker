import { createTheme } from "@mui/material";

export const colors = {
  purple: "#8b63fa",
  blue: "#2196F3",
  green: "#a9f7ad",
  pink: "#f576a0",
  brown: "#643929",
};

export default function getTheme(
  mode,
  color
) {
  const primary =
    colors[color] ||
    colors.purple;

  return createTheme({
    palette: {
      mode,

      primary: {
        main: primary,
      },

      secondary: {
        main: primary,
      },

      background: {
        default:
          mode === "dark"
            ? "#0f172a"
            : "#f8fafc",

        paper:
          mode === "dark"
            ? "#1e293b"
            : "#ffffff",
      },
    },

    shape: {
      borderRadius: 20,
    },

    typography: {
      fontFamily:
        "Inter, sans-serif",
    },

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
          },
        },
      },


    },
  });
}