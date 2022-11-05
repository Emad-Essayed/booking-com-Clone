import { Masonry } from "@mui/lab";
import { ImageListItem, keyframes } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const getAnimation = keyframes`
    0%  {box-shadow:  0 0 0 1px rgb(0 113 194), 0 0 0 1px rgb(0 113 194 / 50%)} 
    100% { box-shadow: 0 0 0 2px rgb(0 113 194), 0 0 0 6px rgb(0 113 194 / 50%)}
`;

const standredStyle = {
  border: "1px solid #e6e6e6",
  borderRadius: 1,

  cursor: "pointer",
  overflow: "hidden",

  "& > img": {
    borderRadius: 1,
    maxWidth: 1,
    maxHeight: 1,
    transition: "all .2s ease",
  },

  "&:hover>img": {
    transform: "scale(1.1)",
  },
};

const selectedStyle = {
  animation: `${getAnimation} .5s ease-in-out infinite alternate`,
};

const HotelImagesList = ({
  selectedImage,
  setSelectedImage,
  setOpenSlider,
}) => {
  const { hotelDetails } = useSelector((state) => state.hotelDetails);

  const ref = useRef();

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setOpenSlider(true);
  };

  useEffect(() => {
    setTimeout(() => ref && ref.current.scrollIntoView(false), 200);
  }, [selectedImage]);

  return (
    <>
      <Masonry columns={3} spacing={1} sx={{ pt: 1, px: 1 }}>
        {hotelDetails?.gallery.map((img, index) => {
          const customStyle =
            index === selectedImage
              ? { ...standredStyle, ...selectedStyle }
              : { ...standredStyle };

          return (
            <ImageListItem
              key={`${img}${index}`}
              sx={{ ...customStyle }}
              ref={index === selectedImage ? ref : null}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={img}
                // src="/images/properties list/Magic World Sharm.webp"
                alt={`${hotelDetails.name} ${index}`}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </Masonry>
    </>
  );
};

export default HotelImagesList;
