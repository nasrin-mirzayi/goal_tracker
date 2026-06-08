import {
Box,
Typography,
Card,
CardContent,
} from "@mui/material";

import {
useTranslation,
} from "react-i18next";

import {
useUser,
} from "../context/UserContext";

import {
useGoals,
} from "../context/GoalContext";

import {
useAchievements,
} from "../context/AchievementContext";

export default function Profile() {
const { t } =
useTranslation();

const { user } =
useUser();

const { goals } =
useGoals();

const {
achievements,
} =
useAchievements();

const completed =
goals.filter(
(g) =>
g.status ===
"completed"
).length;

return ( <Box> <Typography
     variant="h4"
     mb={3}
   >
{t("profile")} </Typography>


  <Card>
    <CardContent>
      <Typography>
        {t("name")}:{" "}
        {user.name}
      </Typography>

      <Typography>
        {t("xp")}:{" "}
        {user.xp}
      </Typography>

      <Typography>
        {t("level")}:{" "}
        {Math.floor(
          user.xp / 100
        ) + 1}
      </Typography>

      <Typography>
        {t("streak")}:{" "}
        {user.streak}
      </Typography>

      <Typography>
        {t("totalGoals")}:{" "}
        {goals.length}
      </Typography>

      <Typography>
        {t("completed")}:{" "}
        {completed}
      </Typography>

      <Typography>
        {t(
          "achievements"
        )}:{" "}
        {
          achievements.length
        }
      </Typography>
    </CardContent>
  </Card>
</Box>


);
}
