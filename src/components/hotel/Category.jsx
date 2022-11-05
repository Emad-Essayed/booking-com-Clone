import { South } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Category = ({ name, value }) => {
  const isLowScore = Number(value) <= 5;

  return (
    <Box pb={2}>
      <Typography
        variant="body2"
        component="span"
        mb={0.5}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
        {isLowScore && (
          <South
            sx={{
              fontSize: "1.2rem",
              color: "redColor.main",
              verticalAlign: "middle",
            }}
          />
        )}
      </Typography>
      <Stack direction="row" alignItems="center" flexWrap="nowrap">
        <Box
          flexGrow={1}
          height={10}
          width={1}
          sx={{
            position: "relative",
            borderRadius: 0.5,
            bgcolor: isLowScore ? "redColor.lighter" : "#ebf3ff",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: `${Number(value) * 10}%`,
              height: 1,
              bgcolor: isLowScore ? "redColor.main" : "primary.main",
              borderRadius: 0.5,
            },
          }}
        />
        <Typography fontSize={12} fontWeight={500} component="span" pl={2}>
          {value}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Category;
