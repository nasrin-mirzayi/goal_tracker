import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import {
  useParams,
} from "react-router-dom";

import {
  useGoals,
} from "../context/GoalContext";

export default function GoalDetails() {
  const { id } =
    useParams();

  const {
    goals,
    pauseGoal,
    resumeGoal,
    completeGoal,
    archiveGoal,
  } = useGoals();

  const goal =
    goals.find(
      (g) => g.id === id
    );

  if (!goal) {
    return (
      <Typography>
        Goal not found
      </Typography>
    );
  }

  const progressPercent =
    Math.min(
      100,
      (
        goal.progress /
        goal.target
      ) * 100
    );

  const xpEarned =
    goal.progress * 10;

  const getStatusColor =
    () => {
      switch (
        goal.status
      ) {
        case "active":
          return "primary";

        case "paused":
          return "warning";

        case "completed":
          return "success";

        default:
          return "default";
      }
    };

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        {goal.title}
      </Typography>

      <Card
        sx={{
          mb: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            Overview
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            mb={2}
          >
            <Chip
              label={
                goal.category
              }
            />

            <Chip
              label={
                goal.status
              }
              color={getStatusColor()}
            />
          </Stack>

          <Typography>
            Progress:
            {" "}
            {goal.progress}
            /
            {goal.target}
          </Typography>

          <Box mt={2}>
            <LinearProgress
              variant="determinate"
              value={
                progressPercent
              }
              sx={{
                height: 12,
                borderRadius: 10,
              }}
            />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            mt={3}
            flexWrap="wrap"
          >
            {goal.status ===
              "active" && (
              <>
                <Button
                  color="warning"
                  variant="outlined"
                  onClick={() =>
                    pauseGoal(
                      goal.id
                    )
                  }
                >
                  Pause
                </Button>

                <Button
                  color="success"
                  variant="outlined"
                  onClick={() =>
                    completeGoal(
                      goal.id
                    )
                  }
                >
                  Complete
                </Button>
              </>
            )}

            {goal.status ===
              "paused" && (
              <>
                <Button
                  variant="contained"
                  onClick={() =>
                    resumeGoal(
                      goal.id
                    )
                  }
                >
                  Resume
                </Button>

                <Button
                  color="success"
                  variant="outlined"
                  onClick={() =>
                    completeGoal(
                      goal.id
                    )
                  }
                >
                  Complete
                </Button>
              </>
            )}

            {goal.status ===
              "completed" && (
              <Button
                color="secondary"
                variant="contained"
                onClick={() =>
                  archiveGoal(
                    goal.id
                  )
                }
              >
                Archive
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: 3,
        }}
      >
        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Completion
            </Typography>

            <Typography variant="h4">
              {progressPercent.toFixed(
                0
              )}
              %
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">
              XP Earned
            </Typography>

            <Typography variant="h4">
              {xpEarned}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Remaining
            </Typography>

            <Typography variant="h4">
              {Math.max(
                0,
                goal.target -
                  goal.progress
              )}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Card
        sx={{
          mt: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Goal Analytics
          </Typography>

          <Typography>
            Each progress update
            gives 10 XP.
          </Typography>

          <Typography>
            Current XP from this
            goal:
            {" "}
            {xpEarned}
          </Typography>

          <Typography>
            Remaining steps:
            {" "}
            {Math.max(
              0,
              goal.target -
                goal.progress
            )}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}