import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PriceMatchIcon = () => {
  return (
    <Box
      width={16}
      height={16}
      sx={{
        background:
          "url(https://cf.bstatic.com/static/img/bpg/bpg_logo_retina/b4785e81dfbdb3907f75887373d5920d3dc3b245.png) center center no-repeat transparent",
        backgroundSize: "16px 16px",
      }}
    />
  );
};

const TopNavbar = ({ btnText, alignRight }) => {
  return (
    <Box>
      <Button
        variant="text"
        sx={{
          color: btnText === "We Price Match" ? "#000" : "primary.light",
          borderRadius: 0.5,
          p: 1,
          pr: alignRight ? 0 : 1,
          justifyContent: alignRight ? "flex-end" : "center",
          fontWeight: 500,
          "&:hover": {
            color: "#000",
            bgcolor: "transparent",
          },
        }}
        startIcon={btnText === "We Price Match" ? <PriceMatchIcon /> : null}
        fullWidth
      >
        {btnText}
      </Button>
    </Box>
  );
};

export default TopNavbar;
