import { Close } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  InputAdornment,
  Paper,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputsSearch, MediaScreenContext } from "../../context";
import { fetchCities } from "../../features/city/citiesSlice";
import { valuesStyle, labelsStyle, borderedBox } from "./style";

const SearchIconBed = ({ isListPage }) => {
  return (
    <SvgIcon
      width="20px"
      height="16px"
      viewBox="0 0 20 16"
      version="1.1"
      sx={{
        color: "lightgray",
        PointerEvent: "none",
        display: {
          xs: "none",
          lg: isListPage ? "none" : "block",
        },
      }}
    >
      <title>Fill 1</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-2.000000, -4.000000)"
      >
        <g id="Page-1" transform="translate(2.000000, 4.000000)" fill="#BDBDBD">
          <path
            d="M2.83185841,2.12389381 C2.83185841,1.73292035 3.14884956,1.4159292 3.53982301,1.4159292 L16.2831858,1.4159292 C16.6741593,1.4159292 16.9911504,1.73292035 16.9911504,2.12389381 L16.9911504,4.95575221 L18.4070796,6.37168142 L18.4070796,2.12389381 C18.4070796,0.950973451 17.4561062,-1.42108547e-14 16.2831858,-1.42108547e-14 L3.53982301,-1.42108547e-14 C2.36690265,-1.42108547e-14 1.4159292,0.950973451 1.4159292,2.12389381 L1.4159292,6.37168142 L2.83185841,4.95575221 L2.83185841,2.12389381 Z M18.4070796,9.91150442 C18.4070796,8.34743363 17.139292,7.07964602 15.5752212,7.07964602 L4.24778761,7.07964602 C2.68389381,7.07964602 1.4159292,8.34743363 1.4159292,9.91150442 L1.4159292,10.619469 L18.4070796,10.619469 L18.4070796,9.91150442 Z M19.8230088,12.7433628 L19.8230088,14.8318584 C19.8348673,15.2072566 19.5585841,15.5295575 19.1858407,15.5752212 C18.7968142,15.6143363 18.4497345,15.3306195 18.4106195,14.9415929 C18.4081416,14.9168142 18.4069027,14.8922124 18.4070796,14.8672566 L18.4070796,14.159292 L1.4159292,14.159292 L1.4159292,14.8318584 C1.42778761,15.2072566 1.15150442,15.5295575 0.778761062,15.5752212 C0.389734513,15.6143363 0.0426548673,15.3306195 0.00353982301,14.9415929 C0.0010619469,14.9168142 0,14.8922124 0,14.8672566 L0,12.7433628 C0,11.9614159 0.633982301,11.3274336 1.4159292,11.3274336 L18.4070796,11.3274336 C19.1890265,11.3274336 19.8230088,11.9614159 19.8230088,12.7433628 Z"
            id="Fill-1"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export const SearchIcon = ({ isListPage, color, props }) => {
  return (
    <SvgIcon
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      sx={{
        color: color ? color : isListPage ? "#262626" : "lightgray",
        // color: color,
        PointerEvent: "none",
        display: isListPage
          ? "inline-block"
          : { xs: "inline-block", lg: "none" },
      }}
      {...props}
    >
      <path d="M118.8 113.2l-31-31A4 4 0 0 0 85 81a44 44 0 1 0-4 4 4 4 0 0 0 1.2 2.8l31 31a4 4 0 0 0 5.6-5.7zM52 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36z"></path>
    </SvgIcon>
  );
};

const CityIcon = () => {
  return (
    <SvgIcon
      height="24"
      width="24"
      viewBox="0 0 24 24"
      sx={{ color: "#6B6B6B" }}
    >
      <path d="M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5zM12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0z"></path>
    </SvgIcon>
  );
};

const CloseIcon = ({ isListPage }) => {
  return (
    <Close
      sx={{
        cursor: "pointer",
        color: { xs: "#bad4f7", lg: "#333" },
        display: {
          xs: "block",
          lg: isListPage ? "none" : "block",
        },
      }}
    />
  );
};

const CustomPaper = (props) => {
  return <Paper {...props} sx={{ my: 1 }} />;
};

const DestinationSearch = ({ isListPage }) => {
  const searchHeaderStyle = {
    "& .MuiOutlinedInput-root": {
      px: { xs: 0.5, lg: 1.75 },
      alignItems: "center",
      ...valuesStyle(isListPage),
      height: { xs: "56px", lg: "52px" },

      "& .MuiOutlinedInput-input": {
        "::placeholder": valuesStyle(isListPage),
      },
    },
  };

  const searchListStyle = {
    ...borderedBox,
    "& .MuiOutlinedInput-root": {
      alignItems: "center",
      ...valuesStyle(isListPage),
      height: { xs: "45px", lg: "36px" },
      px: 0.5,
      py: 0,
      border: "2px solid transparent",

      " &.Mui-focused": {
        border: (theme) => `2px solid ${theme.palette.primary.light}`,
      },

      "& .MuiOutlinedInput-input": {
        "::placeholder": valuesStyle(isListPage),
      },
    },
  };

  const root = {
    "&::before": {
      content: '"Popular nearby destinations"',
      px: 2.5,
      fontSize: 14,
      fontWeight: 600,
    },
    "& .MuiAutocomplete-option": {
      pt: 1.5,
    },
  };

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.city);

  useEffect(() => {
    inputValue.trim() !== ""
      ? dispatch(fetchCities(`cityName_like=${inputValue.trim()}`))
      : dispatch(fetchCities());
  }, [dispatch, inputValue]);

  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const { destination, setDestination } = useContext(InputsSearch);

  return (
    <>
      {isListPage && (
        <Typography
          sx={{
            ...labelsStyle(isListPage),
            display: { xs: "none", lg: "block" },
          }}
        >
          Destination/property name:
        </Typography>
      )}
      <Autocomplete
        // freeSolo
        // open={true}
        sx={{
          ".MuiAutocomplete-popupIndicator": { display: "none" },
          // ".MuiAutocomplete-clearIndicator": {
          //   visibility: inputValue !== "" ? "visible" : "hidden",
          // },
        }}
        PaperComponent={CustomPaper}
        ListboxProps={{ sx: inputValue ? "" : root }}
        // filterOptions={(x) => x}
        isOptionEqualToValue={
          (option, value) => true // set it true because the options will be changed when textbox changed
          // option.cityName === value.cityName
        }
        options={cities}
        getOptionLabel={(option) => option?.cityName}
        clearIcon={<CloseIcon isListPage={isListPage} />}
        renderOption={(props, option) => (
          <Stack direction="row" component="li" gap={2} {...props}>
            {option.cityName && <CityIcon />}

            <Box>
              <Typography
                variant="body2"
                component="span"
                color="#333"
                fontWeight={700}
                display="block"
              >
                {option?.cityName}
              </Typography>
              <Typography variant="body2" component="span" color="#6B6B6B">
                {option?.country?.name}
              </Typography>
            </Box>
          </Stack>
        )}
        renderInput={(param) => (
          <TextField
            {...param}
            required
            sx={isListPage ? searchListStyle : searchHeaderStyle}
            placeholder={
              isTabletOrMobile
                ? "Around current location"
                : "Where are you going?"
            }
            InputProps={{
              ...param.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  {isListPage ? (
                    <>
                      <SearchIcon isListPage />
                      <SearchIconBed isListPage />
                    </>
                  ) : (
                    <>
                      <SearchIcon />
                      <SearchIconBed />
                    </>
                  )}
                </InputAdornment>
              ),
            }}
          />
        )}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue);
        }}
        value={destination}
        onChange={(e, newValue) => {
          setDestination(newValue);
        }}
      />
    </>
  );
};

export default DestinationSearch;
