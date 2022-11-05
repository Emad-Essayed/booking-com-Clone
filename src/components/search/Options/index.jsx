import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Stack, SvgIcon } from "@mui/material";
import React, { useContext, useState } from "react";
import { MediaScreenContext } from "../../../context";
import Option from "./Option";
import OptionsLayouts from "./OptionsLayouts";

const LeftIcon = () => {
  return (
    <SvgIcon
      viewBox="0 0 16 18"
      version="1.1"
      sx={{
        width: "16px",
        height: "18px",
        color: "lightgray",
        mr: 1.5,
        verticalAlign: "middle",
      }}
    >
      <title>Group 5 Copy 5</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Desktop"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-850.000000, -388.000000)"
      >
        <g id="Group-4" transform="translate(189.000000, 367.000000)">
          <g id="Group-5-Copy-5" transform="translate(657.000000, 18.000000)">
            <rect id="Rectangle-4" x="0" y="0" width="24" height="24" />
            <g
              id="occupancy"
              transform="translate(4.000000, 3.000000)"
              fill="#BDBDBD"
              fillRule="nonzero"
            >
              <path
                d="M11.8868966,4.0978125 C11.8868966,6.3658125 10.086069,8.1984375 7.86482759,8.1984375 C5.64358621,8.1984375 3.84275862,6.3658125 3.84275862,4.0978125 C3.8422069,1.8331875 5.64358621,0 7.86427586,0 C10.0849655,0 11.8868966,1.8331875 11.8868966,4.0978125 Z"
                id="Shape"
              />
              <path
                d="M14.5533793,10.8106875 C13.4273103,10.2751875 10.7216552,9.952875 7.91337931,9.963 L7.808,9.963 C5.00358621,9.954 2.29793103,10.2751875 1.17131034,10.8106875 C0.499862069,11.122875 -0.0110344828,11.9295 0.0684137931,12.6765 L0.343172414,18 L15.3804138,18 L15.6557241,12.6765 C15.7329655,11.9289375 15.2215172,11.1234375 14.5533793,10.8106875 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

const OptionsRightIcon = () => {
  return (
    <SvgIcon
      width="8px"
      height="12px"
      viewBox="0 0 8 12"
      version="1.1"
      sx={{
        width: "auto",
        height: "auto",
        display: { xs: "none", lg: "inline-block" },
      }}
    >
      <title>arrows</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Index-autocomplete"
          transform="translate(-652.000000, -407.000000)"
          stroke="#0077CC"
          strokeWidth="1.5"
        >
          <g id="search" transform="translate(188.000000, 332.000000)">
            <g id="Group-11" transform="translate(1.000000, 50.000000)">
              <g id="Group-12">
                <g id="Group-3" transform="translate(4.000000, 4.000000)">
                  <g id="Group-2">
                    <g id="arrows" transform="translate(460.000000, 22.000000)">
                      <polyline
                        id="Path-2"
                        points="0 3 3.03427697 0 6 2.93222048"
                      />
                      <polyline
                        id="Path-2"
                        transform="translate(3.000000, 8.500000) rotate(-180.000000) translate(-3.000000, -8.500000) "
                        points="0 10 3.03427697 7 6 9.93222048"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

const OptionsSearch = ({ isListPage }) => {
  const [optionsAnchorEl, setOptionsAnchorEl] = useState(null);

  const openOptions = optionsAnchorEl ? true : false;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { isTabletOrMobile } = useContext(MediaScreenContext);

  const handleOpenClick = (e) => {
    if (isListPage && isTabletOrMobile) return;
    else {
      isTabletOrMobile
        ? setIsDrawerOpen(true)
        : setOptionsAnchorEl(e.currentTarget);
    }
  };

  const handleClose = () => {
    setOptionsAnchorEl(null);
  };

  return (
    <Stack height={1}>
      <Stack
        direction="row"
        alignItems="center"
        height={{ xs: 1, lg: isListPage ? 36 : 1 }}
        bgcolor={{ xs: isListPage ? "yellowborder.main" : "#FFF", lg: "#FFF" }}
        sx={{
          gap: { xs: "4px", lg: isListPage ? 1 : 0 },
          cursor: { xs: "default", lg: "pointer" },
        }}
        id="options-button"
        onClick={handleOpenClick}
        aria-controls={openOptions ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openOptions ? "true" : undefined}
        px={isListPage ? { xs: 0, lg: 0.5 } : { xs: 0, lg: 1.75 }}
        py={isListPage ? 0 : { xs: 0.5, lg: 0 }}
      >
        {isTabletOrMobile || isListPage ? (
          ""
        ) : (
          <Box>
            <LeftIcon />
          </Box>
        )}

        <Box flexGrow={1} height={1} sx={{ overflow: "hidden" }}>
          <Option isListPage={isListPage} />
        </Box>

        {!isTabletOrMobile && (
          <>
            {isListPage ? (
              <KeyboardArrowDown
                fontSize="small"
                sx={{ verticalAlign: "middle", color: "#333" }}
              />
            ) : (
              <OptionsRightIcon />
            )}
          </>
        )}
      </Stack>

      <OptionsLayouts
        optionsAnchorEl={optionsAnchorEl}
        handleClose={handleClose}
        openOptions={openOptions}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Stack>
  );
};

export default OptionsSearch;
