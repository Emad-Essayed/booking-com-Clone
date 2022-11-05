import React from "react";
import CarousalTemplate from "./CarousalTemplate";
import explore from "../data/explore.json";

const Explore = () => {
  const prprtyCardTitleSx = { fontSize: "1rem", fontWeight: 700 };

  return (
    <CarousalTemplate
      sectionHeader="Explore Egypt"
      subSectionHeader="These popular destinations have a lot to offer"
      list={explore}
      cardTitleSx={prprtyCardTitleSx}
      slidesToShow="6"
      arrowsTop="50%"
      sectionHeaderSx={{ fontSize: "1.25rem" }}
    />
  );
};

export default Explore;
