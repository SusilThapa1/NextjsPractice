"use client";

import Sidebar from "@/components/Sidebar";
import { Divider } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <div className="flex w-full h-[calc(100vh-64px)]">
      {/* Sidebar (Fixed width) */}
      <div className="w-50 bg-white  h-full shadow-lg">
        <Sidebar />
      </div>

      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        className="bg-gray-300 border-2 border-amber-50 w-[1px]"
      />

      {/* Main content */}
      <div className="  flex justify-center flex-1 items-center bg-gray-50 p-6">
        {children}
      </div>
    </div>
  );
}
