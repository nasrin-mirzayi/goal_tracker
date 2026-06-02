import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Switch,
} from "@mui/material";

import {
  useThemeMode,
} from "../context/ThemeContext";

import {
  useLanguage,
} from "../context/LanguageContext";

const colors = [
  "purple",
  "blue",
  "green",
  "pink",
  "brown",
];

export default function Settings() {
  const {
    settings,
    toggleMode,
    setColor,
  } =
    useThemeMode();

  const {
    language,
    toggleLanguage,
  } =
    useLanguage();

  const resetApp =
    () => {
      localStorage.clear();

      window.location.reload();
    };

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        Settings
      </Typography>

      {/* Theme Mode */}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Appearance
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems:
                "center",
              gap: 2,
            }}
          >
            <Typography>
              Light
            </Typography>

            <Switch
              checked={
                settings.mode ===
                "dark"
              }
              onChange={
                toggleMode
              }
            />

            <Typography>
              Dark
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Theme Color */}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Theme Color
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap:
                "wrap",
            }}
          >
            {colors.map(
              (
                color
              ) => (
                <Button
                  key={
                    color
                  }
                  variant={
                    settings.color ===
                    color
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() =>
                    setColor(
                      color
                    )
                  }
                >
                  {color}
                </Button>
              )
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Language */}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Language
          </Typography>

          <Button
            variant="contained"
            onClick={
              toggleLanguage
            }
          >
            {language ===
            "en"
              ? "فارسی"
              : "English"}
          </Button>
        </CardContent>
      </Card>

      {/* Reset */}

      <Card>
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Danger Zone
          </Typography>

          <Button
            color="error"
            variant="contained"
            onClick={
              resetApp
            }
          >
            Reset All Data
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}