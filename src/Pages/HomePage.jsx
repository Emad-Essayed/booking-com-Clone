import { Box } from "@mui/material";
import React from "react";
import { useContext } from "react";
import CoronaVirus from "../components/CoronaVirus";
import DestinationsTabs from "../components/DestinationsTabs/DestinationsTabs";
import Discounts from "../components/Discounts";
import Explore from "../components/Explore";
import Foorter from "../components/footer";
import Genuis from "../components/Genuis";
import Header from "../components/Header";
import ListYourPlaces from "../components/ListYourPlaces";
import MoreInfo from "../components/MoreInfo";
import NextTrip from "../components/NextTrip";
import Offers from "../components/Offers";
import Properties from "../components/Properties";
import RecentSearch from "../components/RecentSearch";
import HomePageSearch from "../components/search/HomePageSearch";
import SecretDeals from "../components/SecretDeals";
import Travelers from "../components/Travelers";
import Trips from "../components/Trips";
import { MediaScreenContext } from "../context";

const HomePage = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.bgMobile.main,
        }}
      >
        <HomePageSearch />

        <Box>
          <CoronaVirus />
          {isTabletOrMobile && <Genuis />}

          <RecentSearch />

          <Offers />

          <Properties />

          {!isTabletOrMobile && <Trips />}

          <Travelers />

          {!isTabletOrMobile && (
            <>
              <Discounts />
              <Explore />
            </>
          )}

          <NextTrip />

          {isTabletOrMobile && (
            <>
              <ListYourPlaces />
              <MoreInfo />
            </>
          )}

          {!isTabletOrMobile && (
            <>
              <SecretDeals />
              <DestinationsTabs />
            </>
          )}
        </Box>
      </Box>
      <Foorter />
    </>
  );
};

export default HomePage;
