import { Typography } from "@mui/material";
import React from "react";

const page = async ({ params }) => {
  const { projectID, reviewID } = await params;
  return (
    <div>
      <Typography>
        Review {reviewID} of Project {projectID}
      </Typography>
    </div>
  );
};

export default page;
