import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { InputsSearch } from "../context";
import filtration from "../data/filteration.json";
import CustomCheckBox from "./CustomCheckBox";

const FilterLabel = ({ destination, header, label, number }) => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        width={1}
      >
        <Typography component="span" fontSize={13}>
          {label}
        </Typography>
        <Typography variant="body2" fontSize={12} color="#6b6b6b">
          {number}
        </Typography>
      </Stack>

      {header.includes("Distance from centre") && (
        <Typography component="span" fontSize={12} color="#6b6b6b">
          {`${header} ${destination}`}
        </Typography>
      )}

      {header.includes("Review score") && (
        <Typography component="span" fontSize={12} color="#6b6b6b">
          Based on guest reviews
        </Typography>
      )}
    </Box>
  );
};

const Filteration = () => {
  const { destination } = useContext(InputsSearch);
  const [filterBy, setFilterBy] = useState([]);

  const handleFilterChange = (e) => {
    const index = filterBy.indexOf(e.target.value);
    if (index === -1) {
      setFilterBy([...filterBy, e.target.value]);
    } else {
      setFilterBy(filterBy.filter((f) => f !== e.target.value));
    }
  };

  return (
    <Box my={1}>
      <Box sx={{ border: "1px solid #bdbdbd", borderRadius: 1 }}>
        <Typography
          variant="subtitle1"
          component="h2"
          fontWeight={700}
          px={1.5}
          py={1}
        >
          Filter by:
        </Typography>
        <Divider color="#bdbdbd" />
        <FormControl>
          {filtration.map((item, index) => (
            <Box key={index}>
              {Object.entries(item).map(([key, value]) => (
                <Box key={key}>
                  <Box pl={1.5} pr={2} py={1} width={1}>
                    <FormLabel
                      component="h3"
                      sx={{
                        color: "#262626",
                        fontFamily: "inherit",
                        fontSize: 14,
                        fontWeight: 700,
                        mt: 0,
                        mb: 0.7,
                        "&.Mui-focused": { color: "#262626" },
                      }}
                    >
                      {key.includes("Distance from centre")
                        ? `${key} ${destination?.name}`
                        : key}
                    </FormLabel>

                    <FormGroup width={1}>
                      {value.map(({ title, number }, ind) => (
                        <Box key={ind} width={1} pl={1} py={0.7}>
                          <FormControlLabel
                            label={
                              <FilterLabel
                                header={key}
                                destination={destination?.name}
                                label={title}
                                number={number}
                              />
                            }
                            control={
                              <CustomCheckBox
                                value={title}
                                checked={filterBy.includes(title)}
                                handleOnchange={handleFilterChange}
                              />
                            }
                            sx={{
                              width: 1,
                              alignItems: "flex-start",
                              ml: 0.5,
                              mr: 0,
                              ".MuiFormControlLabel-root": {
                                mr: 1,
                              },
                              ".MuiCheckbox-root": {
                                p: 0,
                              },
                              ".MuiFormControlLabel-label": {
                                width: 1,
                                fontSize: 13,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </FormGroup>
                  </Box>
                  <Divider color="#bdbdbd" />
                </Box>
              ))}
            </Box>
          ))}
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filteration;
