"use client";

import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormRegister: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const postData = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await postData.json();

      if (result.errors) {
        setError(result.errors);
      } else {
        router.push("/login");
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
          Register
        </Typography>
        {error && (
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align="center"
            color="red"
          >
            {error}
          </Typography>
        )}
        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                required
              />
            </Grid>
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
            Register
          </Button>
        </form>
        <Typography
          variant="h6"
          color="red"
          sx={{
            textAlign: "center",
          }}
        >
          Alredy Have an Account
        </Typography>
        <Button
          onClick={() => router.push("/login")}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default FormRegister;
