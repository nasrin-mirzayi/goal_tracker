import { Typography, Box, Card, CardContent, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGoals } from "../context/GoalContext";
import { useUser } from "../context/UserContext";

import StatsCard from "../components/dashboard/StatsCard";
import XPCard from "../components/dashboard/XPCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import GoalCard from "../components/goals/GoalCard";

export default function Dashboard() {
  const { t } = useTranslation();
  const { goals } = useGoals();
  const { user } = useUser();

  const isMobile = useMediaQuery("(max-width:900px)");

  const completed = goals.filter((g) => g.status === "completed").length;

  const totalProgress = goals.reduce((sum, g) => sum + (g.progress || 0), 0);
  const totalTarget = goals.reduce((sum, g) => sum + (g.target || 0), 0);

  const completionRate =
    totalTarget === 0
      ? 0
      : Math.round((totalProgress / totalTarget) * 100);

  const activeGoals = goals.filter((g) => g.status === "active");

  return (
    <Box sx={{ px: isMobile ? 1 : 0 }}>
      
      <Box mb={4}>
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight={700}>
          {t("welcomeBack")}, {user.name} 👋
        </Typography>

        <Typography variant={isMobile ? "body1" : "h6"}>
         {t( "my text")}
        </Typography>
      </Box>

    
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: isMobile ? 2 : 3,
        }}
      >
        <StatsCard title="XP" value={user.xp} />
        <StatsCard title={t("streak")} value={user.streak} />
        <StatsCard title={t("goals")} value={goals.length} />
        <StatsCard title={t("completed")} value={completed} />
        <StatsCard
          title={t("completionPercentage")}
          value={`${completionRate}%`}
        />
      </Box>

    
      <Box mt={3}>
        <XPCard xp={user.xp} />
      </Box>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
          gap: 3,
        }}
      >
        <ProgressChart />
        <CategoryChart />
      </Box>

      <Box mt={4}>
        <Typography variant="h5" mb={2}>
          {t("activeGoals")}
        </Typography>

        {activeGoals.length === 0 ? (
          <Card>
            <CardContent>
              <Typography>{t("noActiveGoals")}</Typography>
            </CardContent>
          </Card>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 2,
            }}
          >
            {activeGoals.slice(0, 3).map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}