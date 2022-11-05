import { Box } from "@mui/material";
import React, { useContext } from "react";
import { LclStoSearchContext } from "../context";
import CarousalTemplate from "./CarousalTemplate";

const RecentSearch = () => {
  const { lclStorageSearch } = useContext(LclStoSearchContext);

  if (lclStorageSearch.length === 0) return null;

  return (
    <Box sx={{ bgcolor: "#FFF", py: { xs: 2, lg: 0 }, mb: 2 }}>
      <CarousalTemplate
        sectionHeader="Your recent searches"
        list={lclStorageSearch}
        slidesToShow="3"
        arrowsTop="50%"
        sectionHeaderSx={{ fontSize: "1.25rem" }}
        isRecentSearch
      />
    </Box>
  );
};

export default RecentSearch;
