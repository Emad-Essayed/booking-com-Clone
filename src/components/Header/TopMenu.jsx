import {
  Avatar,
  Badge,
  Button,
  Drawer,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoIcon, QuestionMarkIcon } from "../IconsRep";
import { Link, useNavigate } from "react-router-dom";
import { NavigateBefore } from "@mui/icons-material";
import MobileMenu from "./MobileMenu";

const btnsHover = { backgroundColor: "#00487a" };

const HomePageLogo = () => {
  return (
    <IconButton component={Link} to="/" aria-label="Booking.com logo">
      <LogoIcon />
    </IconButton>
  );
};

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="pervious page"
      sx={{ color: "#FFF" }}
      onClick={() => navigate(-1)}
    >
      <NavigateBefore fontSize={"large"} />
    </IconButton>
  );
};

const IconBtns = styled(IconButton)({
  padding: "12px 24px",
  height: "48px",
  width: " 48px",
  lineHeight: " 24px",
  color: "#FFF",
  fontFamily: "inherit",
  fontsize: "1rem",
  borderRadius: "0",
  "&:hover": btnsHover,
});

const ListPropertyBtn = styled(Button)({
  backgroundColor: "transparent",
  color: "#FFF",
  border: "1px solid #FFF",
  fontFamily: "inherit",
  fontWeight: "500",

  "&:hover": btnsHover,
});

const TopMenuBtns = styled(Button)({
  fontWeight: "600",
  fontFamily: "inherit",
});

const CustomBadge = styled(Badge)({
  ".MuiBadge-badge": {
    top: "3px",
    right: "4px",
  },
});

const TopMenu = ({ showBackBtn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Toolbar component="nav">
      <Stack direction="row" alignItems="center" width={1}>
        <Box flexGrow={2}>{showBackBtn ? <BackBtn /> : <HomePageLogo />}</Box>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <IconBtns aria-label="Currency">
            <Typography
              variant="subtitle1"
              copmonent="span"
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#FFF",
              }}
            >
              EGP
            </Typography>
          </IconBtns>

          <IconBtns aria-label="country">
            <Avatar
              src="/images/flag.png"
              alt="language"
              sx={{ width: 24, height: 24 }}
            />
          </IconBtns>

          <IconBtns
            aria-label="Tips"
            sx={{
              p: 1,
            }}
          >
            <QuestionMarkIcon />
          </IconBtns>
          <ListPropertyBtn>List you property</ListPropertyBtn>
          <TopMenuBtns variant="whiteBtn">Register</TopMenuBtns>
          <TopMenuBtns variant="whiteBtn">Sign in</TopMenuBtns>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0}
          sx={{ display: { xs: "flex", lg: "none" } }}
        >
          <IconBtns
            aria-label="user profile"
            sx={{
              p: "8px",
            }}
          >
            <CustomBadge variant="dot" color="error">
              <AccountCircleOutlinedIcon />
            </CustomBadge>
          </IconBtns>

          <IconBtns
            aria-label="mobile menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconBtns>
          <Drawer
            anchor="bottom"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />
          </Drawer>
        </Stack>
      </Stack>
    </Toolbar>
  );
};

export default TopMenu;
