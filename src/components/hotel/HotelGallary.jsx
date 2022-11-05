import { Close, KeyboardBackspace, South } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import HotelReview from "../HotelReview";
import RatingTemplate from "../RatingTemplate";
import Category from "./Category";
import HotelImagesList from "./HotelImagesList";
import HotelSlider from "./HotelSlider";
import Testimonials from "./Testimonials";

const leftSideStyle = {
  position: "fixed",
  top: 0,
  left: 32,
  right: 280,
  bottom: 0,
  my: 2,
  mr: 4,
  bgcolor: "background.paper",
  borderRadius: 0.5,
};

const rightSideStyle = {
  ...leftSideStyle,
  top: 62,
  left: "auto",
  right: 32,
  bottom: 0,
  width: 280,
  my: 2,
  mr: 0,
  bgcolor: "background.paper",
  borderRadius: 0.5,
  borderLeft: "1px solid #e6e6e6",
};

const categories = [
  { name: "staff", value: 8.9 },
  { name: "Facilities", value: 8.8 },
  { name: "Cleanliness", value: 8.9 },
  { name: "Comfort", value: 9.0 },
  { name: "Value for money", value: 8.7 },
  { name: "Location", value: 8.7 },
  { name: "Free WiFi ", value: 4.2 },
];

const HotelGallary = ({
  openModal,
  handleCloseModal,
  selectedImage,
  setSelectedImage,
}) => {
  const { hotelDetails } = useSelector((state) => state.hotelDetails);
  const [openSlider, setOpenSlider] = useState(false);

  return (
    <Modal
      aria-labelledby="photos-gallery"
      aria-describedby="hotel-photo-gallery"
      open={openModal}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={openModal}>
        <Box>
          <Stack sx={leftSideStyle}>
            <Stack
              direction="row"
              alignItems="center"
              px={2}
              sx={{
                width: "calc(100% + 280px)",
                bgcolor: "background.paper",
                borderBottom: "1px solid #e6e6e6",
              }}
            >
              {openSlider && (
                <Button
                  size="large"
                  startIcon={<KeyboardBackspace />}
                  onClick={() => setOpenSlider(false)}
                  sx={{
                    color: "#333",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "primary.main",
                    },
                  }}
                >
                  Gallery
                </Button>
              )}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                py={1.5}
                flexGrow={1}
              >
                <Typography variant="body1" component="div" fontWeight={700}>
                  {hotelDetails.name}
                </Typography>

                {hotelDetails?.starsRate && (
                  <Box ml={0.5} mr={1}>
                    <RatingTemplate
                      starsRate={parseInt(hotelDetails?.starsRate)}
                      max={parseInt(hotelDetails?.starsRate)}
                      hideRecommendation
                    />
                  </Box>
                )}
                <Button variant="contained" sx={{ borderRadius: 0.5 }}>
                  Reserve now
                </Button>
              </Stack>
              <Button
                size="large"
                endIcon={<Close />}
                onClick={handleCloseModal}
                sx={{
                  color: "#333",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "primary.light",
                  },
                }}
              >
                Close
              </Button>
            </Stack>

            <Box flexGrow={1} px={2} sx={{ overflowY: "scroll" }}>
              {openSlider ? (
                <HotelSlider
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              ) : (
                <HotelImagesList
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  setOpenSlider={setOpenSlider}
                />
              )}
            </Box>
          </Stack>

          <Stack sx={rightSideStyle}>
            <Box
              sx={{
                p: 2,
                borderBottom: "1px solid #e6e6e6",
                boxShadow: "0 2px 4px rgb(0 0 0 / 5%)",
              }}
            >
              <HotelReview
                reviewDegree={hotelDetails.review.reviewDegree}
                reviwers={hotelDetails.review.reviwers}
                rateNumber={hotelDetails.review.rateNumber}
                ishotelDetails={true}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 62,
                bottom: 0,
                px: 2,
                overflowY: "auto",
              }}
            >
              <Typography variant="body2" fontWeight={500} pt={2}>
                What guests loved the most:
              </Typography>
              {[...Array(8)].map((item, index) => (
                <Testimonials key={index} />
              ))}

              <Box py={2}>
                <Typography variant="h6" component="h3" pb={2}>
                  Categories
                </Typography>
                <Box>
                  {categories.map(({ name, value }) => (
                    <Category key={name} name={name} value={value} />
                  ))}
                </Box>
              </Box>

              <Typography
                fontSize={12}
                component="div"
                pb={2.5}
                sx={{ color: "#6b6b6b", textAlign: "right" }}
              >
                <South
                  sx={{
                    fontSize: "1.2rem",
                    color: "redColor.main",
                    verticalAlign: "middle",
                  }}
                />
                Low score for Sharm El Sheikh
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default HotelGallary;
