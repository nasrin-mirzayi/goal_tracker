import {
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

import { useGoals } from "../context/GoalContext";
import { useUser } from "../context/UserContext";

import StatsCard from "../components/dashboard/StatsCard";
import XPCard from "../components/dashboard/XPCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import CategoryChart from "../components/dashboard/CategoryChart";

import GoalCard from "../components/goals/GoalCard";
import Achievements from "../components/dashboard/Achievements";

export default function Dashboard() {
  const { goals } =
    useGoals();

  const { user } =
    useUser();

  const completed =
    goals.filter(
      (goal) =>
        goal.status ===
        "completed"
    ).length;

  const activeGoals =
    goals.filter(
      (goal) =>
        goal.status ===
        "active"
    );

  return (
    <Box>
      {/* Header */}

      <Box mb={4}>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          Welcome back,
          {" "}
          {user.name}
          👋
        </Typography>

        <Typography
          color="text.secondary"
        >
          Keep building consistency.
        </Typography>
      </Box>

      {/* Stats */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 3,
        }}
      >
        <StatsCard
          title="XP"
          value={user.xp}
        />

        <StatsCard
          title="Streak"
          value={user.streak}
        />

        <StatsCard
          title="Goals"
          value={goals.length}
        />

        <StatsCard
          title="Completed"
          value={completed}
        />
      </Box>

      {/* XP */}

      <Box mt={3}>
        <XPCard
          xp={user.xp}
        />
      </Box>

      {/* Charts */}

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr",
          gap: 3,
        }}
      >
        <ProgressChart />

        <CategoryChart />
      </Box>


        <Box
          sx={{
            mt: 3,
        }}
      >
       {/* <Achievements />  */}
       
      </Box>



      {/* Active Goals */}

      <Box mt={4}>
        <Typography
          variant="h5"
          mb={2}
        >
          Active Goals
        </Typography>

        {activeGoals.length ===
        0 ? (
          <Card>
            <CardContent>
              <Typography>
                No active goals yet.
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: 2,
            }}
          >
            {activeGoals
              .slice(0, 3)
              .map((goal) => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                />
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}