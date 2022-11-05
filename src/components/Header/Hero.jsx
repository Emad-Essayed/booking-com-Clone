import { Box, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Toolbar
      component={Box}
      sx={{ display: { xs: "none", lg: "block" }, pt: "50px", pb: "102px" }}
    >
      <Typography
        variant="h4"
        component="h1"
        color="inherit"
        fontWeight={700}
        fontSize={48}
        sx={{
          fontFamily:
            "Avenir Next,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
        }}
      >
        A lifetime of discounts? It's Genuis.
      </Typography>
      <Typography
        variant="body1"
        color="inherit"
        mb={3}
        fontSize={24}
        sx={{ fontFamily: "unset", maxWidth: "80%" }}
      >
        Get rewarded for your travels - unclock instant of saving 10% or more
        with a free Booking.com account
      </Typography>
      <Button
        variant="contained"
        size="large"
        fontWeight={600}
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "inherit",
          py: "11px",
        }}
      >
        Sign in / Register
      </Button>
    </Toolbar>
  );
};

export default Hero;
