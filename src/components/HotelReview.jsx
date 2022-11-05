import {
  Box,
  Stack,
  Link as MuiLink,
  Typography,
  styled,
  Chip,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const CustomeChip = styled(Chip)({
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  height: "auto",
  pointerEvents: "none",

  "& .MuiChip-label": {
    padding: 5,
    fontSize: "0.975rem",
    fontWeight: 500,
  },
});

const SharedTypography = {
  fontSize: "12px",
};

const CustomTypography = styled(Typography)({
  ...SharedTypography,
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: "inherit",

  "&::after": {
    content: '"."',
    display: "inline-block",
    verticalAlign: "middle",
    padding: "0 8px",
    textDecoration: "none",
    transform: "translateY(-6px) scale(1.8) ",
    color: "lightgray",
  },
});

const HotelReview = ({
  reviewDegree,
  reviwers,
  rateNumber,
  ishotelDetails,
}) => {
  return (
    <MuiLink component={Link} to="#" underline="none">
      <Stack direction="row" alignItems="center" gap={1}>
        <Box
          display={{ xs: "flex", lg: "block" }}
          order={{ xs: 2, lg: ishotelDetails ? 2 : 1 }}
        >
          <CustomTypography
            component="div"
            color="#262626 !important"
            fontSize={{ xs: 12, lg: 16 }}
            lineHeight={1.2}
            sx={{
              "&::after": {
                display: { xs: "inline-block", lg: "none" },
              },
            }}
          >
            {reviewDegree}
          </CustomTypography>

          <Typography
            component="div"
            fontSize={12}
            color="text.secondary"
            lineHeight={1.2}
            sx={{ whiteSpace: "nowrap" }}
          >
            {reviwers} reviews
          </Typography>
        </Box>
        <CustomeChip
          label={rateNumber}
          color="primary"
          sx={{ order: { xs: 1, lg: ishotelDetails ? 1 : 2 } }}
        />
      </Stack>
    </MuiLink>
  );
};

export default HotelReview;
