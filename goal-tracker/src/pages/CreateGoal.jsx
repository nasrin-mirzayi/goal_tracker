import {
Typography,
TextField,
Button,
Stack,
MenuItem,
Card,
CardContent,
} from "@mui/material";

import {
useState,
} from "react";

import {
useTranslation,
} from "react-i18next";

import {
useGoals,
} from "../context/GoalContext";

import {
useNavigate,
} from "react-router-dom";

export default function CreateGoal() {
const { t } =
useTranslation();

const { addGoal } =
useGoals();

const navigate =
useNavigate();

const [form, setForm] =
useState({
title: "",
category: "Health",
target: 10,
type: "daily",
});

const handleSubmit =
() => {
if (!form.title)
return;

  addGoal({
    id: crypto.randomUUID(),
    ...form,
    progress: 0,
    status: "active",
    logs: [],
    createdAt:
      Date.now(),
  });

  navigate("/goals");
};


return ( <Card> <CardContent> <Typography
       variant="h4"
       mb={3}
     >
{t("createGoal")} </Typography>


    <Stack spacing={2}>
      <TextField
        label={t("title")}
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title:
              e.target
                .value,
          })
        }
      />

      <TextField
        select
        label={t("category")}
        value={
          form.category
        }
        onChange={(e) =>
          setForm({
            ...form,
            category:
              e.target
                .value,
          })
        }
      >
        <MenuItem value="Health">
          {t("health")}
        </MenuItem>

        <MenuItem value="Study">
          {t("study")}
        </MenuItem>

        <MenuItem value="Work">
          {t("work")}
        </MenuItem>

        <MenuItem value="Personal">
          {t("personal")}
        </MenuItem>
      </TextField>

      <TextField
        type="number"
        label={t("target")}
        value={
          form.target
        }
        onChange={(e) =>
          setForm({
            ...form,
            target:
              Number(
                e.target
                  .value
              ),
          })
        }
      />

      <Button
        variant="contained"
        onClick={
          handleSubmit
        }
      >
        {t("createGoal")}
      </Button>
    </Stack>
  </CardContent>
</Card>
);
}
