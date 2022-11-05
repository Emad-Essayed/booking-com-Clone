import {
  Box,
  Button,
  Link as MuiLink,
  Stack,
  styled,
  SvgIcon,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToolTipTemplate from "../ToolTipTemplate";
import { InputsSearch, MediaScreenContext } from "../../context";
import { NavigateNext } from "@mui/icons-material";
import { nightsStay } from "../../utils";
import { useSelector } from "react-redux";
import RatingTemplate from "../RatingTemplate";
import SaveToNextTripe from "../SaveToNextTripe";
import HotelReview from "../HotelReview";

const SharedTypography = {
  fontSize: "12px",
};

const CustomTypography = styled(Typography)({
  ...SharedTypography,
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: "inherit",

  "&::after": {
    content: '"."',
    display: "inline-block",
    verticalAlign: "middle",
    padding: "0 8px",
    textDecoration: "none",
    transform: "translateY(-6px) scale(1.8) ",
    color: "lightgray",
  },
});

const TootTipetext = styled(Typography)({
  fontSize: "0.8125rem",
  lineHeight: 1.8,
  color: "#FFF",
});

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
      }}
    >
      <path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z"></path>
    </SvgIcon>
  );
};

const Title = ({ name, starsRate, path }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", lg: "center" },
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: "wrap",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        fontSize={{ xs: 14, lg: 20 }}
        fontWeight={700}
        display={{ xs: "block", lg: "inline-block" }}
        mr={0.5}
      >
        <MuiLink
          component={Link}
          to={path}
          underline="none"
          sx={{
            color: { xs: "inherit", lg: "primary.light" },
            "&:hover": { color: "#bc5b01" },
            "&:active": { color: "#a30000" },
          }}
        >
          {name}
        </MuiLink>
      </Typography>

      <RatingTemplate starsRate={starsRate} max={starsRate} />
    </Box>
  );
};

const SiteInfo = ({ address, distance, features, hideShowMap }) => {
  return (
    <>
      <Box>
        <MuiLink
          component={Link}
          to="#"
          sx={{
            textDecoration: { xs: "none", lg: "underline" },
            textDecorationColor: (theme) => theme.palette.primary.light,
            color: { xs: "inherit", lg: "primary.light" },
          }}
        >
          <CustomTypography component="span">{address}</CustomTypography>

          {hideShowMap && (
            <CustomTypography component="span">Show on map</CustomTypography>
          )}
        </MuiLink>
        <Typography
          variant="body2"
          component="span"
          color="#262626"
          sx={{ ...SharedTypography }}
        >
          {distance} km from center
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center" mt={0.5}>
        {features && (
          <>
            <BeachfrontIcon />
            <Typography
              variant="body2"
              component="span"
              color="#262626"
              sx={{ ...SharedTypography }}
            >
              {features}
            </Typography>
          </>
        )}
      </Stack>
    </>
  );
};

const MoreDetailsBtn = ({ path }) => {
  return (
    <ToolTipTemplate
      arrow
      placement="top-start"
      title={
        <TootTipetext variant="body2" component="div">
          Enter your check-in and check-out date in the search box on the left
          to see the excat room prices for your stay and to be able to sort by
          price.
        </TootTipetext>
      }
    >
      <Button
        variant="contained"
        fullWidth
        sx={{ fontFamily: "inherit", mt: 1, textTransform: "initial" }}
        endIcon={<NavigateNext />}
        component={Link}
        to={path}
      >
        See availability
      </Button>
    </ToolTipTemplate>
  );
};

const RoomsDetails = ({ rooms }) => {
  return (
    <Typography variant="body2" fontWeight={700} sx={{ ...SharedTypography }}>
      {rooms}
    </Typography>
  );
};

const BedsDetails = ({ beds }) => {
  return (
    <Typography
      variant="body2"
      my={0.5}
      fontWeight={400}
      sx={{ ...SharedTypography }}
    >
      {beds}
    </Typography>
  );
};

const Food = ({ food }) => {
  return (
    <Typography
      variant="body2"
      my={0.5}
      fontWeight={700}
      sx={{
        ...SharedTypography,
        color: (theme) => theme.palette.greenColor.main,
      }}
    >
      {food}
    </Typography>
  );
};

const NightsStay = ({ nights, children, adults }) => {
  return (
    <>
      <Typography
        variant="body2"
        component="span"
        color={{ xs: "#333", lg: "text.secondary" }}
        fontWeight={{ xs: "bold", lg: "normal" }}
        fontSize="0.75rem"
      >
        {`${nights} ${nights > 1 ? "nights" : "night"}`}
      </Typography>
      <Typography
        variant="body2"
        component="span"
        color={{ xs: "#333", lg: "text.secondary" }}
        fontWeight={{ xs: "bold", lg: "normal" }}
        fontSize="0.75rem"
      >
        {`, ${adults} ${adults === 1 ? "adult" : "adults"}`}
      </Typography>

      {children > 0 && (
        <Typography
          variant="body2"
          component="span"
          color={{ xs: "#333", lg: "text.secondary" }}
          fontWeight={{ xs: "bold", lg: "normal" }}
          fontSize="0.75rem"
        >
          {`, ${children} ${children === "1" ? "child" : "children"}`}
        </Typography>
      )}
    </>
  );
};

const Cost = ({ cost }) => {
  return (
    <Typography
      variant="h6"
      fontWeight={500}
      fontSize="1.25rem"
      sx={{
        color: (theme) => ({ xs: theme.palette.greenColor.main, lg: "#333" }),
        direction: "rtl",
      }}
    >
      {cost}
    </Typography>
  );
};

const Taxes = ({ taxes }) => {
  return (
    <Typography
      variant="body2"
      fontWeight={400}
      sx={{
        ...SharedTypography,
        color: "text.secondary",
      }}
    >
      {taxes}
    </Typography>
  );
};

const Warning = ({ warning }) => {
  return (
    <Typography
      variant="body2"
      my={0.5}
      fontWeight={700}
      sx={{
        ...SharedTypography,
        color: (theme) => theme.palette.redColor.main,
      }}
    >
      {warning}
    </Typography>
  );
};

const ListPropertyItem = () => {
  const { hotelsData } = useSelector((state) => state.hotel);

  const { dates, options, pageNo } = useContext(InputsSearch);
  const nightsStayNo = nightsStay(dates.endDate, dates.startDate);
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const [hotelsDataPage, setHotelsDataPage] = useState();

  useEffect(() => {
    setHotelsDataPage(hotelsData?.hotels?.slice(pageNo, pageNo + 10));
  }, [pageNo]);

  const location = useLocation();
  // console.log("navigat", location.search);

  return (
    <Box>
      {hotelsDataPage?.map(
        ({
          id,
          name,
          starsRate,
          review: { reviewDegree, reviwers, rateNumber },
          address,
          distance,
          features,
          beds,
          rooms,
          food,
          cost,
          taxes,
          warning,
          imgSrc,
        }) => (
          <Box
            key={id}
            sx={{
              p: 2,
              mt: 2,
              border: "1px solid #c6c6c6",
              borderRightWidth: { xs: 0, lg: 1 },
              borderLeftWidth: { xs: 0, lg: 1 },
              borderRadius: "2px",
              overflow: "visible",
              bgcolor: "#FFF",
              position: "relative",
            }}
          >
            <Stack direction="row" position="relative">
              <Box
                sx={{
                  width: { xs: "35%", lg: 200 },
                  height: { xs: "auto", lg: 200 },
                  position: "relative",
                  mr: { xs: 1, lg: 2 },
                }}
              >
                <MuiLink component={Link} to={`${id}${location.search}`}>
                  <img src={imgSrc} width="100%" height="100%" alt={name} />
                </MuiLink>
                {!isTabletOrMobile && (
                  <>
                    {food && (
                      <Typography
                        variant="body2"
                        color="#FFF"
                        fontSize={12}
                        fontWeight={700}
                        sx={{
                          position: "absolute",
                          top: "5%",
                          left: "-13%",
                          bgcolor: "#006607",
                          px: 2,
                          py: 0.5,
                          zIndex: 10,

                          "&:after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "100%",
                            border: "5px solid #006607",
                            borderBottomColor: "transparent",
                            borderLeftColor: "transparent",
                          },
                        }}
                      >
                        {food}
                      </Typography>
                    )}
                    <SaveToNextTripe />
                  </>
                )}
              </Box>

              <Stack flexGrow={1}>
                <Box>
                  <Stack direction={{ xs: "column", lg: "row" }}>
                    <Box flexGrow={1}>
                      <Title
                        name={name}
                        starsRate={starsRate}
                        path={`${id}${location.search}`}
                      />
                    </Box>
                    <Stack
                      direction="row"
                      my={{ xs: 1, lg: 0 }}
                      alignItems="center"
                    >
                      <Box flexGrow={1}>
                        <HotelReview
                          CustomTypography={CustomTypography}
                          reviewDegree={reviewDegree}
                          reviwers={reviwers}
                          rateNumber={rateNumber}
                        />
                      </Box>
                      {isTabletOrMobile && (
                        <Box>
                          <NavigateNext
                            sx={{ color: "text.secondary", fontSize: "2rem" }}
                          />
                        </Box>
                      )}
                    </Stack>
                  </Stack>
                  <Box>
                    <SiteInfo
                      address={`${address}, ${hotelsData?.cityName}`}
                      distance={distance}
                      features={features}
                      hideShowMap={isTabletOrMobile ? false : true}
                    />
                  </Box>
                </Box>
                <Stack direction="row" mt={1}>
                  {!isTabletOrMobile && (
                    <Box flexGrow={1}>
                      <RoomsDetails rooms={rooms} />
                      <BedsDetails beds={beds} />
                      <Food food={food} />
                      <Warning warning={warning} />
                    </Box>
                  )}
                  <Box textAlign={"right"} flexGrow={{ xs: 1, lg: 0 }}>
                    <NightsStay
                      nights={nightsStayNo}
                      children={options.children}
                      adults={options.adults}
                    />
                    <Cost cost={cost} />
                    <Taxes taxes={taxes} />
                    {isTabletOrMobile ? (
                      <>
                        <Warning warning={warning} />
                        <Food food={food} />
                      </>
                    ) : (
                      <MoreDetailsBtn path={`${id}${location.search}`} />
                    )}
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        )
      )}
    </Box>
  );
};

export default ListPropertyItem;
