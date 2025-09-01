"use client"
import React from "react";
import { Paper, Avatar, Typography, Button } from "@mui/material";

export default function UserProfile() {
  return (
    // <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <Paper className="w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-md">
        {/* User Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Avatar sx={{ width: 80, height: 80 }}>ST</Avatar>
          <div className="flex-1">
            <Typography variant="h5">Susil Thapa</Typography>
            <Typography variant="body1" color="text.secondary">
              susil@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary" className="mt-1">
              Joined: Jan 1, 2023
            </Typography>
          </div>
          <Button variant="contained" color="primary" className="mt-4 sm:mt-0">
            Edit Profile
          </Button>
        </div>

        {/* Profile Details */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Paper className="p-4">
            <Typography variant="subtitle2" color="text.secondary">
              Phone
            </Typography>
            <Typography variant="body1">+977 9800000000</Typography>
          </Paper>

          <Paper className="p-4">
            <Typography variant="subtitle2" color="text.secondary">
              Address
            </Typography>
            <Typography variant="body1">Duwakot, Bhaktapur, Nepal</Typography>
          </Paper>

          <Paper className="p-4">
            <Typography variant="subtitle2" color="text.secondary">
              Role
            </Typography>
            <Typography variant="body1">Admin</Typography>
          </Paper>

          <Paper className="p-4">
            <Typography variant="subtitle2" color="text.secondary">
              Status
            </Typography>
            <Typography variant="body1">Active</Typography>
          </Paper>
        </div>
      </Paper>
    // </div>
  );
}
