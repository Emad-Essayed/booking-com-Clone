import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HotelReview, { CustomeChip } from "../HotelReview";
import HotelGallary from "./HotelGallary";
import TestiFooter from "./TestiFooter";

const swapElements = (arr, index1, index3) => {
  arr[index1] = arr.splice(index3, 1, arr[index1])[0];
  return arr.splice(0, 8);
};

const ReviewSliderButton = ({ direction }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 26,
        left: direction === "left" ? 0 : "auto",
        right: direction === "right" ? 0 : "auto",
        width: "1em",
        height: 48,
        bgcolor: "#FFF",
        borderRadius: direction === "left" ? "0 2em 2em 0" : "2em 0 0 2em",
        cursor: " pointer",
        opacity: 0.85,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 18,
          left: direction === "left" ? -4 : "auto",
          right: direction === "right" ? -4 : "auto",
          width: 0,
          height: 0,
          border: "6px solid transparent",
          borderRightColor:
            direction === "left" ? "primary.light" : "transparent",
          borderLeftColor:
            direction === "right" ? "primary.light" : "transparent",

          overflow: " hidden",
        }}
      />
    </Box>
  );
};

const MorePhotos = ({ photosNumber }) => {
  return (
    <Typography
      component="span"
      sx={{
        color: "#FFF",
        borderBottom: "1px solid rgba(255,255,255,0.5)",
        fontSize: "1.2em",
        fontWeight: "Bold",
      }}
    >
      +{photosNumber} photos
    </Typography>
  );
};

const HotelDetails = () => {
  const { hotelDetails } = useSelector((state) => state.hotelDetails);
  // console.log(hotelDetails);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(-1);

  const handleOpenModal = (e, index) => {
    e.preventDefault();
    setOpenModal(true);
    const resawpedIndex = index === 0 ? 1 : index === 1 ? 0 : index;
    setSelectedImage(resawpedIndex);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box position="relative">
      {hotelDetails?.gallery && (
        <>
          <ImageList
            variant="quilted"
            cols={5}
            rowHeight={100}
            gap={8}
            component="div"
            sx={{
              mt: 1,
              ml: -0.5,
              "&:hover + div": {
                opacity: 0,
              },
            }}
          >
            {swapElements([...hotelDetails?.gallery], 0, 1).map(
              (img, index) => (
                <ImageListItem
                  key={`${img}${index}`}
                  cols={index === 1 ? 3 : index === 0 || index === 2 ? 2 : 1}
                  rows={index === 1 ? 4 : index === 0 || index === 2 ? 2 : 1}
                  component={Link}
                  to="#"
                  onClick={(e) => handleOpenModal(e, index)}
                >
                  <img
                    src={img}
                    // src="/images/properties list/Magic World Sharm.webp"
                    alt={`${hotelDetails.name} ${index}`}
                    loading="lazy"
                  />
                  {index === 7 && (
                    <ImageListItemBar
                      title={
                        <MorePhotos
                          photosNumber={hotelDetails?.gallery.length}
                        />
                      }
                      sx={{
                        top: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ".MuiImageListItemBar-title": { textAlign: "center" },
                      }}
                    />
                  )}
                </ImageListItem>
              )
            )}
          </ImageList>

          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              p: 1.25,
              width: "17em",
              transition: "opacity 300ms",
            }}
          >
            <Box bgcolor="#FFF" p={1.25} mb={1.25}>
              <Box width={"fit-content"} ml={"auto"}>
                <HotelReview
                  reviewDegree={hotelDetails?.review?.reviewDegree}
                  reviwers={hotelDetails?.review?.reviwers}
                  rateNumber={hotelDetails?.review?.rateNumber}
                />
              </Box>
            </Box>

            <Box bgcolor="#FFF" mb={1.25} position="relative">
              <Box sx={{ bgcolor: "#ebf3ff", px: 3, py: 1 }}>
                <ReviewSliderButton direction="left" />
                <Typography variant="body2">
                  The grounds are beautiful, staff are all super friendly and
                  attentive and very helpful. The food had lots of choice and
                  was of high quality, really liked the live cooking stations.
                </Typography>
                <ReviewSliderButton direction="right" />
              </Box>

              <TestiFooter />
            </Box>

            <Box bgcolor="#FFF" p={1.25}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                gap="4%"
              >
                <Typography
                  variant="body1"
                  component="div"
                  fontWeight={500}
                  sx={{ color: "#262626" }}
                >
                  Top-rated beach nearby
                </Typography>
                <CustomeChip
                  label="8.6"
                  sx={{ bgcolor: "transparent", border: "1px solid #333" }}
                />
              </Stack>
            </Box>
          </Box>
        </>
      )}
      {openModal && (
        <HotelGallary
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          hotelDetails={hotelDetails}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </Box>
  );
};

export default HotelDetails;
