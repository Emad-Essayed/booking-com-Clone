import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { InputsSearch, MediaScreenContext } from "../../../context";
import Calendar from "./Calendar";
import DateRangeComp from "./DateRangeComp";

const NightsStay = () => {
  const { dates } = useContext(InputsSearch);

  return (
    <Typography variant="body2" component="div" fontSize="0.75rem">
      {`
        ${Math.ceil(
          Math.abs(dates.endDate - dates.startDate) / (1000 * 60 * 60 * 24)
        )}-night stay`}
    </Typography>
  );
};

const DateSearch = ({ isListPage }) => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  const [dateRangeAnchorEl, setDateRangeAnchorEl] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDateRange = dateRangeAnchorEl ? true : false;

  const handleOpenClick = (e) => {
    isTabletOrMobile
      ? setIsDrawerOpen(true)
      : setDateRangeAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setDateRangeAnchorEl(null);
  };

  return (
    <Stack height={1}>
      <Stack
        direction={{ xs: "row", lg: isListPage ? "column" : "row" }}
        height={1}
        bgcolor="yellowborder.main"
        sx={{
          gap: { xs: 0.6, lg: isListPage ? 0.5 : 0 },
          cursor: { xs: "default", lg: "pointer" },
        }}
        id="dateRange-button"
        onClick={handleOpenClick}
        aria-controls={openDateRange ? "dateRange-resources" : undefined}
        aira-haspopup="true"
        aria-expanded={openDateRange ? "true" : undefined}
      >
        <Box
          sx={{
            flexGrow: { xs: 1 },
            overflow: { xs: "hidden", lg: "visible" },
            cursor: "pointer",
          }}
        >
          <DateRangeComp type="Check-in" isListPage={isListPage} />
        </Box>

        <Box flexGrow={1} sx={{ overflow: "hidden", cursor: "pointer" }}>
          <DateRangeComp type="Check-out" isListPage={isListPage} />
        </Box>

        {!isTabletOrMobile && isListPage && (
          <Box flexGrow={1} sx={{ cursor: "pointer" }}>
            <NightsStay />
          </Box>
        )}
      </Stack>

      <Calendar
        dateRangeAnchorEl={dateRangeAnchorEl}
        openDateRange={openDateRange}
        handleClose={handleClose}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Stack>
  );
};

export default DateSearch;
