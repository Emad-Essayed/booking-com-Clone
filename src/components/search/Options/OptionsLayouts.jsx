import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useContext } from "react";
import { InputsSearch, MediaScreenContext } from "../../../context";
import OptionsMenu from "./OptionsMenu";

const OptionsLayouts = ({
  optionsAnchorEl,
  openOptions,
  handleClose,
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  const { options } = useContext(InputsSearch);

  const { isTabletOrMobile } = useContext(MediaScreenContext);

  return (
    <>
      {!isTabletOrMobile ? (
        <Menu
          id="options-resources"
          anchorEl={optionsAnchorEl}
          open={openOptions}
          MenuListProps={{ "aria-labelledby": "options-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {Object.entries(options).map(([key, value]) => (
            <MenuItem key={key} disableRipple sx={{ cursor: "default" }}>
              <OptionsMenu optionName={key} optionValue={value} />
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Drawer
          anchor="bottom"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{ height: 1, ".MuiPaper-root": { top: "130px" } }}
        >
          <Box
            width={1}
            height={1}
            bgcolor="#FFF"
            p={2}
            pt={4}
            position="relative"
          >
            <IconButton
              onClick={() => setIsDrawerOpen(false)}
              sx={{
                position: "absolute",
                right: 15,
                top: 5,
                color: "#bdbdbd",
              }}
              disableRipple={true}
            >
              <Close />
            </IconButton>
            <Box pt={4}>
              {Object.entries(options).map(([key, value]) => (
                <OptionsMenu key={key} optionName={key} optionValue={value} />
              ))}
            </Box>

            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "#FFF",
                pb: "5%",
                textAlign: "center",
              }}
            >
              <Divider sx={{ width: 1, my: 4 }} />
              <Button
                variant="contained"
                sx={{ width: "80%", mx: "auto" }}
                onClick={() => setIsDrawerOpen(false)}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default OptionsLayouts;
