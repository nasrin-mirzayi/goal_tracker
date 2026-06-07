import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
  LinearProgress,
  Stack,
} from "@mui/material";

import {
  Link,
} from "react-router-dom";

import {
  useGoals,
} from "../../context/GoalContext";

import {
  useUser,
} from "../../context/UserContext";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function GoalCard({
  goal,
}) {
  const {
    addProgress,
    pauseGoal,
    resumeGoal,
    completeGoal,
    archiveGoal,
    deleteGoal,
  } = useGoals();

  const {
  rewardProgress,
} = useUser();

  const progress =
    Math.min(
      100,
      (
        (goal.progress || 0) /
        (goal.target || 1)
      ) * 100
    );

    const handleProgress =
  () => {
    addProgress(
      goal.id
    );

    rewardProgress();
  };
  
  const getStatusChip =
    () => {
      switch (
        goal.status
      ) {
        case "active":
          return (
            <Chip
              label="Active"
              color="primary"
              size="small"
            />
          );

        case "paused":
          return (
            <Chip
              label="Paused"
              color="warning"
              size="small"
            />
          );

        case "completed":
          return (
            <Chip
              label="Completed"
              color="success"
              size="small"
            />
          );

        case "archived":
          return (
            <Chip
              label="Archived"
              color="default"
              size="small"
            />
          );

        default:
          return null;
      }
    };

  return (
    <Card
      sx={{
        opacity:
          goal.status ===
          "archived"
            ? 0.6
            : 1,

        transition:
          "0.3s",

        "&:hover": {
          transform:
            "translateY(-3px)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
          >
            {goal.title}
          </Typography>

          <Chip
            label={
              goal.category
            }
            size="small"
          />
        </Box>

        <Box mb={2}>
          {getStatusChip()}
        </Box>

        <Typography
          color="text.secondary"
          mb={2}
        >
          Progress:
          {" "}
          {goal.progress}
          /
          {goal.target}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 10,
            mb: 2,
          }}
        />
        <Stack
         direction="row"
         spacing={1}
         sx={{
         flexWrap: "wrap",
         }}
        >
          {goal.status ===
            "active" && (
            <>
              <Button
                size="small"
                variant="contained"
                onClick={
                  handleProgress
                }
              >
                + Progress
              </Button>

              <Button
                size="small"
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
                size="small"
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
                size="small"
                color="primary"
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
                size="small"
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
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() =>
                archiveGoal(
                  goal.id
                )
              }
            >
              Archive
            </Button>
          )}

          <Button
           size="small"
           variant="outlined"
           component={Link}
           to={`/goals/edit/${goal.id}`}
            >
           Edit
          </Button>


          <Button
            size="small"
            variant="outlined"
            component={Link}
            to={`/goals/${goal.id}`}
          >
            Details
          </Button>

          <IconButton
  color="error"
  onClick={() => {
    if (
      window.confirm(
        "Delete this goal?"
      )
    ) {
      deleteGoal(goal.id);
    }
  }}
>
  <DeleteIcon />
</IconButton>


        </Stack>
      </CardContent>
    </Card>
  );
}