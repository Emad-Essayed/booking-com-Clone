import { MoreHoriz } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  Typography,
  Divider,
  ButtonGroup,
  Fade,
  Grow,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import nearByBeaches from "../../data/nearbyBeaches.json";
import ToolTipTemplate from "../ToolTipTemplate";

const ToolTipContent = ({ header, features, btnText }) => {
  return (
    <>
      <Typography variant="body2" fontWeight={600} color="#FFF">
        {header}
      </Typography>
      <Box component="ul" sx={{ pl: "18px" }}>
        {features.map((feat, key) => (
          <Box component="li" key={key} sx={{ ml: 0, pl: 0 }}>
            {feat}
          </Box>
        ))}
      </Box>
      <Button
        variant="outlined"
        size="small"
        sx={{ borderColor: "#FFF", color: "#FFF" }}
      >
        {btnText}
      </Button>
    </>
  );
};

const CustomHeaderTitle = ({ text }) => {
  return (
    <Typography
      variant="h5"
      component="h1"
      fontFamily="inherit"
      fontWeight={700}
      color="#262626"
    >
      {text}
    </Typography>
  );
};

const ListPropertiesHeader = () => {
  const { hotelsData } = useSelector((state) => state.hotel);

  return (
    <Box>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        pb={1}
      >
        {hotelsData?.hotels?.length ? (
          <CustomHeaderTitle
            text={`${hotelsData?.cityName}: ${hotelsData?.hotels?.length}
            ${hotelsData?.hotels?.length ? " Property " : " properties "}
            found`}
          />
        ) : (
          <CustomHeaderTitle
            text={`No properties found for ${hotelsData?.cityName}`}
          />
        )}
        <Box
          position="relative"
          width={160}
          height={72}
          sx={{
            cursor: "pointer",
            background: "url(./images/map-entry-point.6b01012a.png)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ fontFamily: "inherit", py: 1, px: 2, borderRadius: "3px" }}
          >
            Show on map
          </Button>
        </Box>
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" py={1}>
        <Typography
          variant="subtitle1"
          component="span"
          color="#6b6b6b"
          fontWeight={600}
          pr={2}
        >
          Nearby Beaches:
        </Typography>

        {nearByBeaches.map(({ title, features, btnText }, key) => (
          <Box key={key} sx={{ flexGrow: 1, px: 2 }}>
            <ToolTipTemplate
              arrow
              placement="top"
              TransitionComponent={Grow}
              title={
                <ToolTipContent
                  header={title}
                  features={features}
                  btnText={btnText}
                />
              }
            >
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  borderBottom: "1px dotted #6b6b6b",
                  cursor: "help",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  color: "#333",
                }}
              >
                {title}
              </Typography>
            </ToolTipTemplate>
          </Box>
        ))}
      </Stack>
      <ButtonGroup
        variant="outlined"
        aria-label="Top picks"
        size="small"
        sx={{ mt: 1, width: "100%" }}
      >
        <Button
          variant="contained"
          sx={{ flexGrow: 1, py: 1 }}
          disableElevation
        >
          Our Top Picks
        </Button>
        <ToolTipTemplate
          title={
            <Typography variant="body2" p={1.5} color="#FFF">
              Looking for Privacy? See entire places first
            </Typography>
          }
          followCursor
          placement="bottom-start"
          TransitionComponent={Fade}
          sx={{ p: 0.5 }}
        >
          <Button sx={{ flexGrow: 1, py: 1 }}>Homes & apartments first</Button>
        </ToolTipTemplate>

        <Button sx={{ flexGrow: 1, py: 1 }}>Stars (highest first)</Button>
        <Button sx={{ flexGrow: 1, py: 1 }}>Stars (lowest first)</Button>
        <Button sx={{ flexGrow: 1, py: 1 }}>Distance From Downtown</Button>
        <Button sx={{ flexGrow: 1, py: 1 }} aria-label="more menu options">
          <MoreHoriz />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ListPropertiesHeader;
