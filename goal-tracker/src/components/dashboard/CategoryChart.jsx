import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Health",
    value: 35,
  },
  {
    name: "Study",
    value: 25,
  },
  {
    name: "Work",
    value: 20,
  },
  {
    name: "Personal",
    value: 20,
  },
];

export default function CategoryChart() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          mb={2}
        >
          Categories
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={260}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}