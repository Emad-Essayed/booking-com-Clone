import { Box, Container, Grid, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MediaScreenContext } from "../../context";
import { fetchHotelDetails } from "../../features/hotel/HotelDetailsSlice";
import CoronaVirus from "../CoronaVirus";
import Header from "../Header";
import ListSearch from "../search/ListSearch";
import SiteBreadCrumbs from "../SiteBreadCrumbs";
import FixedHotelInfo from "./FixedHotelInfo";
import HotelDetails from "./HotelDetails";
import HotelHearder from "./HotelHearder";
import MobileHotelSlider from "./MobileHotelSlider";
import TopNavbar from "./TopNavbar";

const Hotel = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  const { hotelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotelDetails(hotelId));
  }, [hotelId, dispatch]);

  const navigationBtns = [
    "Info & prices",
    "Facilities",
    "House rules",
    "The fine print",
    "Guest reviews (688)",
  ];

  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.bgMobile.main }}>
      {isTabletOrMobile ? <Header showBackBtn /> : <Header />}
      <CoronaVirus isAccordion />
      <Container>
        <Box pt={{ xs: 0, lg: 2 }} pb={2}>
          {!isTabletOrMobile && <SiteBreadCrumbs isHotelDetails />}

          <Grid container spacing={{ xs: 0, lg: 2.5 }} columns={15}>
            {!isTabletOrMobile && (
              <Grid item xs={0} lg={3.5}>
                <Box bgcolor="#ebf3ff" my={2}>
                  <TopNavbar btnText="We Price Match" />
                </Box>
                <ListSearch />
              </Grid>
            )}
            <Grid item xs={15} lg={11.4} flexGrow={1} pt={{ xs: 2, lg: 0 }}>
              {!isTabletOrMobile && (
                <Stack direction="row" width={1} gap={0.25}>
                  {navigationBtns.map((btn) => (
                    <Box key={btn} bgcolor="#ebf3ff" my={2} flexGrow={1}>
                      <TopNavbar btnText={btn} />
                    </Box>
                  ))}
                </Stack>
              )}

              <Box>
                <HotelHearder />
                {!isTabletOrMobile && <HotelDetails />}
              </Box>
            </Grid>
          </Grid>
        </Box>
        {!isTabletOrMobile && <FixedHotelInfo />}
      </Container>
      {isTabletOrMobile && <MobileHotelSlider />}
    </Box>
  );
};

export default Hotel;
