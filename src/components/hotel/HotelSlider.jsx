import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const styledImage = {
  maxWidth: 1,
  maxHeight: 1,
  height: 1,
  objectFit: "cover",
  borderRadius: 2,
};

const StyledArrows = {
  color: "#333",

  "&:hover": {
    bgcolor: "transparent",
    color: "primary.light",
  },
};

const HotelSlider = ({ selectedImage, setSelectedImage }) => {
  const { hotelDetails } = useSelector((state) => state.hotelDetails);

  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(selectedImage);
  }, [selectedImage]);

  const TotalHotelsNumber = hotelDetails.gallery.length;

  const handleChangeSlider = (direction, index) => {
    if (direction === "left") {
      selectedImage === 0
        ? setSelectedImage(TotalHotelsNumber - 1)
        : setSelectedImage((prev) => prev - 1);
    } else if (direction === "right") {
      selectedImage === TotalHotelsNumber - 1
        ? setSelectedImage(0)
        : setSelectedImage((prev) => prev + 1);
    } else {
      setSelectedImage(index);
    }
  };

  const settings = {
    // centerMode:
    //   selectedImage === 0 || selectedImage === 1 || selectedImage === 2
    //     ? false
    //     : true,
    infinite: false,
    slidesToShow: 6.5,
    slidesToScroll: 1.5,
    speed: 500,
    arrows: false,
    // focusOnSelect: true,
    // initialSlide: selectedImage,
  };

  return (
    <Stack
      px={3}
      py={2}
      textAlign="center"
      // sx={{ display:"flex",fl}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => handleChangeSlider("left")}
          sx={StyledArrows}
          disableRipple
        >
          <ArrowBackIos sx={{ fontSize: "xxx-large" }} />
        </IconButton>
        <Box
          sx={{
            width: "65%",
            height: 355,
            mx: "auto",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={hotelDetails.gallery[selectedImage]}
            alt=""
            sx={styledImage}
          />
        </Box>

        <IconButton
          onClick={() => handleChangeSlider("right")}
          sx={StyledArrows}
          disableRipple
        >
          <ArrowForwardIos sx={{ fontSize: "xxx-large" }} />
        </IconButton>
      </Box>
      <Typography
        variant="baody2"
        component="span"
        fontWeight={500}
        py={1}
        display="block"
      >
        {selectedImage + 1}/{TotalHotelsNumber}
      </Typography>

      <Box sx={{ px: 3, py: 1 }}>
        <Slider ref={slider} {...settings}>
          {hotelDetails.gallery.map((img, index) => (
            <Box key={index} m={0.5} pr={1.25} height={75}>
              <Box
                component={Link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleChangeSlider("", index);
                }}
                sx={{
                  display: "block",
                  width: 1,
                  height: 1,
                  opacity: selectedImage === index ? 1 : 0.4,
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: 1,
                  boxShadow:
                    selectedImage === index
                      ? "0 0 0 2px rgb(0 112 193 / 60%)"
                      : null,

                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`${img}-${index}`}
                  sx={{ ...styledImage, width: 1, borderRadius: 0 }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default HotelSlider;
