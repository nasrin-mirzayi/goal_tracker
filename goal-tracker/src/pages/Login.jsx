import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useUser,
} from "../context/UserContext";

export default function Login() {
  const [name, setName] =
    useState("");

  const navigate =
    useNavigate();

  const { login } =
    useUser();

  const handleLogin =
    () => {
      if (!name.trim())
        return;

      login(name);

      navigate(
        "/dashboard"
      );
    };

  return (
    <Box
      sx={{
        minHeight:
          "100vh",

        display: "flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        background:
          "linear-gradient(135deg,#7c4dff,#ff4081)",
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth:
            "90%",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            mb={3}
          >
            Goal Tracker
          </Typography>

          <Typography
            color="text.secondary"
            mb={3}
          >
            Enter your
            name to
            continue
          </Typography>

          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(
              e
            ) =>
              setName(
                e.target
                  .value
              )
            }
            sx={{
              mb: 2,
            }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={
              handleLogin
            }
          >
            Enter App
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}