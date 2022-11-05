import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const TestiFooter = () => {
  return (
    <Stack direction="row" alignitems="center" p={1.25}>
      <Avatar
        src="https://cf.bstatic.com/xdata/images/xphoto/square64/10267099.webp?k=4e1c932fbd64e98b64ac3142347a681b7960d81b78746f3985c05ab438bffa11&o=?t=1476287032"
        alt="Erdal"
        sx={{ width: 24, height: 24 }}
      />
      <Typography
        variant="body2"
        component="span"
        display={"inline-block"}
        pl={1}
      >
        Erdal
      </Typography>
      <Box>
        <Box
          component="img"
          src="https://cf.bstatic.com/static/img/flags/12/tr/249dbed2afb3f285153258fc96506565b3e74090.png"
          alt="Turkey"
          px={0.5}
          pb={0.2}
        />
      </Box>
      <Typography variant="body2" component="span">
        Turkey
      </Typography>
    </Stack>
  );
};

export default TestiFooter;
