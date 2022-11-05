import { Box, Typography } from "@mui/material";
import React from "react";
import TestiFooter from "./TestiFooter";

const Testimonials = () => {
  return (
    <Box sx={{ borderBottom: "1px solid #e6e6e6", py: 2 }}>
      <Typography variant="body2">
        The grounds are beautiful, staff are all super friendly and attentive
        and very helpful. The food had lots of choice and was of high quality,
        really liked the live cooking stations.
      </Typography>
      <Box ml={-1.25}>
        <TestiFooter />
      </Box>
    </Box>
  );
};

export default Testimonials;
