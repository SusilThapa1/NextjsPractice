"use client"
import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@mui/material";

export default function AdminDashboard() {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <Paper className="p-6 text-center">
          <Typography variant="h6">Users</Typography>
          <Typography variant="h4">1200</Typography>
        </Paper>

        <Paper className="p-6 text-center">
          <Typography variant="h6">Events</Typography>
          <Typography variant="h4">85</Typography>
        </Paper>

        <Paper className="p-6 text-center">
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$25k</Typography>
        </Paper>
      </div>
    </>
  );
}
