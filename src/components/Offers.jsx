import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { MediaScreenContext } from "../context";

const Title = styled(Typography)({
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: 700,
});

const Subtitle = styled(Typography)({
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: 400,
  paddingBottom: "1rem",
});

const customBox = (theme) => ({
  ...theme.fullBorderedBox(theme),
  border: "1px solid #e7e7e7",
  padding: { xs: 1, lg: 2 },
  gap: { xs: ".5rem", lg: "1rem" },
});

const styledCustomBox = (theme) => ({
  ...theme.fullBorderedBox(theme),
  border: "1px solid #e7e7e7",
  padding: { xs: 1, lg: 2 },
  gap: { xs: ".5rem", lg: "1rem" },

  width: "120%",
  pt: 1,
  mx: "-10% !important",
  px: "10% !important",
});

const Offers = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <Box mb={{ xs: 2, lg: 0 }}>
      <Container sx={{ overflow: "hidden" }}>
        {!isTabletOrMobile && (
          <Box sx={{ width: 1, mb: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              fontSize={{ xs: 16, lg: 24 }}
              fontWeight={700}
            >
              Offers
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              color="text.secondary"
            >
              Promotions, deals and special offers for you
            </Typography>
          </Box>
        )}
        <Stack
          sx={(theme) =>
            isTabletOrMobile
              ? styledCustomBox
              : {
                  ...customBox(theme),
                  boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.16)",
                  border: "none",
                  borderRadius: 2,
                  mt: 1,
                }
          }
          flexWrap={"wrap"}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "row-reverse", lg: "row" },
              minHeight: { xs: 184, lg: "auto" },
              width: 1,
            }}
            elevation={isTabletOrMobile ? 2 : 0}
          >
            <CardMedia
              component="img"
              sx={{
                maxWidth: { xs: 1, lg: 140 },
                flex: { xs: 1, lg: "auto" },
                minWidth: 90,
              }}
              image="./images/offer.jpg"
              alt="offer"
            />
            <CardContent
              sx={{
                py: { xs: 2, lg: "0px !important" },
                flex: { xs: 1, lg: "auto" },
                alignSelf: "center",
                minWidth: { xs: "none", lg: "60%" },
              }}
            >
              <Title component="div" variant="h6" gutterBottom>
                Save 15% or more
              </Title>
              <Subtitle
                variant="subtitle1"
                color="text.primary"
                component="h6"
                sx={{ lineHeight: 1.3 }}
              >
                Plan your dream trip with a Getaway Deal
              </Subtitle>
              <Button variant="contained" sx={{ fontWeight: 600 }}>
                Explore deals
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Offers;
