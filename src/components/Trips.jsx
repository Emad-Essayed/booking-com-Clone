import trips from "../data/trips.json";
import React from "react";
import OverlayedCard from "./OvelayedCard";
import { Box, Container } from "@mui/material";

const Trips = () => {
  return (
    <Box sx={{ marginBottom: "32px" }}>
      <Container>
        <OverlayedCard
          sectionHeader="Get inspiration for your next trip"
          positionBottom
          data={trips}
          Cardtransition={{ transform: "scale(1.05)" }}
        />
      </Container>
    </Box>
  );
};

export default Trips;
