import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const customBox = (theme) => ({
  ...theme.fullBorderedBox(theme),
  border: "1px solid #e7e7e7",
  background: "url(./images/discountsBg.png) no-repeat right top ",
});

const Discounts = () => {
  return (
    <Container>
      <Stack sx={customBox}>
        <Card elevation={0}>
          <Stack direction="row" alignItems="flex-start">
            <CardMedia
              component="img"
              image="./images/discounts.png"
              title="Illustration of a globe with the blue Genius logo"
              sx={{ width: "160px", height: "160px" }}
            />
            <Stack sx={{ maxWidth: "442px" }}>
              <Typography variant="h5" component="h3" fontWeight={700}>
                Get instant discounts
              </Typography>
              <Typography
                variant="subtitle1"
                component="h4"
                sx={{ lineHeight: "1.6", mb: 1.5 }}
              >
                Just sign into your Booking.com account and look for the blue
                Genius logo to save
              </Typography>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  Sign in
                </Button>
                <Button
                  variant="text"
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: 700,
                    bgcolor: "transparent",
                    color: "primary.light",
                  }}
                >
                  Register
                </Button>
              </CardActions>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default Discounts;
