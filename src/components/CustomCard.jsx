import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const CustomeChip = styled(Chip)({
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  height: "auto",
  marginRight: 5,

  "& .MuiChip-label": {
    padding: 5,
    fontSize: "0.75rem",
    fontWeight: 500,
  },
});

const defFontFamily =
  "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif";

const CustomCard = ({
  item,
  cardContentSx,
  cardMediaSx,
  cardTitleSx,
  cardSubtitleSx,
  Cardtransition,
}) => {
  const { title1, subtitle1, imageSrc, title2, rate, subtitle2, flagSrc } =
    item;

  const rateDescription = (no) => {
    if (no < 6) return "Poor";
    else if (no >= 6 && no < 9) return "Excellent";
    else if (no >= 9 && no < 9.5) return "Wonderful";
    else if (no >= 9.5) return "Exceptional";
  };

  return (
    <Card
      elevation={0}
      sx={{
        overflow: "initial",
        width: 1,
        height: 1,
        position: "relative",
        px: 0.9375,
        boxSizing: "border-box",

        "&:hover .MuiCardMedia-root img": {
          ...Cardtransition,
        },
      }}
    >
      <CardActionArea sx={{ height: 1 }} disableRipple>
        <CardMedia
          component="div"
          sx={{
            position: "relative",
            paddingBottom: "calc(100% / 1.25)",
            overflow: "hidden",
            borderRadius: "2px",
            ...cardMediaSx,
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt={title1}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: 1,
              height: 1,
              maxWidth: 1,
              maxHeight: 1,
              transition: "transform 300ms",
            }}
          />
        </CardMedia>

        <CardContent sx={{ p: "10px 0", ...cardContentSx }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: defFontFamily,
              ...cardTitleSx,
            }}
          >
            {title1}

            {flagSrc && (
              <Avatar
                alt={`${title1} flag`}
                src={flagSrc}
                variant="square"
                sx={{ width: 24, height: 24, marginTop: ".5rem" }}
              />
            )}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "inherit",
              fontSize: ".75rem",
              fontWeight: 500,
              ...cardSubtitleSx,
            }}
          >
            {subtitle1}
          </Typography>

          {title2 && (
            <Typography
              variant="body2"
              component="h6"
              mt={1}
              gutterBottom
              fontWeight={700}
            >
              {title2}
            </Typography>
          )}

          {subtitle2 && (
            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
              sx={{
                fontSize: ".75rem",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              }}
            >
              {rate && (
                <Box mr={1}>
                  <CustomeChip label={rate} color="primary" />
                  <Typography
                    variant="subtitle2"
                    component="span"
                    fontWeight={700}
                    sx={{ color: "rgba(0, 0, 0, 0.87)" }}
                  >
                    {rateDescription(rate)}
                  </Typography>
                </Box>
              )}

              {subtitle2 && subtitle2}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
