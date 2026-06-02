import {
  createContext,
  useContext,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

import {
  updateStreak as calculateStreak,
} from "../services/streak";

const UserContext =
  createContext();

export function UserProvider({
  children,
}) {
  const [user, setUser] =
    useLocalStorage("user", {
      name: "",
      xp: 0,
      streak: 0,
      isLoggedIn: false,
      lastProgressDate: null,
    });

  const login = (name) => {
    setUser({
      ...user,
      name,
      isLoggedIn: true,
    });
  };

  const addXP = (
    amount
  ) => {
    setUser({
      ...user,
      xp:
        user.xp +
        amount,
    });
  };

  const setStreak = (
    value
  ) => {
    setUser({
      ...user,
      streak: value,
    });
  };

  const registerProgress =
    () => {
      setUser((prev) =>
        calculateStreak(
          prev
        )
      );
    };

  const logout =
    () => {
      setUser({
        name: "",
        xp: 0,
        streak: 0,
        isLoggedIn: false,
        lastProgressDate:
          null,
      });
    };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        addXP,

        updateStreak:
          setStreak,

        registerProgress,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(
    UserContext
  );
}