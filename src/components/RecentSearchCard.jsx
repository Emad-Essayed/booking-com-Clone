import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";

const CardTitle = ({ title }) => {
  return (
    <Typography variant="body2" component="h3" fontWeight={700}>
      {title}
    </Typography>
  );
};

const CardSubTitle = ({ subTitle }) => {
  let people =
    Number(subTitle.options.adults) + Number(subTitle.options.children);
  return (
    <Typography
      variant="body2"
      component="h4"
      fontWeight={400}
      color="text.secondary"
    >
      {`
                  ${format(
                    new Date(subTitle.dates.startDate),
                    "d MMM"
                  )}-${format(
        new Date(subTitle.dates.endDate),
        "d MMM"
      )}, ${people} people

                `}
    </Typography>
  );
};

const RecentSearchCard = ({ item }) => {
  return (
    <Box key={Math.random()}>
      <Card
        sx={{
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.16)",
          borderRadius: 2,
          m: 1,
        }}
        elevation={0}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            py: 1,
            px: 2,
            "&:hover .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          }}
          disableRipple
        >
          <CardMedia
            component="img"
            image="/images/defaultSearchAvatar.gif"
            alt={item.destination.cityName}
            sx={{ width: 64, height: 64 }}
          />
          <CardContent sx={{ p: 1, pl: 0 }}>
            <CardHeader
              title={<CardTitle title={item.destination.cityName} />}
              subheader={<CardSubTitle subTitle={item} />}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default RecentSearchCard;
