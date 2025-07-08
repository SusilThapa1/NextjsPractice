"use client";
import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
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
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handlelogout = () => {
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
    <AppBar sx={{ height: "64px", top: 0 }} position="fixed">
      <Toolbar className="flex justify-between items-center gap-5">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleShowMenu}
            sx={{ display: { sm: "none" }, fontSize: 12 }}
          >
            {showMenu ? (
              <Close color="error" />
            ) : (
              <MenuOutlined sx={{ color: "white" }} />
            )}
          </IconButton>
          <DirectionsCarFilledIcon />
          <h1 className="text-[16px]  md:text-lg">Logo</h1>
        </Box>
        {/* Desktop menu */}
        <Stack direction="row" sx={{ display: { xs: "none", sm: "flex" } }}>
          {navLinks.map((navLink, i) => (
            <Button
              component={Link}
              href={navLink.link}
              key={i}
              variant="text"
              color="#3b5165"
              sx={{
                "&:hover": { color: "#22374b" },
                transition: "0.3s ease",
                fontWeight: 600,
                fontSize: { sm: 13 },
              }}
            >
              {navLink.name}
            </Button>
          ))}
        </Stack>
        {user ? (
          <Stack direction="row">
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            <IconButton onClick={handlelogout}>
              <Logout className="text-white" />
            </IconButton>
          </Stack>
        ) : (
          <Box component="div" className="flex gap-3">
            <Button
              href="/login"
              variant="outlined"
              color="#ffff"
              sx={{ fontSize: { xs: 10, sm: 12, md: 14 } }}
            >
              Login
            </Button>
            <Button
              href="/signup"
              variant="outlined"
              color="#ffff"
              sx={{ fontSize: { xs: 10, sm: 12, md: 14 } }}
            >
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
      <Box
        component="div"
        className={`absolute top-16 left-0 w-1/2 h-screen bg-[#1975d1] px-4 flex  flex-col gap-4 transition-all duration-300 z-20 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((navLink, i) => (
          <Button
            component={Link}
            href={navLink.link}
            key={i}
            onClick={() => setShowMenu(false)}
            sx={{
              color: "#fff",
              justifyContent: "flex-start",
              fontWeight: 600,
              "&:hover": { color: "#cfd8dc", bgcolor: "primary" },
            }}
          >
            {navLink.name}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
};

export default Navbar;
