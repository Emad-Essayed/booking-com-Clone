import { AppBar, Container } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MediaScreenContext } from "../../context";
// import { useNavigate } from "react-router-dom";

import Hero from "./Hero";
import Navbar from "./Navbar";
import TopMenu from "./TopMenu";

const Header = ({ showBackBtn }) => {
  const location = useLocation();
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <AppBar /*position="sticky" sx={{ top: "-382px" }}*/ position="static">
      <Container>
        {/* <Toolbar sx={{ display: { xs: "none", lg: "block" } }} /> */}
        <TopMenu showBackBtn={showBackBtn && true} />
        {location.pathname === "/" || !isTabletOrMobile ? <Navbar /> : ""}
        {location.pathname === "/" && <Hero />}
      </Container>
    </AppBar>
  );
};

export default Header;
