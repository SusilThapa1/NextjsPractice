"use client";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import Link from "next/link";
import { Close, Logout, MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(true);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  const handleLogout = () => {
    setUser(false);
    router.push("/login");
    toast.success("Logged out successfully");
  };

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <AppBar position="fixed" className="!bg-blue-600 !h-16 !top-0">
      <Toolbar className="flex justify-between items-center px-4 md:px-8">
        {/* Logo + Menu Button */}
        <Box className="flex items-center gap-2 cursor-pointer">
          <IconButton
            onClick={handleShowMenu}
            className="md:!hidden block"
            size="small"
          >
            {showMenu ? (
              <Close className="text-red-500" />
            ) : (
              <MenuOutlined className="text-white" />
            )}
          </IconButton>

          <Box
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <DirectionsCarFilledIcon className="text-white" />
            <h1 className="text-sm md:text-lg font-semibold text-white">
              Logo
            </h1>
          </Box>
        </Box>

        {/* Desktop Menu */}
        <div className="!hidden md:!flex space-x-4">
          {navLinks.map((navLink, i) => (
            <Button
              key={i}
              component={Link}
              href={navLink.link}
              className="!text-white !font-semibold hover:!text-gray-200 transition duration-300 text-sm"
            >
              {navLink.name}
            </Button>
          ))}
        </div>

        {/* User / Auth Buttons */}
        {user ? (
          <Stack direction="row" className="items-center gap-2">
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            <IconButton onClick={handleLogout}>
              <Logout className="text-white" />
            </IconButton>
          </Stack>
        ) : (
          <div className="flex gap-3">
            <Button
              href="/login"
              variant="outlined"
              className="!text-white border border-white text-xs sm:text-sm"
            >
              Login
            </Button>
            <Button
              href="/signup"
              variant="outlined"
              className="!text-white border border-white text-xs sm:text-sm"
            >
              Register
            </Button>
          </div>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      <Box
        component="div"
        className={`absolute top-16 left-0 w-1/2 h-screen bg-blue-700 px-4 flex flex-col gap-4 transition-transform duration-300 z-20 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((navLink, i) => (
          <Button
            key={i}
            component={Link}
            href={navLink.link}
            onClick={() => setShowMenu(false)}
            className="!text-white justify-start font-semibold hover:!text-gray-200"
          >
            {navLink.name}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
};

export default Navbar;
