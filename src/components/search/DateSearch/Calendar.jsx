import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { nightsStay } from "../../../utils";

import { MediaScreenContext, InputsSearch } from "../../../context";
// import { useDispatch, useSelector } from "react-redux";
// import { setDates } from "../../../features/search/searchSlice";

const StyledDateRang = styled(DateRange)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    maxHeight: "100%",
    overflow: "auto",

    ".rdrMonthAndYearWrapper": {
      display: "none",
    },

    ".rdrMonths": {
      flexDirection: "column",

      ".rdrMonth": {
        width: "100% !important",
        paddingTop: 5,
        paddingBottom: 5,

        ".rdrMonthName": {
          textAlign: "right",
          color: "#333",
          fontSize: 16,
          fontWeight: 700,
          paddingTop: 2,
          paddingBottom: 2,
        },
        ".rdrDayNumber": {
          fontSize: 14,
          fontWeight: 400,
        },
      },
    },
  },
}));

const CalendarBox = ({ isTabletOrMobile }) => {
  const { dates, setDates } = useContext(InputsSearch);
  // const search = useSelector((state) => state.search);
  // const dispatch = useDispatch();
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  const months = isTabletOrMobile ? 23 - currentMonth : 2;

  return (
    <StyledDateRang
      startDatePlaceholder="Check-in"
      endDatePlaceholder="Check-out"
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      dateDisplayFormat="MM-dd-yyyy"
      ranges={[dates]}
      minDate={new Date()}
      onChange={(item) => {
        setDates({ ...item.selection, isDefaultDate: false });
      }}
      months={months}
      direction="horizontal"
    />
  );
};

const NightsStay = () => {
  const { dates } = useContext(InputsSearch);
  // const search = useSelector((state) => state.search);

  return (
    <Typography variant="body2" component="div">
      {`
                  ${format(dates.startDate, "EEE, MMM d")} - 
                  ${format(dates.endDate, "EEE, MMM d")}

                (${nightsStay(dates.endDate, dates.startDate)} night)`}
    </Typography>
  );
};

const Calendar = ({
  dateRangeAnchorEl,
  openDateRange,
  handleClose,
  setIsDrawerOpen,
  isDrawerOpen,
}) => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <>
      {!isTabletOrMobile ? (
        <Menu
          id="dateRange-resources"
          anchorEl={dateRangeAnchorEl}
          open={openDateRange}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "dateRange-button" }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ bgcolor: "transparent" }}
        >
          <MenuItem
            disableRipple
            sx={{
              flexDirection: "column",
              bgcolor: "transparent",
              "&.MuiMenuItem-root": { bgcolor: "transparent" },
            }}
          >
            <CalendarBox isTabletOrMobile={isTabletOrMobile} />

            <Divider sx={{ width: 1, mb: 2 }} />

            <NightsStay />
          </MenuItem>
        </Menu>
      ) : (
        <Drawer
          anchor="bottom"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{ height: 1, ".MuiPaper-root": { top: 0 } }}
        >
          <Box
            width={1}
            height={1}
            bgcolor="#FFF"
            p={2}
            pt={4}
            position="relative"
          >
            <IconButton
              onClick={() => setIsDrawerOpen(false)}
              sx={{
                position: "fixed",
                right: 15,
                top: 5,
                color: "#bdbdbd",
              }}
              disableRipple={true}
            >
              <Close />
            </IconButton>

            <Box>
              <Box overflow="hidden">
                <CalendarBox isTabletOrMobile={isTabletOrMobile} />
              </Box>
            </Box>

            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "#FFF",
              }}
            >
              <Divider sx={{ width: 1 }} />
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "80%", mx: "auto", py: 1 }}
              >
                <Box sx={{ flex: "1 0 50%" }}>
                  <NightsStay />
                </Box>
                <Button
                  variant="contained"
                  sx={{ flex: "1 0 50%" }}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Done
                </Button>
              </Stack>
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Calendar;
