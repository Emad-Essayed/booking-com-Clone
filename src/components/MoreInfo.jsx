import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";
import { Link } from "react-router-dom";
import { AirportTaxiIcon, AttractionsIcon, CarRentalIcon } from "./IconsRep";

const info = [
  {
    title: "Book now, PAY AT THE PROPERTY",
    subtitle: "With FREE cancellation on most rooms",
  },
  {
    title: "2,563,380 properties in 226 countries",
    subtitle: "Hotels, guesthouses, motels, and more…",
  },
];

const hotServices = [
  {
    title: "Rent a car",
    subtitle: "Hundreds of cars and 24/7 customer service",
    href: "#",
    icon: <CarRentalIcon />,
  },
  {
    title: "Book an airport taxi",
    subtitle: "A driver will be waiting to take you to your stay",
    href: "#",
    icon: <AirportTaxiIcon />,
  },
  {
    title: "Find things to do",
    subtitle:
      "Instant confirmation, digital tickets, and verified customer reviews",
    href: "#",
    icon: <AttractionsIcon />,
  },
];

const MoreInfo = () => {
  return (
    <Box>
      <List sx={{ width: "100%", p: 0, mb: 2 }}>
        {info.map(({ title, subtitle }, key) => (
          <ListItem
            key={key}
            sx={{
              width: 1,
              bgcolor: "background.paper",
              borderTop: "1px solid #e0e0e0",
              borderRadius: "2px",
              alignItems: "flex-start",
              p: 2,
            }}
          >
            <ListItemIcon>
              <DoneIcon fontSize="large" sx={{ color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  component="h2"
                  fontWeight={700}
                  mb={0.8}
                >
                  {title}
                </Typography>
              }
              secondary={<Typography variant="body2">{subtitle}</Typography>}
              sx={{ my: 0 }}
            />
          </ListItem>
        ))}
        <Divider sx={{ borderColor: "#e0e0e0" }} />
      </List>

      <List sx={{ width: "100%", p: 0 }}>
        {hotServices.map(({ title, subtitle, href, icon }, key) => (
          <ListItem
            key={key}
            component={Link}
            to={href}
            sx={{
              width: 1,
              bgcolor: "background.paper",
              borderTop: "1px solid #e0e0e0",
              borderRadius: "2px",
              alignItems: "center",
              p: 2,
            }}
          >
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.primary.light }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle2"
                  component="h2"
                  fontWeight={700}
                  sx={{ lineHeight: 1.5 }}
                >
                  {title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" fontSize={12}>
                  {subtitle}
                </Typography>
              }
              sx={{ my: 0 }}
            />
          </ListItem>
        ))}
        <Divider sx={{ borderColor: "#e0e0e0" }} />
      </List>
    </Box>
  );
};

export default MoreInfo;
