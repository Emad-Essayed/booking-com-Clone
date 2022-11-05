import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
import React, { useContext } from "react";
import ListPropertiesFooter from "../../components/listProperties/ListPropertiesFooter";
import ListPropertiesHeader from "../../components/listProperties/ListPropertiesHeader";
import ListPropertyItem from "../../components/listProperties/ListPropertyItem";
import SearchSummary from "../../components/search/SearchSummary";
import ListSearch from "../../components/search/ListSearch";
import SiteBreadCrumbs from "../../components/SiteBreadCrumbs";
import { MediaScreenContext } from "../../context";
import Header from "../Header";
import Filteration from "../Filteration";
import { useSelector } from "react-redux";

const ListProperties = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const hotels = useSelector((state) => state.hotel);
  // useEffect(() => {
  //   console.log("effect");
  // });

  return (
    <>
      {/* {console.log("render")} */}
      <Header />
      <Box bgcolor={{ xs: "#f5f5f5", lg: "#FFF" }}>
        {isTabletOrMobile && <SearchSummary />}

        <Box pt={{ xs: 0, lg: 1 }} pb={2}>
          <Container sx={{ px: { xs: 0, lg: 3 } }}>
            {!isTabletOrMobile && hotels?.hotelsData?.hotels?.length && (
              <SiteBreadCrumbs />
            )}

            <Grid
              container
              pt={{ xs: 0, lg: 2 }}
              spacing={{ xs: 0, lg: 2.5 }}
              columns={15}
            >
              {!isTabletOrMobile && (
                <Grid item xs={15} lg={3.6}>
                  <ListSearch />
                  <Filteration />
                </Grid>
              )}

              <Grid item lg={11.4} flexGrow={1}>
                {!isTabletOrMobile && <ListPropertiesHeader />}

                {hotels.loading ? (
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={!hotels?.hotelsData?.hotels?.length}
                    // onClick={handleClose}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                ) : hotels.error ? (
                  <Box>Error: {hotels.error}</Box>
                ) : hotels?.hotelsData?.hotels?.length ? (
                  <>
                    <ListPropertyItem />
                    <ListPropertiesFooter />
                  </>
                ) : (
                  <Box
                    pt={3}
                    sx={{ textAlign: "center" }}
                  >{`No properties found for ${hotels?.hotelsData?.cityName}`}</Box>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ListProperties;
