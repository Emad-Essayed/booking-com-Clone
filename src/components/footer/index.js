import { Box } from "@mui/material";
import React, { useContext } from "react";
import { MediaScreenContext } from "../../context";
import GetApp from "../GetApp";
import Subscribe from "../Subscribe";
import FooterNav from "./FooterNav";
import FooterTopMenu from "./FooterTopMenu";

const Foorter = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <Box
      sx={{
        pt: { xs: 2, lg: 0 },
        bgcolor: (theme) => theme.palette.bgMobile.main,
      }}
    >
      <Box
        sx={{
          bgcolor: { xs: "primary.main", lg: "transparent" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Subscribe />
        {isTabletOrMobile && <GetApp />}
        <FooterTopMenu />
        <FooterNav />
      </Box>
    </Box>
  );
};

export default Foorter;
