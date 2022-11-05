import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MediaScreenContext } from "../context";
import CustomCheckBox from "./CustomCheckBox";

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#FFF",
  flexGrow: 1,
  width: { xs: 1, lg: "65%" },

  "& .MuiOutlinedInput-root": {
    padding: "3px",
    fontFamily: "inherit",

    "&:hover": {
      border: "none",
    },

    "& > fieldset": {
      border: "none",

      [theme.breakpoints.down("lg")]: {
        border: "1px solid #e7e7e7",
      },
    },

    "& .MuiOutlinedInput-input": {
      paddingTop: "5px",
      paddingBottom: "5px",
      color: "#6b6b6b",
      fontSize: "20px",
      fontWeight: 300,
      border: "2px solid transparent",
      borderRadius: "3px",

      [theme.breakpoints.down("lg")]: {
        paddingTop: "3px",
        paddingBottom: "3px",
        fontSize: "1rem",
        fontWeight: 400,
        color: "initial",
        cursor: "pointer",

        "&:focus": {
          borderColor: "none",
        },
      },

      "&:focus": {
        borderColor: "black",
      },
    },
  },
}));

const Subscribe = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <Box
      sx={{
        mt: { xs: 0, lg: "2em" },
        bgcolor: { xs: "#FFF", lg: "primary.dark" },
        minWidth: { xs: "auto", lg: 620 },
        py: { xs: "16px", lg: "50px" },
        px: { xs: "16px", lg: "0" },
        borderTop: { xs: "1px solid #e7e7e7", lg: "none" },
        borderBottom: { xs: "1px solid #e7e7e7", lg: "none" },
        textAlign: "left",
      }}
    >
      {isTabletOrMobile ? (
        <Typography
          variant="subtitle1"
          component="h2"
          color="#262626"
          fontWeight={700}
        >
          Subscribe and get deals sent straight to your inbox
        </Typography>
      ) : (
        <>
          <Typography
            variant="h5"
            component="h2"
            color="background.default"
            fontWeight={300}
            align="center"
          >
            Save time, save money!
          </Typography>

          <Typography
            variant="body1"
            component="div"
            color="#bdbdbd"
            fontWeight={300}
            align="center"
          >
            Sign up and we'll send the best deals to you
          </Typography>
        </>
      )}

      <Box
        sx={{
          maxWidth: { sx: 1, lg: "50%" },
          m: { xs: "10px 0", lg: "20px auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "15px", lg: "5px" },
            flexDirection: { xs: "column", lg: "row " },
          }}
        >
          <CustomTextField
            type="email"
            required
            placeholder={isTabletOrMobile ? "your@email.her" : "Your email"}
          />
          <Button
            variant={isTabletOrMobile ? "outlined" : "contained"}
            sx={{
              fontSize: { xs: 16, lg: 20 },
              fontWeight: { xs: 600, lg: 100 },
              fontFamily: "inherit",
              borderRadius: "3px",
              px: { xs: 2, lg: 4 },
              "&:hover": { bgcolor: { xs: "ccd4e6", lg: "primary.light" } },
              alignSelf: { xs: "flex-start", lg: "center" },
            }}
          >
            Subscribe
          </Button>
        </Box>
        {!isTabletOrMobile && (
          <CustomCheckBox
            labelText="Send me a link to get the FREE Booking.com app!"
            textColor="#FFF"
            checked={true}
          />
        )}
      </Box>
    </Box>
  );
};

export default Subscribe;
