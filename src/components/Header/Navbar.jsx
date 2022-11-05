import { Button, Stack, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import {
  StaysIcon,
  FlightsIcon,
  CarRentalIcon,
  AttractionsIcon,
  AirportTaxiIcon,
} from "../IconsRep";

const MainMenuBtns = styled(Button)({
  fontFamily: "inherit",
  fontSize: "14px",
  fontWeight: "500",
  backgroundColor: "transparent",
  borderRadius: "25px",
  padding: "10px 16px",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  color: "#FFF",

  "&:hover": {
    backgroundColor: "#1a4a8e",
  },
});

const Navbar = () => {
  return (
    <Toolbar
      component="nav"
      sx={{
        overflow: "auto",
        pb: "3px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <MainMenuBtns
          selected={true}
          variant="outlined"
          component={Link}
          to="/"
          startIcon={<StaysIcon />}
          size="large"
          sx={{
            borderColor: " #fff",
            backgroundColor: "#1a4a8e",
            "&:hover": {
              borderColor: " #fff",
            },
          }}
        >
          Stays
        </MainMenuBtns>
        <MainMenuBtns
          variant="text"
          startIcon={<FlightsIcon />}
          component={Link}
          to="/"
          size="large"
        >
          Flights
        </MainMenuBtns>
        <MainMenuBtns
          variant="text"
          startIcon={<CarRentalIcon />}
          component={Link}
          to="/"
          size="large"
        >
          Car rentals
        </MainMenuBtns>
        <MainMenuBtns
          variant="text"
          startIcon={<AttractionsIcon />}
          component={Link}
          to="/"
          size="large"
        >
          Attractions
        </MainMenuBtns>
        <MainMenuBtns
          variant="text"
          startIcon={<AirportTaxiIcon />}
          component={Link}
          to="/"
          size="large"
        >
          Airport taxis
        </MainMenuBtns>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
