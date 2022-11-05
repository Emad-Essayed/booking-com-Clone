import {
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { MediaScreenContext } from "../../context";

const CustomLink = styled(MuiLink)(({ theme }) => ({
  padding: "5px 10px 0",
  color: theme.palette.primary.light,
  fontSize: "0.8125rem",
  fontWeight: 400,

  "&:hover": {
    color: "#923e01",
  },
}));

const CustomIconBtn = styled(IconButton)({
  overflow: "hidden",
  alignItems: "flex-start",
  borderRadius: 0,
  padding: 0,

  "&:hover": {
    backgroundColor: "transparent",
  },
});

const FooterNav = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ pt: 2, pb: 4 }}
          >
            <Stack spacing={1}>
              <CustomLink href="#">Countries</CustomLink>
              <CustomLink href="#">Regions</CustomLink>
              <CustomLink href="#">Cities</CustomLink>
              <CustomLink href="#">Districts</CustomLink>
              <CustomLink href="#">Airports</CustomLink>
              <CustomLink href="#">Hotels</CustomLink>
              <CustomLink href="#">Places of interest</CustomLink>
            </Stack>
            <Stack spacing={1}>
              <CustomLink href="#">Homes</CustomLink>
              <CustomLink href="#">Apartments</CustomLink>
              <CustomLink href="#">Resorts</CustomLink>
              <CustomLink href="#">Villas</CustomLink>
              <CustomLink href="#">Hostels</CustomLink>
              <CustomLink href="#">B&Bs</CustomLink>
              <CustomLink href="#">Guest houses</CustomLink>
            </Stack>
            <Stack spacing={1}>
              <CustomLink href="#">Unique places to stay</CustomLink>
              <CustomLink href="#">Reviews</CustomLink>
              <CustomLink href="#">Unpacked: Travel articles</CustomLink>
              <CustomLink href="#">Travel communities</CustomLink>
              <CustomLink href="#">Seasonal and holiday deals</CustomLink>
            </Stack>
            <Stack spacing={1}>
              <CustomLink href="#">Car hire</CustomLink>
              <CustomLink href="#">Flight finder</CustomLink>
              <CustomLink href="#">Restaurant reservations</CustomLink>
              <CustomLink href="#">Booking.com for Travel Agents</CustomLink>
              <CustomLink href="#">Seasonal and holiday deals</CustomLink>
            </Stack>
            <Stack spacing={1}>
              <CustomLink href="#">Corona (COVID-19)FAQs</CustomLink>
              <CustomLink href="#">About booking.com</CustomLink>
              <CustomLink href="#">Customer Service help</CustomLink>
              <CustomLink href="#">Partner help</CustomLink>
              <CustomLink href="#">Careers</CustomLink>
              <CustomLink href="#">Sustainability</CustomLink>
              <CustomLink href="#">Press centre</CustomLink>
              <CustomLink href="#">Safty resource centre</CustomLink>
              <CustomLink href="#">Investor relations</CustomLink>
              <CustomLink href="#">Terms & Conditions</CustomLink>
              <CustomLink href="#">Partner dispute</CustomLink>
              <CustomLink href="#">How we work</CustomLink>
              <CustomLink href="#">Privacy & Cookie Statement</CustomLink>
              <CustomLink href="#">Corporate contact</CustomLink>
            </Stack>
          </Stack>
          <CustomLink
            href="#"
            display="block"
            align="center"
            sx={{ fontSize: "1.1em", fontWeight: "bold" }}
          >
            External login
          </CustomLink>
        </>
      )}

      <Typography
        variant="body2"
        component="div"
        mt={2}
        mb={3}
        mx={1}
        sx={{
          fontSize: { xs: 14, lg: 12 },
          color: { xs: "#FFF", lg: "text.primary" },
          // my: { xs: 0, lg: 3 },
        }}
      >
        Copyright © 1996–2022 Booking.com™. All rights reserved.
      </Typography>
      <Box align="center">
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: { xs: 14, lg: 12 },
            color: { xs: "#FFF", lg: "text.secondary" },
          }}
        >
          {isTabletOrMobile ? (
            <>
              Your reference ID is: <strong>C26D8FC</strong>
            </>
          ) : (
            "Booking.com is part of Booking Holdings inc., the world leader in online travel and related services."
          )}
        </Typography>

        {!isTabletOrMobile ? (
          <Stack
            direction="row"
            width={"70%"}
            justifyContent="space-between"
            alignItems="center"
            m="1.875rem auto 1rem"
          >
            <CustomIconBtn>
              <img
                src="./images/footerLogos/booking.png"
                alt="booking"
                width="100%"
                height="100%"
              />
            </CustomIconBtn>
            <CustomIconBtn>
              <img
                src="./images/footerLogos/priceline.png"
                alt="priceline"
                width="100%"
                height="100%"
              />
            </CustomIconBtn>
            <CustomIconBtn>
              <img
                src="./images/footerLogos/kayak.png"
                alt="kayak"
                width="100%"
                height="100%"
              />
            </CustomIconBtn>
            <CustomIconBtn>
              <img
                src="./images/footerLogos/agoda.png"
                alt="agoda"
                width="100%"
                height="100%"
              />
            </CustomIconBtn>
            <CustomIconBtn>
              <img
                src="./images/footerLogos/rentalCar.png"
                alt="priceline"
                width="100%"
                height="100%"
              />
            </CustomIconBtn>
            <CustomIconBtn>
              <img
                src="./images/footerLogos/openTable.png"
                alt="openTable"
                width="100%"
                height="100%"
              />
            </CustomIconBtn>
          </Stack>
        ) : (
          <MuiLink
            component={Link}
            to="#"
            color="#FFF"
            fontSize={14}
            sx={{
              display: "inline-block",
              my: 2.5,
              textDecorationColor: "inherit",
            }}
          >
            Sitemap
          </MuiLink>
        )}
      </Box>
    </Container>
  );
};

export default FooterNav;
