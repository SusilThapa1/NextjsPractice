"use client";
import {
  AccountCircle,
  Email,
  LockOutlineRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Alert,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const handlePassToggle = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    if (!formData.username || !formData.email || !formData.password) {
      toast.error("Please fill all the fields");
      return;
    }
    router.push("/");
    toast.success("Registered Successfully!");
  };
  return (
    <Container className="px-2 md:px-5 ">
      <Paper elevation={10} className="flex flex-col gap-5 w-full p-5 md:p-10">
        <h1 className="text-center font-semibold text-lg text-blue-500">
          Sign Up
        </h1>
        <TextField
          label="Name"
          name="username"
          value={formData.username}
          placeholder="Your name"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your email"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Password"
          name="password"
          type={showPass ? "text" : "password"}
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlineRounded />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePassToggle}
                    title={showPass ? "hide password" : "show password"}
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button onClick={handleSubmit} type="submit" variant="contained">
          {" "}
          Login
        </Button>
        <div className="flex justify-between items-center flex-col">
          <Button>Forgot password?</Button>
          <Typography>
            Already have an account? <Link href="/login">Sign in</Link>
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
