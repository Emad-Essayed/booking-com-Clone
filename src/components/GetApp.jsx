import { Box, Button, Rating, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const MainBox = styled(Box)(({ theme }) => ({
  ...theme.topBottomBordered(theme),
  borderColor: "#d8d8d8",
  marginBottom: 0,
  textAlign: "left",
}));

const GetApp = () => {
  return (
    <MainBox p={2}>
      <Stack
        direction="row"
        alignItems="flex-start"
        component={Link}
        to=""
        sx={{ textDecoration: "none", gap: 2 }}
      >
        <Box
          component="img"
          src="./images/AppLogo.png"
          alt="logo"
          width={60}
          height={60}
        />
        <Box flexGrow={1}>
          <Typography component="h2" variant="subtitle2" fontWeight={700}>
            Get the FREE app
          </Typography>
          <Rating defaultValue={4.5} precision={0.5} readOnly size="small" />
          <Typography variant="body2" color="text.primary" fontSize={12}>
            Search, book & manage your trips in the app
          </Typography>
        </Box>
        <Button variant="contained" sx={{ alignSelf: "center" }}>
          Install
        </Button>
      </Stack>
    </MainBox>
  );
};

export default GetApp;
