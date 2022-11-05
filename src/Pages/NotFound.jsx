import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Paper elevation={12}>
        <Box sx={{ p: 3 }}>
          <Typography
            fontSize={24}
            fontWeight={300}
            mb={1}
            component="div"
            sx={{ color: "#262626" }}
          >
            Page not found :(
          </Typography>
          <Typography fontSize={16} fontWeight={300}>
            Maybe the page you are looking for has been removed, or you typed in
            the wrong URL
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ textAlign: "center", p: 1 }}>
          <Button
            variant="text"
            sx={{
              mr: 2,
              color: "primary.light",
              "&:hover": { bgcolor: "transparent" },
            }}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
          <Button
            variant="text"
            sx={{
              color: "primary.light",
              "&:hover": { bgcolor: "transparent" },
            }}
            onClick={() => navigate("/")}
          >
            Go to homepage
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default NotFound;
