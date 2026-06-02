import React from "react";
import ReactDOM from "react-dom/client";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";

import { CacheProvider } from "@emotion/react";

import App from "./App";

import getTheme from "./app/theme";
import rtlCache from "./app/rtlCache";

import {
  ThemeProvider,
  useThemeMode,
} from "./context/ThemeContext";

import {
  LanguageProvider,
  useLanguage,
} from "./context/LanguageContext";

import {
  UserProvider,
} from "./context/UserContext";

import {
  GoalProvider,
} from "./context/GoalContext";

import {
  AchievementProvider,
} from "./context/AchievementContext";

function Providers() {
  const { settings } =
    useThemeMode();

  const { isRTL } =
    useLanguage();

  const theme =
    getTheme(
      settings.mode,
      settings.color
    );

  const content = (
    <MuiThemeProvider
      theme={theme}
    >
      <CssBaseline />

      <UserProvider>
        <GoalProvider>
          <AchievementProvider>
            <App />
          </AchievementProvider>
        </GoalProvider>
      </UserProvider>
    </MuiThemeProvider>
  );

  if (isRTL) {
    return (
      <CacheProvider
        value={rtlCache}
      >
        {content}
      </CacheProvider>
    );
  }

  return content;
}

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <Providers />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);