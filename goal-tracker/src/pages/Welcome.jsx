import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import {
  TrendingUp,
  EmojiEvents,
  LocalFireDepartment,
  Flag,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { useGoals } from "../context/GoalContext";
import { useUser } from "../context/UserContext";

import GoalCard from "../components/goals/GoalCard";

const chartData = [
  { day: "Mon", value: 15 },
  { day: "Tue", value: 30 },
  { day: "Wed", value: 22 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 45 },
  { day: "Sat", value: 70 },
  { day: "Sun", value: 90 },
];

export default function Dashboard() {
  const {
    goals,
    addProgress,
    deleteGoal,
  } = useGoals();

  const { user } = useUser();

  const activeGoals =
    goals.filter(
      (g) =>
        g.status === "active"
    );

  const completedGoals =
    goals.filter(
      (g) =>
        g.status ===
        "completed"
    );

  const overallProgress =
    goals.length === 0
      ? 0
      : Math.round(
        goals.reduce(
          (acc, goal) =>
            acc +
            (goal.progress /
              goal.target) *
            100,
          0
        ) / goals.length
      );

  return (
    <Box>


      <Card
        sx={{
          mb: 4,
          background:
            "linear-gradient(135deg,#6366f1,#8b5cf6)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Welcome back,
            {" "}
            {user?.name}
            👋
          </Typography>

          <Typography
            sx={{
              opacity: .9,
              mt: 1,
            }}
          >
            Keep building
            momentum today.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
          >
            <Button
              component={Link}
              to="/goals/new"
              variant="contained"
              color="inherit"
            >
              New Goal
            </Button>

            <Button
              component={Link}
              to="/goals"
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor:
                  "#fff",
              }}
            >
              View Goals
            </Button>
          </Stack>
        </CardContent>
      </Card>



      <Grid
        container
        spacing={3}
        mb={4}
      >
        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    color="text.secondary"
                  >
                    XP
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                  >
                    {user?.xp || 0}
                  </Typography>
                </Box>

                <EmojiEvents
                  color="warning"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    color="text.secondary"
                  >
                    Streak
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                  >
                    5
                  </Typography>
                </Box>

                <LocalFireDepartment
                  color="error"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    color="text.secondary"
                  >
                    Active Goals
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                  >
                    {
                      activeGoals.length
                    }
                  </Typography>
                </Box>

                <Flag
                  color="primary"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    color="text.secondary"
                  >
                    Completed
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                  >
                    {
                      completedGoals.length
                    }
                  </Typography>
                </Box>

                <TrendingUp
                  color="success"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Card
        sx={{
          mb: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mb={3}
          >
            Weekly Progress
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={280}
          >
            <AreaChart
              data={chartData}
            >
              <XAxis
                dataKey="day"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={
                  0.2
                }
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>



      <Card
        sx={{
          mb: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
          >
            Overall Completion
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            color="primary"
          >
            {overallProgress}%
          </Typography>
        </CardContent>
      </Card>


      <Box mb={2}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Active Goals
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
      >
        {activeGoals.map(
          (goal) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={
                goal.id
              }
            >
              <GoalCard
                goal={goal}
                onProgress={
                  addProgress
                }
                onDelete={
                  deleteGoal
                }
              />
            </Grid>
          )
        )}
      </Grid>



      {completedGoals.length >
        0 && (
          <>
            <Typography
              variant="h5"
              fontWeight={700}
              mt={5}
              mb={2}
            >
              Completed Goals
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
            >
              {completedGoals.map(
                (goal) => (
                  <Chip
                    key={goal.id}
                    label={
                      goal.title
                    }
                    color="success"
                  />
                )
              )}
            </Stack>
          </>
        )}
    </Box>
  );
}