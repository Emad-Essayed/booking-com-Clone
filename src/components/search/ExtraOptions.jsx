import { Help } from "@mui/icons-material";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { InputsSearch, MediaScreenContext } from "../../context";
import CustomCheckBox from "../CustomCheckBox";
import { HelpIcon } from "../IconsRep";
import { borderedBox } from "./style";

const ListpageExtraOptions = () => {
  const { extraOptions, setExtraOptions } = useContext(InputsSearch);
  const [showIsForWorkHelp, setshowIsForWorkHelp] = useState(false);

  const handelChange = (e) => {
    let isForWork = e.target.value === "true";

    setExtraOptions((prev) => ({ ...prev, isWork: isForWork }));
    setshowIsForWorkHelp(isForWork);
  };

  const handleShowIsforWorkHelp = (e) => {
    setshowIsForWorkHelp(!showIsForWorkHelp);
  };
  const radioButtonSx = {
    flexGrow: 1,
    ".MuiFormControlLabel-label": {
      fontWeight: "bold",
    },
    ".MuiRadio-root.Mui-checked": {
      color: "primary.light",
    },
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      width={1}
      sx={{
        borderRadius: 0.5,
        bgcolor: { xs: "#FFF", lg: "transparent" },
      }}
    >
      <FormControl fullWidth>
        <FormLabel
          id="isForWork-group-label"
          sx={{
            py: 0.5,
            px: 1,
            bgcolor: (theme) => theme.palette.bgMobile.main,
            borderBottom: "1px solid #e6e6e6",
            "&:focus": { bgcolor: "red" },
          }}
          onClick={handleShowIsforWorkHelp}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            component="div"
          >
            <Typography variant="body1" color="#6b6b6b">
              Are you travelling for work?
            </Typography>
            <Help fontSize="small" sx={{ color: "#262626" }} />
          </Stack>
        </FormLabel>
        {showIsForWorkHelp && (
          <Typography
            variant="body2"
            component="div"
            sx={{ bgcolor: "#e6e6e6", color: "#6b6b6b", py: 0.5, px: 1 }}
          >
            if you're travelling for work, we'll sort the most business travel
            feature to the top of the filter menu so you can find them quickly.
          </Typography>
        )}

        <RadioGroup
          row
          aria-labelledby="isForWork-group-label"
          name="isForWork-radio-buttons-group"
          sx={{ px: 1 }}
          value={extraOptions.isWork}
          onChange={handelChange}
        >
          <FormControlLabel
            value={true}
            control={<Radio />}
            label="Yes"
            sx={{
              ...radioButtonSx,
              borderRight: "1px solid #e6e6e6",
            }}
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="No"
            sx={radioButtonSx}
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

const ExtraOptions = ({ isListPage }) => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const { extraOptions, setExtraOptions } = useContext(InputsSearch);

  const customFormCntrl = {
    ".MuiCheckbox-root": {
      color: isListPage && "primary.light",
      mr: 0.5,
      p: 0,
      borderRadius: 1.7,
      border: "2px solid transparent",
    },
    ".MuiSvgIcon-root": {
      width: isListPage ? "1em" : "1.2em",
      height: isListPage ? "1em" : "1.2em",
    },
    ".MuiTypography-root": {
      fontSize: isListPage ? ".75rem" : ".875rem",
    },
  };

  return (
    <Box sx={isListPage && borderedBox}>
      <Container
        sx={{ px: { xs: isListPage ? 0 : 1, lg: isListPage ? 0 : 3 } }}
      >
        <Stack
          direction={{ xs: "row", lg: isListPage ? "column" : "row" }}
          alignItems={isListPage ? "flex-start" : "center"}
          gap={isListPage ? 0.5 : 2}
          py={{ xs: isListPage ? 0 : 2, lg: isListPage ? 0 : 1 }}
        >
          {!isTabletOrMobile && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mx={1}
              width={isListPage ? "calc(100% - 8px)" : "auto"}
            >
              <CustomCheckBox
                labelText={
                  isListPage
                    ? "Entire homes & apartments"
                    : "I'm looking for an entire home or apartment"
                }
                textColor="#262626"
                sx={customFormCntrl}
                checked={extraOptions.isApartment}
                handleOnchange={(e) =>
                  setExtraOptions((prev) => ({
                    ...prev,
                    isApartment: e.target.checked,
                  }))
                }
              />
              {isListPage && <HelpIcon color="#333" />}
            </Stack>
          )}

          {isListPage && isTabletOrMobile ? (
            <ListpageExtraOptions />
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mx={1}
              width={isListPage ? "calc(100% - 8px)" : "auto"}
            >
              <CustomCheckBox
                labelText="I'm traveling for work"
                textColor="#262626"
                sx={customFormCntrl}
                checked={extraOptions.isWork}
                handleOnchange={(e) =>
                  setExtraOptions((prev) => ({
                    ...prev,
                    isWork: e.target.checked,
                  }))
                }
              />
              {isListPage && <HelpIcon />}
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default ExtraOptions;
