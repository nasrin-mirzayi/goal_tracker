import {
  Typography,
  Box,
  Button,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";

import {
  Link,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  useGoals,
} from "../context/GoalContext";

import GoalCard from "../components/goals/GoalCard";

export default function Goals() {
  const { goals } =
    useGoals();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const filteredGoals =
    goals.filter((goal) => {
      const matchesSearch =
        goal.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        status === "all"
          ? true
          : goal.status ===
            status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems:
            "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">
          Goals
        </Typography>

        <Button
          component={Link}
          to="/goals/new"
          variant="contained"
        >
          New Goal
        </Button>
      </Box>

      <TextField
        fullWidth
        label="Search goals"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        sx={{
          mb: 3,
        }}
      />

      <Tabs
        value={status}
        onChange={(
          _,
          value
        ) =>
          setStatus(value)
        }
        sx={{
          mb: 3,
        }}
      >
        <Tab
          label="All"
          value="all"
        />

        <Tab
          label="Active"
          value="active"
        />

        <Tab
          label="Paused"
          value="paused"
        />

        <Tab
          label="Completed"
          value="completed"
        />

        <Tab
          label="Archived"
          value="archived"
        />
      </Tabs>

      {filteredGoals.length ===
      0 ? (
        <Typography
          color="text.secondary"
        >
          No goals found.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 3,
          }}
        >
          {filteredGoals.map(
            (goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
              />
            )
          )}
        </Box>
      )}
    </Box>
  );
}