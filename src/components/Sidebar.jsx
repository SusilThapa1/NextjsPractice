"use client";

import {
  BarChart,
  Comment,
  Dashboard,
  Insights,
  Person,
  Settings,
} from "@mui/icons-material";

import { Box, Button, Divider, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const sideMenu = [
    { name: "Dashboard", icon: <Dashboard />, link: "/admin/dashboard" },
    { name: "Profile", icon: <Person />, link: "/admin/profile" },
    { name: "Insights", icon: <Insights />, link: "/admin/insight" },
    { name: "Reports", icon: <BarChart />, link: "/admin/report" },
    { name: "Comments", icon: <Comment />, link: "/admin/comment" },
    { name: "Settings", icon: <Settings />, link: "/admin/setting" },
  ];

  return (
    <div className="relative flex flex-col items-center gap-4 p-4 bg-white  ">
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
        sx={{
          width: { xs: 60, sm: 80, md: 100 },
          height: { xs: 60, sm: 80, md: 100 },
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Typography variant="h6" color="primary">
        Susil Thapa
      </Typography>
      <Divider flexItem />

      <div className="flex flex-col items-start gap-2 w-full">
        {sideMenu.map((menu, i) => {
          const isActive = pathname === menu.link;
          return (
            <Button
              key={i}
              href={menu.link}
              startIcon={menu.icon}
              fullWidth
              className={` normal-case ${
                isActive ? "!bg-blue-500 !text-white  " : " "
              }`}
            >
              {menu.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
