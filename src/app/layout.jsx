"use client";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Navbar />
        <div className=" min-h-[calc(100vh-64px)] flex justify-center items-center   w-full   pt-16">
          {children}
          <ToastContainer position="top-center" stacked />
        </div>
      </body>
    </html>
  );
}
