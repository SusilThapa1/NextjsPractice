"use client";
"use client";
import React, { useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "",
    darkMode: false,
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved! 🎉");
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
        {/* Profile */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">Profile</h2>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">Preferences</h2>
          <div className="flex items-center justify-between">
            <label className="text-sm">Dark Mode</label>
            <input
              type="checkbox"
              name="darkMode"
              checked={form.darkMode}
              onChange={handleChange}
              className="h-4 w-4"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm">Enable Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="h-4 w-4"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
