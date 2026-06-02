import {
  createContext,
  useContext,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const GoalContext =
  createContext();

export function GoalProvider({
  children,
}) {
  const [goals, setGoals] =
    useLocalStorage(
      "goals",
      []
    );

  const addGoal = (
    goal
  ) => {
    setGoals([
      ...goals,
      goal,
    ]);
  };

  const deleteGoal = (
    id
  ) => {
    setGoals(
      goals.filter(
        (goal) =>
          goal.id !== id
      )
    );
  };

  const updateGoal = (
    id,
    updates
  ) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              ...updates,
            }
          : goal
      )
    );
  };

  const addProgress = (
    id
  ) => {
    setGoals(
      goals.map((goal) => {
        if (
          goal.id !== id
        )
          return goal;

        if (
          goal.status ===
            "paused" ||
          goal.status ===
            "archived"
        )
          return goal;

        const newProgress =
          goal.progress +
          1;

        return {
          ...goal,

          progress:
            newProgress,

          status:
            newProgress >=
            goal.target
              ? "completed"
              : "active",
        };
      })
    );
  };

  const pauseGoal = (
    id
  ) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              status:
                "paused",
            }
          : goal
      )
    );
  };

  const resumeGoal = (
    id
  ) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              status:
                "active",
            }
          : goal
      )
    );
  };

  const completeGoal = (
    id
  ) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              status:
                "completed",
            }
          : goal
      )
    );
  };

  const archiveGoal = (
    id
  ) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              status:
                "archived",
            }
          : goal
      )
    );
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        addGoal,
        deleteGoal,
        updateGoal,
        addProgress,

        pauseGoal,
        resumeGoal,
        completeGoal,
        archiveGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}

export function useGoals() {
  return useContext(
    GoalContext
  );
}