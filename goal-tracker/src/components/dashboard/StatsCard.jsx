import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function StatsCard({
  title,
  value,
}) {
  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight={700}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}