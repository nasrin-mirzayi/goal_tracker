import {
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";

import { useState } from "react";
import { useGoals } from "../context/GoalContext";
import { useNavigate } from "react-router-dom";

export default function CreateGoal() {
  const { addGoal } = useGoals();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "Health",
    target: 10,
    type: "daily",
  });

  const handleSubmit = () => {
    if (!form.title) return;

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
        <Typography variant="h4" mb={3}>
          Create Goal
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
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
                category: e.target.value,
              })
            }
          >
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Study">Study</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </TextField>

          <TextField
            type="number"
            label="Target"
            value={form.target}
            onChange={(e) =>
              setForm({
                ...form,
                target: Number(e.target.value),
              })
            }
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Create Goal
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}