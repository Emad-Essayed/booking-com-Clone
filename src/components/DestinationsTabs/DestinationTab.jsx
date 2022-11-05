import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  styled,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DestinationTab = ({ dest, defCols }) => {
  const CustomMuiLink = styled(MuiLink)(({ theme }) => ({
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: "1.25rem",
    fontFamily: theme.mainFontFamily.fFamily,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }));

  const CustomSecondry = styled(Typography)(({ theme }) => ({
    fontSize: "0.8125rem",
    fontWeight: 500,
    lineHeight: "1rem",
    fontFamily: theme.mainFontFamily.fFamily,
    color: theme.palette.secondary,
  }));

  const CreateLink = ({ text, textcolor }) => (
    <CustomMuiLink
      variant="h6"
      color={textcolor}
      underline="hover"
      component={Link}
      to="#"
    >
      {text}
    </CustomMuiLink>
  );

  return (
    <List>
      <Grid container columns={defCols ? 12 : 15}>
        {dest.map(({ title, subtitle }, key) => (
          <Grid item xs={3} key={key}>
            <ListItem sx={{ px: "6px" }}>
              <ListItemText
                primary={<CreateLink text={title} textcolor="text.primary" />}
                secondary={
                  subtitle.includes(", ") ? (
                    subtitle.split(", ").map((item, key) => (
                      <Box key={key} component="span">
                        <CreateLink text={item} textcolor="text.secondary" />
                        {", "}
                      </Box>
                    ))
                  ) : (
                    <CustomSecondry
                      variant="body1"
                      component="span"
                      sx={{ color: "text.secondary" }}
                    >
                      {subtitle}
                    </CustomSecondry>
                  )
                }
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default DestinationTab;
