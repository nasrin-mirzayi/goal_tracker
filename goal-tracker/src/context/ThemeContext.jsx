import {
  createContext,
  useContext,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext =
  createContext();

export function ThemeProvider({
  children,
}) {
  const [
    settings,
    setSettings,
  ] = useLocalStorage(
    "themeSettings",
    {
      mode: "dark",
      color: "purple",
    }
  );

  const toggleMode =
    () => {
      setSettings({
        ...settings,
        mode:
          settings.mode ===
          "dark"
            ? "light"
            : "dark",
      });
    };

  const setColor = (
    color
  ) => {
    setSettings({
      ...settings,
      color,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        settings,
        toggleMode,
        setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(
    ThemeContext
  );
}