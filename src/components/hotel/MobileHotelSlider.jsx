import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button, IconButton, SvgIcon, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InputsSearch } from "../../context";
import { nightsStay } from "../../utils";

const navigationBtnsStyled = {
  width: 36,
  height: 36,
  bgcolor: "rgba(255,255,255,0.6) !important",
  borderRadius: "0 2px 2px 0",
};

const BeachfrontIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      sx={{
        display: "inline-block",
        width: 36,
        height: 36,
        ml: 0.5,
      }}
    >
      <path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z"></path>
    </SvgIcon>
  );
};

const MobileHotelSlider = () => {
  const { hotelDetails } = useSelector((state) => state.hotelDetails);
  const hotelPhotosNumber = hotelDetails?.gallery?.length - 1 || 0;
  const [imageIndex, setImageIndex] = useState(0);

  const { dates } = useContext(InputsSearch);
  const nightsStayNo = nightsStay(dates.endDate, dates.startDate);

  const handleNavigationClick = (direction) => {
    if (direction === "before") {
      imageIndex === 0
        ? setImageIndex(hotelPhotosNumber)
        : setImageIndex((prev) => prev - 1);
    } else if (direction === "next") {
      imageIndex === hotelPhotosNumber
        ? setImageIndex(0)
        : setImageIndex((prev) => prev + 1);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          pb: "70%",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${hotelPhotosNumber}100%`,
          }}
        >
          {hotelDetails?.gallery?.map((img, index) => (
            <Box
              key={index}
              sx={{
                width: "100vw",
                height: 1,
                transform: `translateX(-${imageIndex * 100}%)`,
                transition: "transform 200ms",
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`${img}-${index}`}
                sx={{ width: 1, height: 1 }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 99999,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            sx={navigationBtnsStyled}
            onClick={() => handleNavigationClick("before")}
          >
            <NavigateBefore fontSize="large" />
          </IconButton>

          <IconButton
            sx={{ ...navigationBtnsStyled, borderRadius: "2px 0 0 2px" }}
            onClick={() => handleNavigationClick("next")}
          >
            <NavigateNext fontSize="large" />
          </IconButton>
        </Box>

        {hotelPhotosNumber > 0 && (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              zIndex: 9999,
              p: 0.625,
            }}
          >
            <Typography
              component="span"
              fontSize={12}
              p={1.5}
              sx={{
                display: "inline-block",
                color: "#FFF",
                bgcolor: "rgba(0,0,0,0.4)",
                letterSpacing: 1,
                borderRadius: 0.8,
                textShadow: "0 1px 1px rgb(0 0 0 / 35%)",
              }}
            >
              {imageIndex + 1}/{hotelPhotosNumber}
            </Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ mb: 2 }}>
        <Button
          endIcon={<BeachfrontIcon />}
          fullWidth
          sx={{
            bgcolor: "#FFF",
            color: "primary.light",
            p: 2,
            justifyContent: "space-between",
            "&:hover": { bgcolor: "#FFFF" },
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="subtitle1"
              component="div"
              fontWeight={700}
              mb={1}
            >
              {hotelDetails.features} . private beach
            </Typography>

            <Typography variant="body2" component="div" mb={1}>
              Property is on or next to a beach and has a free private beach.{" "}
              <Box
                component={Link}
                to="#"
                sx={{
                  textDecoration: "none",
                  color: "primary.light",
                  fontWeight: "normal",
                }}
              >
                show on map
              </Box>
            </Typography>
          </Box>
        </Button>
      </Box>

      <Box sx={{ bgcolor: "#FFF", p: 2 }}>
        <Button
          variant="contained"
          sx={{
            color: "#FFF",
            py: 1.5,
            borderRadius: 0.5,
            fontSize: 16,
            fontWeight: 400,
            textTransform: "initial",
          }}
          fullWidth
        >
          Reserve for {nightsStayNo} nights
        </Button>
      </Box>
    </Box>
  );
};

export default MobileHotelSlider;
