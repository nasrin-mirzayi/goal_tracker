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
    const unlocked = [];

    const completedGoals =
      goals.filter(
        (goal) =>
          goal.status ===
          "completed"
      ).length;

    if (goals.length >= 1)
      unlocked.push(
        "First Goal"
      );

    if (goals.length >= 5)
      unlocked.push(
        "Goal Master"
      );

    if (completedGoals >= 1)
      unlocked.push(
        "First Completion"
      );

    if (completedGoals >= 10)
      unlocked.push(
        "Goal Crusher"
      );

    if (user?.xp >= 100)
      unlocked.push(
        "Level 2"
      );

    if (user?.xp >= 500)
      unlocked.push(
        "Level 5"
      );

    if (user?.streak >= 7)
      unlocked.push(
        "7 Day Streak"
      );

    if (user?.streak >= 30)
      unlocked.push(
        "30 Day Streak"
      );

    if (user?.streak >= 100)
      unlocked.push(
        "100 Day Streak"
      );

    setAchievements(
      (prev) => {
        if (
          JSON.stringify(
            prev
          ) ===
          JSON.stringify(
            unlocked
          )
        ) {
          return prev;
        }

        return unlocked;
      }
    );
  }, [
    goals,
    user?.xp,
    user?.streak,
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