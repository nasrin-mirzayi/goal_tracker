import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 4 },
  { day: "Wed", value: 5 },
  { day: "Thu", value: 3 },
  { day: "Fri", value: 7 },
  { day: "Sat", value: 6 },
  { day: "Sun", value: 8 },
];

export default function ProgressChart() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          mb={2}
        >
          Weekly Activity
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={260}
        >
          <AreaChart
            data={data}
          >
            <XAxis
              dataKey="day"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#7C4DFF"
              fill="#7C4DFF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}