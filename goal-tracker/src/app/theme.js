import { createTheme } from "@mui/material";

export const colors = {
  purple: "#7C4DFF",
  blue: "#2196F3",
  green: "#2E7D32",
  pink: "#E91E63",
  brown: "#795548",
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