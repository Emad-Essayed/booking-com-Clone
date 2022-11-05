import { ArrowDropDown, ImportExport } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Stack,
  styled,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "./DestinationSearch";
import { nightsStay } from "../../utils";
import { useContext } from "react";
import { InputsSearch } from "../../context";

const CalenderIcon = () => {
  return (
    <SvgIcon
      id="icon-streamline-calendar"
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      sx={{ width: "16px", height: "16px" }}
    >
      <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path>
    </SvgIcon>
  );
};

const PersonIcon = () => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      sx={{ width: "16px", height: "16px" }}
    >
      <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
    </SvgIcon>
  );
};

const IsWorkIcon = () => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      sx={{ width: "16px", height: "16px" }}
    >
      <path d="M22.5 14.249v4.5a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25v-9a2.25 2.25 0 0 1 2.25-2.25h16.5a2.25 2.25 0 0 1 2.25 2.25v4.5zm1.5 0v-4.5a3.75 3.75 0 0 0-3.75-3.75H3.75A3.75 3.75 0 0 0 0 9.749v9a3.75 3.75 0 0 0 3.75 3.75h16.5a3.75 3.75 0 0 0 3.75-3.75v-4.5zm-18-7.5v15a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-1.5 0zm10.5 0v15a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-1.5 0zm0 0v-3a2.25 2.25 0 0 0-2.25-2.25h-4.5a2.25 2.25 0 0 0-2.25 2.25v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0z"></path>
    </SvgIcon>
  );
};

const FilterIcon = () => {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ width: "16px", height: "16px" }}>
      <path d="M.75 4.5h16.34a3.5 3.5 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM20.5 1.75a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm2.75 17.75H9.46a3.5 3.5 0 0 0-6.83 0H.75a.75.75 0 0 0 0 1.5h1.88a3.5 3.5 0 0 0 6.83 0h13.79a.75.75 0 0 0 0-1.5zm-17.2 2.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM23.25 11h-7.84a3.49 3.49 0 0 0-6.82 0H.75a.75.75 0 0 0 0 1.5h7.84a3.49 3.49 0 0 0 6.82 0h7.84a.75.75 0 0 0 0-1.5zM12 13.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path>
    </SvgIcon>
  );
};

const MapIcon = () => {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ width: "16px", height: "16px" }}>
      <path d="M24 9V4.65c0-.92-.56-1.748-1.415-2.09l-6-2.4a2.25 2.25 0 0 0-1.67 0L8.527 2.717a.75.75 0 0 1-.557 0L2.058.35A1.5 1.5 0 0 0 0 1.75v14.369c0 .92.56 1.748 1.415 2.09l6 2.4a2.25 2.25 0 0 0 1.67 0l2.882-1.154a.75.75 0 0 0-.558-1.392l-2.88 1.153a.75.75 0 0 1-.558 0l-6-2.4a.75.75 0 0 1-.471-.697V1.746v-.004l5.914 2.366a2.25 2.25 0 0 0 1.671 0l6.387-2.555a.75.75 0 0 1 .557 0l6 2.4a.75.75 0 0 1 .471.697V9A.75.75 0 0 0 24 9zM7.5 3.519v16.5a.75.75 0 0 0 1.5 0v-16.5a.75.75 0 0 0-1.5 0zM15 .75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3.75 15.449a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.374c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.374c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zm.375-3.75a3.75 3.75 0 0 1 3.75 3.75c0 1.302-1.618 3.948-3.75 6.676-2.13-2.722-3.75-5.374-3.75-6.676a3.75 3.75 0 0 1 3.75-3.75zm0-1.5a5.25 5.25 0 0 0-5.25 5.25c0 1.798 1.68 4.548 4.068 7.6a1.498 1.498 0 0 0 2.364 0c2.391-3.06 4.068-5.802 4.068-7.6 0-2.9-2.35-5.25-5.25-5.25z"></path>
    </SvgIcon>
  );
};

const SearchSummary = () => {
  const { destination, dates, options, extraOptions } =
    useContext(InputsSearch);

  const nightsStayNo = nightsStay(dates.endDate, dates.startDate);

  const MenuButton = styled(Button)(({ theme }) => ({
    flexGrow: 1,
    padding: "4px 8px",

    color: theme.palette.primary.light,
  }));

  const [scrollDirection, setScrollDirection] = useState("standard");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction =
        lastScrollY < 190 ? "standard" : scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  const stickNav = {
    position: "sticky",
    top: 0,
    opacity: 1,
    boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.16)",
    bgcolor: "#FFF",
    transition: "opacity .3s ease",
    zIndex: 9999,
  };

  const relativeNav = {
    position: "relative",
    opacity: 1,
    boxShadow: "none",
    bgcolor: "#FFF",
    transition: "opacity .3s ease",
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "yellowborder.main",
          p: 2,
          boxShadow:
            "inset 0 -1px 2px -1px rgb(0 0 0 / 10%), 0 1px 0 rgb(255 255 255 / 25%)",
        }}
      >
        <MuiLink
          component={Link}
          to="/listProperies/search"
          underline="none"
          sx={{
            display: "inline-block",
            width: 1,
            bgcolor: "#FFF",
            border: "1px solid  #cd8900",
            boxShadow: "0 1px 3px -1px rgb(0 0 0 / 30%)",
            borderRadius: "3px 3px 0 0",
            color: "primary.light",
          }}
        >
          <Container>
            <Stack
              direction="row"
              py={1.25}
              gap={1}
              alignItems="center"
              borderRadius={"3px 3px 0 0"}
            >
              <SearchIcon color="primary.light" width="16px" />
              <Typography
                variant="subtitle1"
                component="h1"
                fontWeight={700}
                sx={{ whiteSpace: "nowrap" }}
              >
                {destination?.cityName}
              </Typography>
            </Stack>
          </Container>

          <Box
            py={0.5}
            borderRadius={"0 0 3px 3px "}
            bgcolor="#f4f4f4"
            borderTop={"solid 1px #ddd"}
            boxShadow={"inset 0 1px 2px -1px rgb(0 0 0 / 10%)"}
            overflow={"hidden"}
          >
            <Container>
              <Stack
                direction="row"
                rowGap={1}
                columnGap={2}
                alignItems="center"
                flexWrap="wrap"
                sx={{ textShadow: "0 1px 0 #fff" }}
              >
                <Stack direction="row" alignItems="center" gap={1}>
                  <CalenderIcon />

                  <Typography variant="body2">
                    {`${format(dates?.startDate, "MMM d")} - ${format(
                      dates?.endDate,
                      "MMM d"
                    )}`}

                    <Typography
                      variant="body2"
                      component="span"
                      pl={0.5}
                      fontWeight={700}
                    >
                      {`(${nightsStayNo} ${
                        nightsStayNo > 1 ? "nights" : "night"
                      })`}
                    </Typography>
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <PersonIcon />

                  <Typography variant="body2" pl={1}>
                    {`${options?.adults} ${
                      options?.adults === 1 ? "adult" : "adults"
                    } `}
                  </Typography>

                  {options?.children > 0 && (
                    <Typography variant="body2">
                      {`, ${options?.children} ${
                        options?.children === "1" ? "child" : "children"
                      }`}
                    </Typography>
                  )}
                </Stack>

                {extraOptions?.isWork && (
                  <Stack direction="row" alignItems="center" gap={1}>
                    <IsWorkIcon />

                    <Typography variant="body2">Business traveler</Typography>
                  </Stack>
                )}

                {options?.rooms > 1 && (
                  <Stack direction="row" alignItems="center" gap={0.5}>
                    <ArrowDropDown
                      sx={{ width: 26, height: 26 }}
                    ></ArrowDropDown>
                    <Typography variant="body2">{`${options?.rooms} rooms`}</Typography>
                  </Stack>
                )}
              </Stack>
            </Container>
          </Box>
        </MuiLink>
      </Box>

      <Toolbar
        component="nav"
        sx={
          scrollDirection === "standard"
            ? relativeNav
            : scrollDirection === "down"
            ? { ...relativeNav, opacity: 0 }
            : stickNav
        }
      >
        <Container>
          <Stack direction="row" alignItems="center" minHeight={50}>
            <MenuButton
              variant="text"
              startIcon={<ImportExport />}
              sx={{
                py: 0,
                "&.MuiButton-root:hover": {
                  backgroundColor: "transparent",
                  cursor: "default",
                },
              }}
            >
              Sort
            </MenuButton>
            <MenuButton variant="text" startIcon={<FilterIcon />}>
              Fliter
            </MenuButton>
            <MenuButton variant="text" startIcon={<MapIcon />}>
              Map
            </MenuButton>
          </Stack>
        </Container>
      </Toolbar>
    </>
  );
};

export default SearchSummary;
