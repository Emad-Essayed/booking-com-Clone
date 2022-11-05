import {
  Breadcrumbs,
  styled,
  Link as MuiLink,
  Typography,
  Box,
  Stack,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const CustomLink = styled(MuiLink)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.primary.light,
}));

const ResortMenu = ({ menuList, menuName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant="text"
        id={`${menuName}-positioned-button`}
        aria-controls={open ? `${menuName}-positioned-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownOutlined sx={{ fontSize: 14 }} />}
        sx={{
          fontSize: 12,
          fontWeight: 400,
          p: 0,
          justifyContent: "flex-start",
          verticalAlign: "text-top",
          ".MuiButton-endIcon": {
            ml: 0.0,
            "&>*:nth-of-type(1)": { fontSize: 15 },
          },
          "&:hover": {
            bgcolor: "transparent",
            textDecoration: "underLine",
          },
        }}
      >
        Resorts
      </Button>
      <Menu
        id={`${menuName}-positioned-menu`}
        aria-labelledby={`${menuName}-positioned-button`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {menuList.map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const SiteBreadCrumbs = ({ isHotelDetails }) => {
  const { hotelsData } = useSelector((state) => state.hotel);
  const { hotelDetails } = useSelector((state) => state.hotelDetails);

  return (
    <Breadcrumbs
      aria-label="Booking breadcrumbs"
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{
        "& .MuiBreadcrumbs-ol": {
          alignItems: isHotelDetails ? "flex-start" : "center",

          "& >:last-child": {
            alignSelf: "center",
          },
        },
      }}
    >
      <CustomLink component={Link} to="/" underline="hover">
        Home
      </CustomLink>

      {isHotelDetails && (
        <Stack>
          <CustomLink component={Link} to="/" underline="hover">
            All resorts
          </CustomLink>
          <ResortMenu menuList={["Aparatments"]} menuName="All resorts" />
        </Stack>
      )}

      <Stack>
        <CustomLink component={Link} to="/" underline="hover">
          {hotelsData?.country?.name}
        </CustomLink>
        {isHotelDetails && (
          <ResortMenu
            menuList={["Hotels"]}
            menuName={hotelsData?.country?.name}
          />
        )}
      </Stack>

      <Stack>
        <CustomLink component={Link} to="/" underline="hover">
          {hotelsData?.cityName}
        </CustomLink>
        {isHotelDetails && (
          <ResortMenu
            menuList={["Hotels", "Tourism", "Car hire"]}
            menuName={hotelsData?.cityName}
          />
        )}
      </Stack>

      <Typography
        color={isHotelDetails ? "#000" : "text.secondary"}
        fontSize="small"
        sx={{
          alignSelf: "center",
        }}
      >
        {isHotelDetails
          ? `${hotelDetails?.name} (Resort), ${hotelsData?.cityName} (${hotelsData?.country?.name}) deals`
          : "Search results"}
      </Typography>
    </Breadcrumbs>
  );
};

export default SiteBreadCrumbs;
