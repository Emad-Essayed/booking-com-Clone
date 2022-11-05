import { Box, Rating, styled, SvgIcon, Typography } from "@mui/material";
import React from "react";
import ToolTipTemplate from "./ToolTipTemplate";

const PreferredPlus = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 28.52 18"
      sx={{
        display: "inline-block",
        width: "32.5px",
        height: "20px",
        ml: 0.2,
        cursor: "help",
        verticalAlign: "middle",
      }}
    >
      <rect width="28.52" height="18" fill="#febb02" rx="1.22" ry="1.22"></rect>
      <path
        fill="#fff"
        d="M12.27 13.26H6.76V7.43l1.29-3.89c.65-2.27 2.6-1.62 1.95.32l-.65 2.27h4.22a1.19 1.19 0 0 1 1 1.94 1.36 1.36 0 0 1 0 1.95A1.41 1.41 0 0 1 13.9 12s0 1.26-1.63 1.26zm-9.44 0V7.42H6v5.84zm17.36-9.09a2 2 0 0 0-.1.91v1.49h-1.48a2.29 2.29 0 0 0-.92.09.93.93 0 0 0-.38.38 2.29 2.29 0 0 0-.09.92v.09a2.23 2.23 0 0 0 .09.91.87.87 0 0 0 .38.38 2.08 2.08 0 0 0 .92.1h1.48v1.48a2.08 2.08 0 0 0 .1.92.87.87 0 0 0 .38.38 2.23 2.23 0 0 0 .91.09h.1a2.23 2.23 0 0 0 .91-.09.87.87 0 0 0 .38-.38 2.08 2.08 0 0 0 .1-.92V9.44h1.48a2 2 0 0 0 .91-.1.78.78 0 0 0 .38-.34 2 2 0 0 0 .1-.91V8a2.08 2.08 0 0 0-.1-.92.82.82 0 0 0-.38-.38 2.21 2.21 0 0 0-.91-.09H23V5.08a2 2 0 0 0-.1-.91.78.78 0 0 0-.38-.38 2 2 0 0 0-.91-.1h-.1a2 2 0 0 0-.91.1.78.78 0 0 0-.41.38z"
      ></path>
    </SvgIcon>
  );
};
const TootTipetext = styled(Typography)({
  fontSize: "0.8125rem",
  lineHeight: 1.8,
  color: "#FFF",
});

const RatingTemplate = ({ starsRate, max = 5, hideRecommendation }) => {
  return (
    <Box component="span">
      <Rating
        name="size-small"
        value={starsRate}
        size="small"
        max={max}
        readOnly
        sx={{ cursor: "help", verticalAlign: "middle" }}
      />
      {!hideRecommendation && (
        <ToolTipTemplate
          arrow
          title={
            <TootTipetext variant="body2" component="div">
              This is Preferred Plus Property. Preferred Plus partenrs are
              committed to providing guests with outstanding service and
              excellent value. They may pay Booking.com a bit more to be in this
              program.
            </TootTipetext>
          }
        >
          <Box component="span">
            <PreferredPlus sx={{ pointerEvents: "none" }} />
          </Box>
        </ToolTipTemplate>
      )}
    </Box>
  );
};

export default RatingTemplate;
