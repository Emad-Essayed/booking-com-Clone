import { CalendarMonth, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { InputsSearch, MediaScreenContext } from "../../../context";
import { valuesStyle, labelsStyle, borderedBox } from "../style";
import { format } from "date-fns";

const DateRangeComp = ({ type, isListPage }) => {
  // const search = useSelector((state) => state.search);
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const { dates } = useContext(InputsSearch);
  const isDefaultDate = dates.isDefaultDate;

  const dashSeperator = {
    position: "Absolute",
    top: "50%",
    left: "100%",
    transform: "translateX(-50%)",
    height: "1px",
    width: 10,
    bgcolor: "#bdbdbd",
    display: { xs: "none", lg: "block" },
    zIndex: 2,
  };

  return (
    <Stack
      direction={{ xs: "column", lg: isListPage ? "column" : "row" }}
      height={1}
      bgcolor={isListPage && !isTabletOrMobile ? "yellowborder.main" : "#FFF"}
      px={{ xs: 1, lg: !isListPage ? 1.75 : 0 }}
      py={{ xs: 0.5, lg: 0 }}
      sx={isListPage && borderedBox}
      position="relative"
    >
      {isTabletOrMobile || isListPage ? (
        <Typography sx={{ ...labelsStyle(isListPage) }}>{type} date</Typography>
      ) : (
        ""
      )}

      <Stack
        direction="row"
        height={{ xs: "auto", lg: isListPage ? "36px" : "auto" }}
        alignItems="center"
        bgcolor="#FFF"
        px={{ lg: isListPage ? 0.5 : 0 }}
      >
        {(type === "Check-in" && !isTabletOrMobile) ||
        (isListPage && !isTabletOrMobile) ? (
          <CalendarMonth
            sx={{ color: "lightgray", mr: !isListPage ? 1.5 : 0 }}
          />
        ) : (
          ""
        )}

        {type === "Check-in" && !isTabletOrMobile && !isListPage && (
          <Divider sx={dashSeperator} />
        )}

        <Typography
          sx={{
            ...valuesStyle(isListPage),
            px: { xs: 0, lg: isListPage ? 0.5 : 0 },
          }}
        >
          {isDefaultDate && !isTabletOrMobile
            ? type
            : type === "Check-in"
            ? format(
                dates.startDate,
                isTabletOrMobile
                  ? "EEE d MMM yyyy"
                  : isListPage
                  ? "EEEE, MMMM d, yyyy"
                  : "EEE, MMM d"
              )
            : format(
                dates.endDate,
                isTabletOrMobile
                  ? "EEE d MMM yyyy"
                  : isListPage
                  ? "EEEE, MMMM d, yyyy"
                  : "EEE, MMM d"
              )}
        </Typography>

        {!isTabletOrMobile && isListPage && (
          <Box sx={{ flexGrow: 1, textAlign: "right" }}>
            <KeyboardArrowDownOutlined
              fontSize="small"
              sx={{ verticalAlign: "middle", color: "#333" }}
            />
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default DateRangeComp;
