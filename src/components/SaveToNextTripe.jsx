import { Checkbox, styled, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import ToolTipTemplate from "./ToolTipTemplate";

const FavCheckBox = styled(Checkbox)({
  top: 0,
  right: 0,
  zIndex: 100,

  "& .MuiSvgIcon-root": {
    fontSize: 28,
    strokeWidth: 1.5,
    filter: "drop-shadow(0 2px 1.5px rgba(0,0,0,.5))",
  },
});

const TootTipetext = styled(Typography)({
  fontSize: "0.8125rem",
  lineHeight: 1.8,
  color: "#FFF",
});

const SaveToNextTripe = ({ isHotelDetails }) => {
  const [isListed, setIsListed] = useState(false);

  const handleCheckBox = (e) => {
    setIsListed(e.target.checked);
  };

  return (
    <ToolTipTemplate
      title={
        <TootTipetext variant="body2" component="div">
          {isListed ? "This property is to 1 of your lists" : "Save"}
        </TootTipetext>
      }
      sx={{
        "&.MuiTooltip-popper[data-popper-placement*='top'] .MuiTooltip-tooltip":
          { marginBottom: 0 },
      }}
    >
      <FavCheckBox
        // label="save to next tripe"
        sx={{
          color: isHotelDetails
            ? { xs: "#6b6b6b", lg: "primary.light" }
            : "#FFF",
          position: isHotelDetails ? "relative" : "absolute",
        }}
        icon={<FavoriteBorderIcon siz="large" />}
        checkedIcon={
          <FavoriteIcon siz="large" sx={{ fill: "red", stroke: "#FFF" }} />
        }
        onChange={handleCheckBox}
        inputProps={{
          "aria-label": "save to next tripe",
        }}
      />
    </ToolTipTemplate>
  );
};

export default SaveToNextTripe;
