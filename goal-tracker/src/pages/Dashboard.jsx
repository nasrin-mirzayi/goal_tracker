import {
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

import {
  useTranslation,
} from "react-i18next";

import { useGoals } from "../context/GoalContext";
import { useUser } from "../context/UserContext";

import StatsCard from "../components/dashboard/StatsCard";
import XPCard from "../components/dashboard/XPCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import CategoryChart from "../components/dashboard/CategoryChart";

import GoalCard from "../components/goals/GoalCard";

export default function Dashboard() {
  const { t } =
    useTranslation();

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

  const totalProgress =
    goals.reduce(
      (sum, goal) =>
        sum +
        (goal.progress || 0),
      0
    );

  const totalTarget =
    goals.reduce(
      (sum, goal) =>
        sum +
        (goal.target || 0),
      0
    );

  const completionRate =
    totalTarget === 0
      ? 0
      : Math.round(
        (totalProgress /
          totalTarget) *
        100
      );

  const activeGoals =
    goals.filter(
      (goal) =>
        goal.status ===
        "active"
    );

  return (<Box> <Box mb={4}> <Typography
    variant="h3"
    fontWeight={700}
  >
    {t(
      "welcomeBack"
    )}
    , {user.name} 👋 
    
    
    </Typography>
 
     <Typography
      variant="h6"
    >
      {(
        "mark small goals today, and change your future 😊"
      )}
    </Typography>


   
  </Box>

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
        title={t(
          "streak"
        )}
        value={
          user.streak
        }
      />

      <StatsCard
        title={t(
          "goals"
        )}
        value={
          goals.length
        }
      />

      <StatsCard
        title={t(
          "completed"
        )}
        value={
          completed
        }
      />

      <StatsCard
        title={t(
          "completionPercentage"
        )}
        value={`${completionRate}%`}
      />
    </Box>

    <Box mt={3}>
      <XPCard
        xp={user.xp}
      />
    </Box>

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

    <Box mt={4}>
      <Typography
        variant="h5"
        mb={2}
      >
        {t(
          "activeGoals"
        )}
      </Typography>

      {activeGoals.length ===
        0 ? (
        <Card>
          <CardContent>
            <Typography>
              {t(
                "noActiveGoals"
              )}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Box
          sx={{
            display:
              "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 2,
          }}
        >
          {activeGoals
            .slice(0, 3)
            .map(
              (
                goal
              ) => (
                <GoalCard
                  key={
                    goal.id
                  }
                  goal={
                    goal
                  }
                />
              )
            )}
        </Box>
      )}
    </Box>
  </Box>


  );
}
