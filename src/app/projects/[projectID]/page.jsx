import { Stack, Typography } from "@mui/material";
import React from "react";

const page = async ({ params }) => {
  console.log(await params);
  const { projectID } = await params;
  return (
    <Stack>
      <Typography variant="h4">Project Details : {projectID}</Typography>
    </Stack>
  );
};

export default page;
