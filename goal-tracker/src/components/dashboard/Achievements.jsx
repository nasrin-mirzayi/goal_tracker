import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

import {
  useAchievements,
} from "../../context/AchievementContext";

export default function Achievements() {
  const {
    achievements,
  } =
    useAchievements();

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          mb={2}
        >
          Achievements
        </Typography>

        <Box
          sx={{
            display:
              "flex",
            flexWrap:
              "wrap",
            gap: 1,
          }}
        >
          {achievements.map(
            (
              item,
              index
            ) => (
              <Chip
                key={
                  index
                }
                label={
                  item
                }
                color="primary"
              />
            )
          )}
        </Box>
      </CardContent>
    </Card>
  );
}