import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { InputsSearch, MediaScreenContext } from "../../../context";
import { labelsStyle, valuesStyle, borderedBox } from "../style";

const DotSeperator = () => {
  return (
    <Typography variant="Body1" component="span" sx={{ ...labelsStyle }}>
      &nbsp;.&nbsp;
    </Typography>
  );
};
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "#FFF",
  padding: "4px 8px",

  [theme.breakpoints.down("lg")]: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: "1px solid #e6e6e6",

    "&:last-child": {
      borderRight: "none",
    },
  },
}));

const SelectNumberComp = ({ optionName, maxNumber, isListPage }) => {
  const { options, setOptions } = useContext(InputsSearch);

  const handleChange = (e) => {
    let currentOptionsVal = {
      ...options,
      [optionName]: e.target.value,
    };
    setOptions(currentOptionsVal);
  };

  return (
    <FormControl
      variant="standard"
      fullWidth
      sx={{
        ".MuiInput-root": {
          "&::after": {
            content: '""',
            border: "none !important",
          },
          "&:hover": {
            border: "none !important",
          },
          "&::before": {
            content: '""',
            border: "none !important",
          },
        },

        "& .MuiSelect-select": {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      }}
    >
      <InputLabel
        id={optionName}
        sx={{ ...labelsStyle(isListPage), transform: "none" }}
      >
        {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
      </InputLabel>
      <Select
        labelId={optionName}
        id={optionName}
        value={options[optionName]}
        label={optionName}
        onChange={handleChange}
        sx={{ ...valuesStyle(isListPage) }}
      >
        {[...new Array(maxNumber)].map((val, index) => (
          <MenuItem value={index.toString()} key={index}>
            {index}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const Option = ({ isListPage }) => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const { options } = useContext(InputsSearch);

  return (
    <Stack
      direction="row"
      height={1}
      gap={isListPage ? 0.5 : 0}
      alignItems="center"
    >
      {!isTabletOrMobile ? (
        <Box sx={{ overflow: "hidden" }}>
          <Typography
            sx={{
              ...valuesStyle(isListPage),
            }}
          >
            {`${options.adults} ${options.adults === 1 ? "adult" : "adults"}`}
            <DotSeperator />
            {`${options.children} ${
              options.children === 1 ? "child" : "children"
            }`}
            <DotSeperator />
            {`${options.rooms} ${options.rooms === 1 ? "room" : "rooms"}`}
          </Typography>
        </Box>
      ) : (
        <>
          {Object.entries(options).map(([key, value]) => (
            <CustomBox key={key} sx={isListPage && borderedBox}>
              {isListPage ? (
                <SelectNumberComp optionName={key} maxNumber={30} isListPage />
              ) : (
                <>
                  <Typography
                    sx={{
                      ...labelsStyle(isListPage),
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>
                  <Typography sx={{ ...valuesStyle(isListPage) }}>
                    {value}
                  </Typography>
                </>
              )}
            </CustomBox>
          ))}
        </>
      )}
    </Stack>
  );
};

export default Option;
