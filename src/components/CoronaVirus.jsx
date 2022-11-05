import {
  Box,
  Container,
  Icon,
  Stack,
  Typography,
  Link as MuiLink,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MediaScreenContext } from "../context";
import { ExpandMore } from "@mui/icons-material";

const AccordionComp = () => {
  return (
    <Accordion
      elevation={0}
      sx={{
        py: 0.5,
        px: { xs: 0.5, lg: 1 },
        bgcolor: "#fff0e0",
        "&.MuiAccordion-root:last-of-type": { borderRadius: 0 },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: "#262626" }} />}
        aria-controls="corona-content"
        id="corona-header"
        sx={{ maxWidth: 1200, mx: "Auto" }}
      >
        <Box sx={{ position: "relative", pl: 6 }}>
          <Icon
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "translateY(-10%)",
              color: "#923e01",
              pr: 5,
              width: 28,
              height: 28,
            }}
          >
            <ErrorOutlineOutlinedIcon
              sx={{
                width: 28,
                height: 28,
              }}
            />
          </Icon>
          <Typography variant="body1" component="span" fontWeight={700}>
            Coronavirus (COVID-19) Support
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0, maxWidth: 1200, mx: "Auto" }}>
        <Box sx={{ pl: 6 }}>
          <Typography variant="body2" mb={1}>
            Get the travel advice you need. Read more about possible travel
            restrictions before you go.
          </Typography>
          <MuiLink component={Link} to="#" color="primary.light" fontSize={14}>
            Read more
          </MuiLink>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const CoronaVirus = ({ isAccordion }) => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);

  const customBox = (theme) => ({
    ...theme.fullBorderedBox(theme),
    border: "1px solid #e7e7e7",
    padding: { xs: 1, lg: 2 },
    gap: { xs: ".5rem", lg: "1rem" },
  });

  if (isAccordion) return <AccordionComp />;

  return (
    <Box mb={{ xs: 2, lg: 0 }}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack
          sx={customBox}
          component={isTabletOrMobile ? "a" : "div"}
          href={isTabletOrMobile ? "#" : undefined}
        >
          <Icon
            sx={{
              p: ".8em",
              bgcolor: { xs: "transparent", lg: "#fff0e0" },
              color: "#923e01",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorOutlineOutlinedIcon />
          </Icon>

          {isTabletOrMobile ? (
            <Typography
              variant="body2"
              component="span"
              sx={{
                fontSize: ".875rem",
                ml: -1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              Get the latest COVID-19 travel advice
              <KeyboardArrowRightOutlinedIcon />
            </Typography>
          ) : (
            <Typography
              variant="body2"
              component="span"
              sx={{
                fontSize: ".875rem",
                color: "#262626",
              }}
            >
              Get the advice you need. Check the latest COVID-19 restrictions
              before you travel.
              <MuiLink
                variant="string"
                underline="hover"
                color="primary.light"
                component={Link}
                to="#"
              >
                Learn more
              </MuiLink>
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default CoronaVirus;
