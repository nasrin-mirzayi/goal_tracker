import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

export default function XPCard({
  xp,
}) {
  const level =
    Math.floor(
      xp / 100
    ) + 1;

  const progress =
    xp % 100;

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Level {level}
        </Typography>

        <Typography
          color="text.secondary"
        >
          {xp} XP
        </Typography>

        <Box mt={2}>
          <LinearProgress
            variant="determinate"
            value={progress}
          />
        </Box>

        <Typography
          mt={1}
          variant="body2"
        >
          {100 -
            progress}
          XP until next
          level
        </Typography>
      </CardContent>
    </Card>
  );
}