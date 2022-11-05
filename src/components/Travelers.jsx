import { Typography, Stack, Box, Container } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import travelers from "../data/travelers.json";
import countries from "../data/countries.json";
import OverlayedCard from "./OvelayedCard";
import { useContext } from "react";
import { MediaScreenContext } from "../context";

const Travelers = () => {
  const sectionHeader = "Connect with other travelers";

  const tripsCardMediaSx = {
    width: 1,
    height: 1,
    position: "relative",
  };
  const tripsCardTitleSx = {
    fontSize: "1rem",
    fontWeight: 700,
    // marginBottom: "5px",
  };

  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <Box
      sx={{
        // paddingBottom: "40px",
        bgcolor: { xs: "#FFF", lg: "transparent" },
        mb: (theme) => theme.sectionsSpacing(theme),
        pt: { xs: 2, lg: 0 },
      }}
    >
      <Container>
        <Typography
          component="h2"
          fontSize={{ xs: 16, lg: 24 }}
          fontWeight={700}
          mb={2}
        >
          {sectionHeader}
        </Typography>

        <Stack
          direction="row"
          sx={{ marginBottom: { lg: 4 }, width: { md: "75%" } }}
        >
          {travelers.map((item, key) => (
            <CustomCard
              key={key}
              sectionHeader={sectionHeader}
              item={item}
              cardMediaSx={tripsCardMediaSx}
              cardTitleSx={tripsCardTitleSx}
            />
          ))}
        </Stack>
        {!isTabletOrMobile && (
          <OverlayedCard positionTop data={countries} countriesSection />
        )}
      </Container>
    </Box>
  );
};

export default Travelers;
