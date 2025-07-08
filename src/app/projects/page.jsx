"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  // const handleclick = () => {
  //   router.push("/projects/1");
  // };
  return (
    <div>
      <Stack spacing={2}>
        <Typography className="!text-xl underline !font-bold text-red-500">
          Project Lists
        </Typography>
        <Button onClick={() => router.push("/projects/1")} variant="contained">
          Project 1
        </Button>
        <Button variant="contained" color="secondary">
          Project 2
        </Button>
        <Button variant="contained" color="error" className="text-green-600">
          Project 3
        </Button>
      </Stack>
    </div>
  );
};

export default page;
