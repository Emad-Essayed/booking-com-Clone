import { IconButton, SvgIcon } from "@mui/material";
import React from "react";

const CloseIcon = () => {
  return (
    <SvgIcon
      data-width="24"
      height="24"
      role="presentation"
      width="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      sx={{ pointerEvents: "none" }}
    >
      <path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
    </SvgIcon>
  );
};

const CloseButton = ({ onClick, sx }) => {
  return (
    <IconButton
      aria-label="close"
      sx={{
        color: "#000",
        position: "absolute",
        right: 5,
        top: 5,
        borderRadius: 0,
        fontSize: "small",

        "&:hover": {
          bgcolor: "transparent",
        },
        ...sx,
      }}
      onClick={onClick}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
