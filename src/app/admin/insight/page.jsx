"use client"
import React from "react";
import { Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for chart
const data = [
  { month: "Jan", users: 400, revenue: 2400 },
  { month: "Feb", users: 300, revenue: 2210 },
  { month: "Mar", users: 500, revenue: 2290 },
  { month: "Apr", users: 700, revenue: 2000 },
  { month: "May", users: 600, revenue: 2780 },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full">
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Insights
      </Typography>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Paper className="p-6 text-center">
          <Typography variant="h6">Active Users</Typography>
          <Typography variant="h4">1,250</Typography>
        </Paper>
        <Paper className="p-6 text-center">
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$45k</Typography>
        </Paper>
        <Paper className="p-6 text-center">
          <Typography variant="h6">New Signups</Typography>
          <Typography variant="h4">320</Typography>
        </Paper>
      </div>

      {/* Chart Section */}
      <Paper className="p-6 mb-6">
        <Typography variant="h6" gutterBottom>
          Monthly Growth
        </Typography>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Paper>

      {/* Recent Activity */}
      <Paper className="p-6">
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <ul className="space-y-2">
          <li className="text-gray-700">✅ User <b>Sarah</b> signed up</li>
          <li className="text-gray-700">💰 Payment of <b>$120</b> received</li>
          <li className="text-gray-700">📈 Revenue increased by <b>15%</b> this month</li>
          <li className="text-gray-700">👤 Admin <b>John</b> updated event details</li>
        </ul>
      </Paper>
    </div>
  );
}
