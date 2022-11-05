import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import DateSearch from "./DateSearch";
import DestinationSearch from "./DestinationSearch";
import ExtraOptions from "./ExtraOptions";
import OptionsSearch from "./Options";
import Header from "../Header";
import {
  InputsSearch,
  LclStoSearchContext,
  MediaScreenContext,
} from "../../context";
import { format } from "date-fns";

const ListSearch = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const { lclStorageSearch, setLclStorageSearch } =
    useContext(LclStoSearchContext);
  const { destination, setDestination, dates, options, extraOptions } =
    useContext(InputsSearch);

  const [searchParams, setSearchParams] = useSearchParams();

  const itemWarpper = {
    border: { xs: "4px solid ", lg: "none" },
    borderColor: { xs: "yellowborder.main" },
  };

  const navigate = useNavigate();

  const handleSearchClick = (e) => {
    e.preventDefault();
    const params = {
      destinationId: destination.id,
      startDate: format(dates.startDate, "yyyy-MM-d"),
      endDate: format(dates.endDate, "yyyy-MM-d"),
      ...options,
      ...extraOptions,
    };
    setSearchParams(params);
    setLclStorageSearch([
      ...lclStorageSearch,
      { destination, dates, options, extraOptions },
    ]);
    navigate({
      pathname: "/listProperies",
      search: createSearchParams(params).toString(),
    });
  };

  return (
    <>
      {isTabletOrMobile && <Header showBackBtn />}
      <Box p={{ xs: 2, lg: 0 }} bgcolor="#f5f5f5">
        <Stack
          component="form"
          action=""
          onSubmit={handleSearchClick}
          spacing={{ xs: 0, lg: 1 }}
          p={{ xs: 0.6, lg: 2 }}
          bgcolor={"yellowborder.main"}
          borderRadius={{ xs: 0, lg: 0.75 }}
        >
          <Typography
            variant="h4"
            component="h2"
            fontSize="1.25rem"
            fontWeight={500}
            fontFamily="inherit"
            display={{ xs: "none", lg: " block " }}
          >
            Search
          </Typography>

          <Box sx={itemWarpper}>
            <DestinationSearch isListPage />
          </Box>
          <Box sx={itemWarpper}>
            <DateSearch isListPage />
          </Box>
          <Box sx={itemWarpper}>
            <OptionsSearch isListPage />
          </Box>
          <Box sx={itemWarpper}>
            <ExtraOptions isListPage />
          </Box>

          <Box sx={{ ...itemWarpper, py: { xs: 1.5, lg: 0 } }}>
            <Button
              variant="contained"
              sx={{
                width: { xs: "90%", lg: 1 },
                display: { xs: "flex", lg: "inline-flex" },
                mx: "auto",
                height: 1,
                fontWeight: { xs: 700, lg: 400 },
                minHeight: { xs: 64, lg: "auto" },
                borderRadius: { xs: 2, lg: 0.5 },
                textShadow: { xs: "0 1px 0 rgb(0 0 0 / 70%)", lg: "none" },
                fontSize: { xs: 24, lg: 16 },
              }}
              type="submit"
            >
              Search
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ListSearch;
