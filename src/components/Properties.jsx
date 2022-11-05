import React, { useContext } from "react";
import properties from "../data/properties.json";
import homes from "../data/homes.json";
import CarousalTemplate from "./CarousalTemplate";
import { MediaScreenContext } from "../context";
import { Box } from "@mui/material";

const prprtyCardMediaSx = {
  borderRadius: "8px",
};
const prprtyCardTitleSx = { fontSize: "1rem", fontWeight: 700 };
const homesCardTitleSx = { fontSize: "0.875rem", fontWeight: 500 };

const Properties = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <Box
      sx={{ bgcolor: { xs: "#FFF", lg: "transparent" }, pt: { xs: 2, lg: 0 } }}
    >
      <CarousalTemplate
        sectionHeader="Browse by property type"
        list={properties}
        cardMediaSx={prprtyCardMediaSx}
        cardTitleSx={prprtyCardTitleSx}
        slidesToShow={isTabletOrMobile ? 3 : 4}
        arrowsTop="50%"
      />
      {!isTabletOrMobile && (
        <CarousalTemplate
          sectionHeader="Homes guests love"
          list={homes}
          cardTitleSx={homesCardTitleSx}
          slidesToShow="3"
          arrowsTop="50%"
        />
      )}
    </Box>
  );
};

export default Properties;
