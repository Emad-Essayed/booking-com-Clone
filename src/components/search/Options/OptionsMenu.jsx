import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { InputsSearch } from "../../../context";

const OptionsMenuLayout = styled(Stack)(({ theme }) => ({
  minWidth: "250px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  color: "black",

  [theme.breakpoints.down("lg")]: {
    padding: "20px 10px",
    borderTop: "1px solid #e7e7e7",

    "&:first-of-type": {
      borderTop: "none",
    },
  },
}));

const OptionsBtn = styled(Button)(({ theme }) => ({
  minWidth: 0,
  width: 40,
  height: 40,
  padding: 0,
  border: "1px solid #0071c2",
  color: "#0071c2",

  "&:disabled": {
    border: "1px solid lightgray",
    backgroundColor: "#d9d9d9",
    cursor: "not-allowed",
    pointerEvents: "initial",
  },

  // [theme.breakpoints.down("lg")]: {
  //   width: 60,
  //   height: 60,
  //   fontSize: 20,
  // },
}));

const OptionsMenu = ({ optionName, optionValue }) => {
  const { options, setOptions } = useContext(InputsSearch);

  const handleOptionsValues = (operation) => {
    let currentOptionsVal = {
      ...options,
      [optionName]:
        operation === "+"
          ? Number(optionValue) + 1
          : optionValue > 0
          ? Number(optionValue) - 1
          : 0,
    };
    setOptions(currentOptionsVal);
  };

  const minNumber = optionName === "children" ? 0 : 1;

  return (
    <OptionsMenuLayout>
      <Typography variant="subtitle2">
        {optionName}
        {optionName === "children" && (
          <Typography variant="body2" sx={{ color: "#6b6b6b" }}>
            Ages 0 – 17
          </Typography>
        )}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, lg: 1 },
        }}
      >
        <OptionsBtn
          variant="outlined"
          disabled={optionValue <= minNumber}
          onClick={() => handleOptionsValues("-")}
        >
          -
        </OptionsBtn>
        <Typography variant="subtitle1" fontWeight={{ xs: 600, lg: 400 }}>
          {optionValue}
        </Typography>
        <OptionsBtn variant="outlined" onClick={() => handleOptionsValues("+")}>
          +
        </OptionsBtn>
      </Box>
    </OptionsMenuLayout>
  );
};

export default OptionsMenu;
