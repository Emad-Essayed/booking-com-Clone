import { Box, Typography, Tab, Container } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";
import desinationsTab from "../../data/DestinationsTabs.json";
import DestinationTab from "./DestinationTab";

const DestinationsTabs = () => {
  const [value, setValue] = React.useState("1");

  const regions = desinationsTab.Regions;
  const cities = desinationsTab.Cities;
  const interests = desinationsTab.Interests;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
        Destination we love
      </Typography>

      <Box
        sx={{
          width: "100%",
          typography: "body1",
          mt: 1,
          height: "363px",
        }}
      >
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ padding: 0 }}
          >
            <Tab label="Regions" value="1" disableRipple />
            <Tab label="Cities" value="2" disableRipple />
            <Tab label="Places of interest" value="3" disableRipple />
          </TabList>
          <TabPanel value="1" sx={{ p: 0 }}>
            <DestinationTab dest={regions} />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <DestinationTab dest={cities} defCols />
          </TabPanel>
          <TabPanel value="3" sx={{ p: 0 }}>
            <DestinationTab dest={interests} />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default DestinationsTabs;
