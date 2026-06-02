import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  useGoals,
} from "../context/GoalContext";

export default function EditGoal() {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const {
    goals,
    updateGoal,
  } = useGoals();

  const goal =
    goals.find(
      (g) => g.id === id
    );

  const [form, setForm] =
    useState({
      title:
        goal?.title || "",
      category:
        goal?.category ||
        "Health",
      target:
        goal?.target || 1,
    });

  if (!goal) {
    return (
      <Typography>
        Goal not found
      </Typography>
    );
  }

  const handleSave =
    () => {
      updateGoal(
        goal.id,
        form
      );

      navigate(
        `/goals/${goal.id}`
      );
    };

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        Edit Goal
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection:
            "column",
          gap: 2,
          maxWidth: 500,
        }}
      >
        <TextField
          label="Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title:
                e.target.value,
            })
          }
        />

        <TextField
          select
          label="Category"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
        >
          <MenuItem value="Health">
            Health
          </MenuItem>

          <MenuItem value="Study">
            Study
          </MenuItem>

          <MenuItem value="Work">
            Work
          </MenuItem>

          <MenuItem value="Personal">
            Personal
          </MenuItem>
        </TextField>

        <TextField
          type="number"
          label="Target"
          value={form.target}
          onChange={(e) =>
            setForm({
              ...form,
              target:
                Number(
                  e.target.value
                ),
            })
          }
        />

        <Button
          variant="contained"
          onClick={
            handleSave
          }
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}