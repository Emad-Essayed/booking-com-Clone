import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MediaScreenContext } from "../context";
import CloseButton from "./CloseButton";

const MainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    ...theme.topBottomBordered(theme),
  },
}));

const customBox = (theme) => ({
  ...theme.fullBorderedBox(theme),
  border: { xs: "none", lg: "1px solid #e7e7e7" },
  // pr: { xs: 3, lg: 5 },
  overflow: "hidden",
  position: "relative",
});

const middleBox = {
  minWidth: { xs: 1, lg: 400 },
  borderRadius: "50%",
  margin: { sx: 0, lg: "-100px 0" },
  paddingLeft: { xs: 0, lg: "10%" },
  fontFamily:
    "'Avenir Next',BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "#FFF",
  bgcolor: { sx: "transparent", lg: "primary.light" },
};

const customText = {
  fontSize: { xs: 16, lg: 24 },
  fontWeight: "bold",
  color: { lg: "#FFF" },
  fontFamily:
    "'Avenir Next',BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  width: "fit-content",
  mx: { xs: "auto", lg: 0 },
  textAlign: "center",
  lineHeight: 1.6,
};

const NextTrip = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <MainBox>
      <Container>
        <Stack position="relative" sx={customBox}>
          <CloseButton onClick={() => setShow(false)} />
          <Stack
            justifyContent="flex-end"
            sx={{
              width: 1,
              minHeight: "230px",
              flexDirection: { xs: "column-reverse", lg: "row" },
              alignItems: { xs: "center", lg: "stretch" },
            }}
          >
            {!isTabletOrMobile && (
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  left: "-20px",
                  bottom: "40px",
                  width: "64px",
                  height: "64px",
                  bgcolor: "yellowborder.main",
                  borderRadius: "50%",
                }}
              />
            )}

            <Stack sx={middleBox}>
              <Box>
                <Typography variant="h5" component="div" sx={customText}>
                  Find {isTabletOrMobile && <br />}
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      ...customText,
                      textDecoration: "underline",
                      textDecorationColor: (theme) =>
                        theme.palette.yellowborder.main,
                    }}
                  >
                    vacation homes
                  </Typography>
                </Typography>
                <Typography variant="h5" component="div" sx={customText}>
                  for your next trip
                </Typography>
                <Button
                  variant="whiteBtn"
                  fullWidth
                  sx={{
                    mt: 2.5,
                    fontWeight: 500,
                    fontFamily: "inherit",
                    maxWidth: { xs: "100%", lg: "70%" },
                  }}
                >
                  Discover homes
                </Button>
              </Box>
            </Stack>
            <Box
              component="img"
              sx={{
                maxWidth: "360px",
                width: { xs: "80%", lg: "40%" },
                pl: 4,
                mr: 4,
                mt: 2,
              }}
              alt="campaign banner"
              src="./images/nextTrip.png"
            />
          </Stack>
        </Stack>
      </Container>
    </MainBox>
  );
};

export default NextTrip;
