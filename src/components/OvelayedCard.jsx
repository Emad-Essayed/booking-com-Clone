import { Grid, Typography } from "@mui/material";
// import trips from "../data/trips.json";
import React from "react";
import CustomCard from "./CustomCard";

const OverlayedCard = ({
  sectionHeader,
  data,
  positionBottom,
  positionTop,
  countriesSection,
  Cardtransition,
}) => {
  const cardContentSx = {
    position: "absolute",
    left: 0,
    right: 0,
    top: positionTop ? 0 : "auto",
    bottom: positionBottom ? 0 : "auto",
    height: "200px",
    color: "#FFF",
    textShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px",
    background: positionTop
      ? "linear-gradient(rgba(0, 27, 65, 0.65) 0px, rgba(0, 27, 65, 0) 100%)"
      : "linear-gradient(-180deg, rgba(0, 0, 0, 0) 12%, rgb(0, 0, 0) 97%)",
    p: positionTop ? "21px 15px 25px !important" : "10px 10px 15px !important",
    display: "flex",
    flexDirection: "Column",
    justifyContent: positionTop ? "flex-start" : "flex-end",
  };

  const tripsCardMediaSx = {
    width: 1,
    height: 1,
    minHeight: "320px",
    position: "relative",
  };
  const tripsCardTitleSx = {
    fontSize: countriesSection ? "1.78rem" : "1.25rem",
    fontWeight: 700,
    marginBottom: "5px",
    color: "#FFF",
  };

  const tripsCardSubtitleSx = sectionHeader
    ? { color: "#FFF", fontSize: ".875rem" }
    : { color: "#dfdfdf", fontSize: ".875rem" };

  const gridRows = (key) => {
    if (sectionHeader) {
      return key < 3 ? 4 : 6;
    } else {
      return key < 2 ? 6 : 4;
    }
  };

  return (
    <>
      {sectionHeader && (
        <Typography variant="h5" component="h2" fontWeight={700} mb={2}>
          {sectionHeader}
        </Typography>
      )}

      <Grid container rowSpacing={1.875}>
        {data.map((item, key) => (
          <Grid key={key} item xs={12} md={gridRows(key)}>
            <CustomCard
              sectionHeader={sectionHeader}
              item={item}
              cardContentSx={cardContentSx}
              cardMediaSx={tripsCardMediaSx}
              cardTitleSx={tripsCardTitleSx}
              cardSubtitleSx={tripsCardSubtitleSx}
              Cardtransition={Cardtransition}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OverlayedCard;
