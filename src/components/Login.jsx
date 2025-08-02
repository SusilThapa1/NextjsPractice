"use client";
import {
  Email,
  LockOutlineRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Alert,
  Button,
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

const Login = () => {
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
    if (!formData.email || !formData.password) {
      toast.error("Please fill all the fields");
      return;
    }
    router.push("/");
    toast.success("Logged in Successfully!");
  };
  return (
    <div className="px-2 md:px-5 ">
      <Paper className="flex flex-col gap-5 !w-full p-5 md:p-10">
        <h1 className="text-center font-semibold text-lg text-purple-600">
          Sign In
        </h1>
        <p className="text-center font-medium text-purple-600">
          Welcome Back !
        </p>
        <TextField
          color="secondary"
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
          color="secondary"
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
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="!bg-purple-600"
        >
          {" "}
          Login
        </Button>
        <div className="flex justify-between items-center flex-col">
          <Link color="secondary">Forgot password?</Link>
          <Typography>
            Don't have an account?{" "}
            <Link color="secondary" href="/signup">
              Create one.
            </Link>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
