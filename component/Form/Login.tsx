"use client";

import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { useState } from "react";

const FormLoginPage: React.FC = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const fetshData = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await fetshData.json();

      if (result.errors) {
        setError(result.errors);
        console.log(error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ padding: 3, marginTop: 30 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          color="blue"
        >
          Login
        </Typography>
        {error && (
          <Typography variant="h5" component="h2" gutterBottom align="center">
            {error}
          </Typography>
        )}
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Login
          </Button>
        </form>
        <Typography
          variant="h6"
          color="red"
          sx={{
            textAlign: "center",
          }}
        >
          Don't Have An Account ?
        </Typography>
        <Button
          onClick={() => router.push("/register")}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default FormLoginPage;
