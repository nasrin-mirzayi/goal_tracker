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
    setUser((prev) => ({
      ...prev,
      name,
      isLoggedIn: true,
    }));
  };

  const addXP = (
    amount
  ) => {
    setUser((prev) => ({
      ...prev,
      xp:
        prev.xp +
        amount,
    }));
  };

  const setStreak = (
    value
  ) => {
    setUser((prev) => ({
      ...prev,
      streak: value,
    }));
  };

  const registerProgress =
    () => {
      setUser((prev) =>
        calculateStreak(
          prev
        )
      );
    };

  const rewardProgress =
    () => {
      setUser((prev) => {
        const updated =
          calculateStreak(
            prev
          );

        return {
          ...updated,
          xp:
            updated.xp +
            10,
        };
      });
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

        rewardProgress,

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