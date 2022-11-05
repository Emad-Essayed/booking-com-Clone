import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import DestinationSearch from "./DestinationSearch";
import ExtraOptions from "./ExtraOptions";
import DateSearch from "./DateSearch";
import OptionsSearch from "./Options";
import { InputsSearch, LclStoSearchContext } from "../../context";
import { useContext } from "react";
import { format } from "date-fns";

const ItemWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  border: "1px solid transparent",

  "&:hover": {
    borderColor: theme.palette.yellowborder.main,
  },

  [theme.breakpoints.down("lg")]: {
    border: `3px solid ${theme.palette.yellowborder.main}`,
  },
}));

const HomePageSearch = () => {
  const mainBorder = "4px";

  const { destination, dates, options, extraOptions } =
    useContext(InputsSearch);
  const { lclStorageSearch, setLclStorageSearch } =
    useContext(LclStoSearchContext);

  const navigate = useNavigate();

  const handleSearchClick = (e) => {
    e.preventDefault();
    setLclStorageSearch([
      ...lclStorageSearch,
      { destination, dates, options, extraOptions },
    ]);
    navigate({
      pathname: "/listProperies",
      search: createSearchParams({
        destinationId: destination?.id,
        startDate: format(dates.startDate, "yyyy-MM-d"),
        endDate: format(dates.endDate, "yyyy-MM-d"),
        ...options,
        ...extraOptions,
      }).toString(),
    });
  };

  return (
    <Box component="form" action="" onSubmit={handleSearchClick}>
      <Box
        sx={{
          transform: {
            xs: "translateY(0%)",
            lg: "translateY(-50%)",
          },
          mb: (theme) => ({
            xs: theme.sectionsSpacing(theme),
            lg: 0,
          }),
          bgcolor: (theme) => theme.palette.bgMobile.main,
        }}
        py={0}
      >
        <Container>
          <Box
            sx={{
              display: { xs: "block", lg: "none" },
              color: "black",
              py: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              fontFamily="Roboto,Helvetica,Arial,sans-serif"
            >
              Search
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Roboto,Helvetica,Arial,sans-serif"
              pt={0}
            >
              Destinations, properties, even an address
            </Typography>
          </Box>

          <Stack
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              bgcolor: "yellowborder.main",
              borderRadius: "5px",
              justifyContent: "space-evenly",
              alignItems: "stretch",
              gap: { xs: 0, lg: mainBorder },
              boxShadow: "0 2px 8px rgb(0 0 0 / 15%)",
            }}
            p={mainBorder}
          >
            <ItemWrapper flexGrow={10}>
              <DestinationSearch />
            </ItemWrapper>

            <ItemWrapper>
              <DateSearch flexGrow={1} />
            </ItemWrapper>

            <ItemWrapper flexGrow={1}>
              <OptionsSearch />
            </ItemWrapper>

            <ItemWrapper
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              <ExtraOptions />
            </ItemWrapper>

            <ItemWrapper
              sx={{
                border: "0",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  height: "100%",
                  fontSize: "1.25rem",
                  fontWeight: { xs: 700, lg: 400 },
                  px: 4,
                  borderRadius: 0.5,
                }}
              >
                Search
              </Button>
            </ItemWrapper>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          position: { xs: "static", lg: "relative" },
          left: "0",
          right: "0",
          bottom: "26px",
          display: { xs: "none", lg: "block" },
        }}
      >
        <ExtraOptions />
      </Box>
    </Box>
  );
};

export default HomePageSearch;
