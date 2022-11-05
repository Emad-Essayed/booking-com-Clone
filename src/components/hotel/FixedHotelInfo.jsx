import { LocationOn } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const FixedHotelInfo = () => {
  const { hotelsData } = useSelector((state) => state.hotel);
  const { hotelDetails } = useSelector((state) => state.hotelDetails);

  return (
    <Box sx={{ my: 2, pt: 3 }}>
      <Stack direction="row">
        <Box sx={{ flexBasis: "66.66666%", pr: 1.5 }}>
          <Typography component="h3" fontSize={18} fontWeight={700} my={2}>
            Experience world-class service at {hotelDetails?.name}
          </Typography>

          <Typography variant="body2" mb={2}>
            Situated in {hotelsData?.cityName}, {hotelDetails?.distance} km from
            Nubian Beach,{hotelDetails?.name} features accommodation with a
            restaurant, free private parking, an outdoor swimming pool and a
            fitness centre. With a bar, the property also has a shared lounge,
            as well as a garden. The property features a sauna, evening
            entertainment and a 24-hour front desk.
          </Typography>

          <Typography variant="body2" my={2}>
            The rooms at the resort are fitted with a seating area, a
            flat-screen TV with cable channels and a safety deposit box.
            <br /> All guest rooms will provide guests with a wardrobe and a
            kettle.
          </Typography>
          <Typography variant="body2" my={2}>
            A buffet breakfast is available each morning at {hotelDetails?.name}
            .
          </Typography>
          <Typography variant="body2" my={2}>
            accommodation offers a children's playground. You can play table
            tennis, darts and tennis at Magic World Sharm - Club by Jaz, and car
            hire is available.
          </Typography>

          <Typography variant="body2" my={2}>
            Nabq Bay Beach is 2.1 km from the resort, while Rehana Royal Beach
            is 2.4 km from the property. The nearest airport is Sharm el-Sheikh
            International Airport, 11 km from Magic World Sharm - Club by Jaz.
          </Typography>

          <Typography variant="body2" my={2}>
            Couples particularly like the location — they rated it
            <strong>{hotelDetails?.review?.rateNumber}</strong> for a two-person
            trip.
          </Typography>

          <Typography variant="body2" fontWeight={700} my={2}>
            {hotelDetails?.name} has been welcoming Booking.com guests since 1
            May 2018.
          </Typography>

          <Typography variant="body2">
            Distance in property description is calculated using © OpenStreetMap
          </Typography>
        </Box>

        <Box
          sx={{
            flexBasis: "33.33333%",
            py: 2,
            pl: 1,
          }}
        >
          <Box
            sx={{
              width: "90%",
              ml: "auto",
              bgcolor: "#ebf3ff",
              border: "1px solid #ebf3ff ",
              borderRadius: 0.5,
              p: 2,
            }}
          >
            <Typography variant="subtitle1" component="h3" fontWeight={700}>
              Property highlights
            </Typography>

            <Typography variant="body2" component="h4" fontWeight={700} my={1}>
              Perfect for a 16-night stay!
            </Typography>

            <Stack direction="row" alignItems="center" mb={2.5}>
              <LocationOn />
              <Typography variant="body2" component="span">
                Top location: Highly rated by recent guests (8.7)
              </Typography>
            </Stack>

            <Typography variant="body2" component="h4" fontWeight={700} my={1}>
              Breakfast info
            </Typography>

            <Typography variant="body2" component="span">
              Buffet
            </Typography>

            <Stack direction="row" alignItems="center" my={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  bgcolor: "#333",
                  width: 21.19,
                  height: 21,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#ebf3ff",
                  borderRadius: 0.2,
                  mr: 1,
                }}
              >
                P
              </Stack>
              <Typography variant="body2">
                Free private parking available on-site
              </Typography>
            </Stack>

            <Box>
              <Typography
                variant="body2"
                component="h4"
                fontWeight={700}
                my={1}
              >
                Activities
              </Typography>
              <Typography variant="body2" fontSize={13}>
                Tennis court
              </Typography>
              <Typography variant="body2" fontSize={13} my={0.2}>
                Fitness centre
              </Typography>
              <Typography variant="body2" fontSize={13}>
                Spa and wellness centre
              </Typography>
            </Box>

            <Button variant="contained" fullWidth sx={{ mt: 5 }}>
              Reserve
            </Button>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          bgcolor: "#ebf3ff",
          my: 3,
          py: 2,
          px: 1.25,
          borderRadius: 1,
          cursor: "pointer",
        }}
      >
        <Typography
          component="h3"
          fontSize={21}
          fontWeight="normal"
          sx={{ color: "#333" }}
        >
          The best of Sharm El Sheikh
        </Typography>
        <Typography variant="body2" fontSize={13} pt={0.6}>
          Click here to see more properties near popular landmarks in Sharm El
          Sheikh
        </Typography>
      </Box>
    </Box>
  );
};

export default FixedHotelInfo;
