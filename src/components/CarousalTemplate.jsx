import { Box, Container, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "./CustomCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RecentSearchCard from "./RecentSearchCard";

const CustomPrevBox = styled(Box)({
  width: "2rem",
  height: "2rem",
  color: "#262626",
  boxShadow: "0 2px 8px 0 rgb(0 0 0 / 16%)",
  position: "absolute",
  left: 0,
  right: "auto",
  cursor: "pointer",
  background: "transparent",
  backgroundColor: "#FFF",
  zIndex: 100,
  borderRadius: "50%",
  display: "flex ",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-30%, -50%)",
  transition: "opacity .15s",

  "&:active": {
    boxShadow: "0 0 0 3px rgb(0 113 194 / 24%) !important",
    transform: "translate(-30%, -49%) !important",
  },
});

const CustomNexBox = styled(CustomPrevBox)({
  left: "auto",
  right: 0,
  transform: "translate(30%, -50%)",

  "&:active": {
    transform: "translate(30%, -49%) !important",
  },
});

function PrevArrow({ style, onClick, arrowsTop, activeSlide }) {
  return (
    <CustomPrevBox
      style={{
        ...style,
        top: arrowsTop,
        display: activeSlide === 0 ? "none" : "flex",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon sx={{ fontSize: "1rem" }} />
    </CustomPrevBox>
  );
}

function NextArrow({ style, onClick, arrowsTop, lastSlide, activeSlide }) {
  return (
    <CustomNexBox
      style={{
        ...style,
        top: arrowsTop,
        display: activeSlide === lastSlide ? "none" : "flex",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
    </CustomNexBox>
  );
}

const CarousalTemplate = ({
  sectionHeader,
  sectionHeaderSx,
  subSectionHeader,
  list,
  cardMediaSx,
  cardTitleSx,
  slidesToShow,
  arrowsTop,
  isRecentSearch,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: false,
    slidesToShow: Number(slidesToShow),
    swipeToSlide: true,
    lazyLoad: true,
    prevArrow: <PrevArrow arrowsTop={arrowsTop} activeSlide={activeSlide} />,
    nextArrow: (
      <NextArrow
        arrowsTop={arrowsTop}
        activeSlide={activeSlide}
        lastSlide={list.length - slidesToShow}
      />
    ),
    beforeChange: (current, next) => setActiveSlide(next),
    rows: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Number(slidesToShow - 1.5),
          lazyLoad: isRecentSearch ? false : true,
          prevArrow: "",
          nextArrow: "",
          rows: isRecentSearch ? 2 : 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        marginBottom: (theme) => theme.sectionsSpacing(theme),
        overflow: "hidden",
      }}
    >
      <Container sx={{ pr: { xs: 0, lg: 3 } }}>
        <Box mb={2}>
          <Typography
            variant="h5"
            component="h2"
            fontSize={{ xs: 16, lg: 24 }}
            fontWeight={700}
            sx={{ ...sectionHeaderSx }}
          >
            {sectionHeader}
          </Typography>
          {subSectionHeader && (
            <Typography
              variant="subtitle1"
              component="h3"
              color="text.secondary"
            >
              {subSectionHeader}
            </Typography>
          )}
        </Box>

        <Box sx={{ mx: -1 }}>
          <Slider {...settings}>
            {list.map((item, key) =>
              isRecentSearch ? (
                <Box key={key}>
                  <RecentSearchCard item={item} />
                </Box>
              ) : (
                <CustomCard
                  key={key}
                  sectionHeader={sectionHeader}
                  item={item}
                  cardMediaSx={cardMediaSx}
                  cardTitleSx={cardTitleSx}
                />
              )
            )}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default CarousalTemplate;
