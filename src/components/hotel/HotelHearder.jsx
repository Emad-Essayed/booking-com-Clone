import { LocationOn, Share } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  Link as MuiLink,
  Icon,
} from "@mui/material";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MediaScreenContext } from "../../context";
import { CarRentalIcon, HelpIcon } from "../IconsRep";
import HotelReview from "../HotelReview";
import RatingTemplate from "../RatingTemplate";
import SaveToNextTripe from "../SaveToNextTripe";
import TopNavbar from "./TopNavbar";

const BeachfrontIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      sx={{
        display: "inline-block",
        width: "18px",
        height: "18px",
        mr: 0.5,
        cursor: "help",
        color: "primary.main",
      }}
    >
      <path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z"></path>
    </SvgIcon>
  );
};

const HotelHearder = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  const { hotelsData } = useSelector((state) => state.hotel);
  const { hotelDetails } = useSelector((state) => state.hotelDetails);

  return (
    <Stack direction="row" justifyContent="space-between" width={1}>
      <Box>
        <Stack direction="row" gap={1.5} alignItems="center">
          <Typography
            variant="body2"
            bgcolor="rgba(0,0,0,0.5)"
            color="#FFF"
            sx={{ borderRadius: 0.5, py: 0.4, px: 0.6 }}
          >
            Resort
          </Typography>

          {hotelDetails?.starsRate && (
            <RatingTemplate
              starsRate={parseInt(hotelDetails?.starsRate)}
              max={parseInt(hotelDetails?.starsRate)}
            />
          )}

          {hotelDetails?.features && (
            <Stack
              direction="row"
              alignItems="center"
              bgcolor="#ebf3ff"
              height={1}
            >
              <BeachfrontIcon />
              <Typography
                variant="body2"
                component="span"
                color="primary.main"
                fontSize={12}
                p={0.5}
              >
                {hotelDetails?.features} · Private beach
              </Typography>
            </Stack>
          )}

          <Typography
            variant="body2"
            fontSize={12}
            bgcolor="#f2f2f2"
            color="#262626"
            sx={{ borderRadius: 0.5, py: 0.4, px: 0.6 }}
          >
            Airport shuttle
          </Typography>
        </Stack>

        <Typography variant="h5" component="h2" fontWeight={700} mt={2}>
          {hotelDetails?.name}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          width={1}
          sx={{ whiteSpace: "nowrap", ml: { lg: -0.5 }, mt: 1 }}
        >
          {!isTabletOrMobile && (
            <IconButton sx={{ color: "primary.light", p: 0 }}>
              <LocationOn />
            </IconButton>
          )}
          <Typography variant="body2" component="span">
            {hotelDetails?.address}, {hotelsData?.cityName},{" "}
            {hotelsData?.country?.name}
          </Typography>
          <Typography variant="body2" component="span">
            &nbsp;-&nbsp;
            <MuiLink
              component={Link}
              to="#"
              fontWeight="bold"
              underline="none"
              sx={{ color: "primary.light" }}
              onClick={(e) => e.preventDefault()}
            >
              Excellent location - show map
            </MuiLink>
          </Typography>
        </Stack>

        {isTabletOrMobile ? (
          <Box my={1}>
            <HotelReview
              reviewDegree={hotelDetails?.review?.reviewDegree}
              reviwers={hotelDetails?.review?.reviwers}
              rateNumber={hotelDetails?.review?.rateNumber}
              ishotelDetails={true}
            />
          </Box>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            width={1}
            sx={{ whiteSpace: "nowrap", ml: -0.5 }}
          >
            <IconButton sx={{ p: 0, pr: 1 }}>
              <CarRentalIcon color="greenColor.main" />
            </IconButton>
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "greenColor.main", fontWeight: "bold" }}
            >
              Book a stay over EGP 7,095 at this property and get a free airport
              taxi
            </Typography>
            <Icon
              sx={{
                color: "greenColor.main",
                height: "auto",
                // ml: 0.5,
                mb: 0.5,
              }}
            >
              <HelpIcon />
            </Icon>
          </Stack>
        )}
      </Box>

      <Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          gap={1.5}
          alignItems="center"
        >
          <SaveToNextTripe isHotelDetails="isHotelDetails" />
          {!isTabletOrMobile && (
            <>
              <IconButton sx={{ color: "primary.light" }}>
                <Share />
              </IconButton>
              <Button variant="contained">Reserve</Button>
            </>
          )}
        </Stack>

        {!isTabletOrMobile && (
          <Box textAlign="right">
            <TopNavbar btnText="We Price Match" alignRight />
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default HotelHearder;
