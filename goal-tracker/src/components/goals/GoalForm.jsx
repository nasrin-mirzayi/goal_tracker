import {
  Box,
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useGoals } from "../../context/GoalContext";
import { useNavigate } from "react-router-dom";

export default function GoalForm() {
  const navigate = useNavigate();

  const { addGoal } = useGoals();

  const [form, setForm] =
    useState({
      title: "",
      category: "Health",
      target: 30,
      type: "daily",
    });

  const handleSubmit = () => {
    addGoal({
      id: crypto.randomUUID(),

      ...form,

      progress: 0,

      status: "active",

      logs: [],

      createdAt: Date.now(),
    });

    navigate("/goals");
  };

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h5"
          mb={3}
        >
          Create Goal
        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
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
            onClick={handleSubmit}
          >
            Create Goal
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}