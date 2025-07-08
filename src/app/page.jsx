"use client";
import { GitHub, Language, LinkedIn } from "@mui/icons-material";
import { Box, Button, Link, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      height="100vh"
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        px: { xs: 2, sm: 10, md: 20 },
        gap: 2,
        height: "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "start" },
          flexDirection: "column",
          gap: 4,
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: 30, sm: 35, md: 45 } }}>
          Hello, Everyone
        </Typography>
        <Typography variant="h5" textAlign="center">
          I'm Susil Thapa
        </Typography>
        <Typography variant="body1" textAlign={"justify"}>
          I’m a self-driven web dev currently sharpening my skills in the MERN
          stack (MongoDB, Express.js, React, Node.js). While I haven’t worked in
          the industry yet or done any internships, I’ve been consistently
          building personal projects to master full-stack development from the
          ground up.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ color: "gray" }}>
          <Link
            href="https://github.com/SusilThapa1"
            target="_blank"
            sx={{
              color: "gray",
              "&:hover": { color: "#000", transition: "0.s ease" },
            }}
          >
            <GitHub />
          </Link>
          <Link
            href="https://linkedin.com/in/susilthapa1"
            target="_blank"
            sx={{
              color: "gray",
              "&:hover": { color: "#0a64db", transition: "0.s ease" },
            }}
          >
            <LinkedIn />
          </Link>
          <Link
            href="https://thapasusil.com.np"
            target="_blank"
            sx={{
              color: "gray",
              "&:hover": { color: "#2b90bb", transition: "0.s ease" },
            }}
          >
            <Language />
          </Link>
        </Stack>
        <Button variant="contained" href="/admin/dashboard">
          Go to Dashboard
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          sx={{
            width: { xs: 120, sm: 200, md: 220 },
            height: { xs: 120, sm: 200, md: 220 },
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
