import {
  createContext,
  useContext,
  useEffect,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

import { useGoals } from "./GoalContext";
import { useUser } from "./UserContext";

const AchievementContext =
  createContext();

export function AchievementProvider({
  children,
}) {
  const { goals } =
    useGoals();

  const { user } =
    useUser();

  const [
    achievements,
    setAchievements,
  ] = useLocalStorage(
    "achievements",
    []
  );

  useEffect(() => {
    const unlocked =
      [];

    if (
      goals.length >= 1
    ) {
      unlocked.push(
        "First Goal"
      );
    }

    if (
      goals.length >= 5
    ) {
      unlocked.push(
        "Goal Master"
      );
    }

    if (
      user?.xp >= 100
    ) {
      unlocked.push(
        "Level 2"
      );
    }

    if (
      user?.xp >= 500
    ) {
      unlocked.push(
        "Level 5"
      );
    }

    if (
      user?.streak >= 7
    ) {
      unlocked.push(
        "7 Day Streak"
      );
    }

    if (
      user?.streak >= 30
    ) {
      unlocked.push(
        "30 Day Streak"
      );
    }

    if (
      user?.streak >= 100
    ) {
      unlocked.push(
        "100 Day Streak"
      );
    }

    const isSame =
      JSON.stringify(
        achievements
      ) ===
      JSON.stringify(
        unlocked
      );

    if (!isSame) {
      setAchievements(
        unlocked
      );
    }
  }, [
    goals,
    user?.xp,
    user?.streak,
    achievements,
  ]);

  return (
    <AchievementContext.Provider
      value={{
        achievements,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  return useContext(
    AchievementContext
  );
}