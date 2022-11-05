import { createTheme } from "@mui/material";

const mainColor = "#003580";
const lightColor = "#0071c2";
const darkColor = "#00224f";
const defFontFamily =
  "BlinkMacSystemFont, -apple-system, BlinkMacSystemFont, Segoe UI,Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,Helvetica Neue, sans-serif";

const spacing_16 = (theme) => theme.spacing(2);
const spacing_24 = (theme) => theme.spacing(3);

const theme = createTheme({
  mainFontFamily: {
    fFamily: defFontFamily,
  },

  sectionsSpacing: (theme) => theme.spacing(2),

  fullBorderedBox: (theme) => ({
    backgroundColor: "#FFF",
    marginBottom: { xs: spacing_16(theme), lg: spacing_24(theme) },
    p: { xs: spacing_16(theme), lg: spacing_24(theme) },
    borderRadius: "2px",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    textDecoration: "none",
    width: 1,
  }),

  topBottomBordered: (theme) => ({
    borderTop: "1px solid #e7e7e7",
    borderBottom: "1px solid #e7e7e7",
    backgroundColor: "#FFF",
    marginBottom: { xs: spacing_16(theme), lg: spacing_24(theme) },
  }),

  palette: {
    primary: {
      main: mainColor,
      light: lightColor,
      dark: darkColor,
    },
    yellowborder: {
      main: "#febb02",
    },
    greenColor: {
      main: "#008009",
    },
    redColor: {
      main: "#c00",
      lighter: "#ffebeb",
    },
    bgMobile: {
      main: { xs: "#f5f5f5", lg: "transparent" },
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: defFontFamily,
          color: "#262626",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: mainColor,
          color: "#FFF",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: mainColor,
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          fontFamily: defFontFamily,
          borderRadius: "0",
          textTransform: "capitalize",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "transparent",
            color: lightColor,
            borderColor: lightColor,
            textTransform: "initial",

            "&:hover": {
              border: `1px solid ${lightColor}`,
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "#FFF",
            backgroundColor: lightColor,
            borderColor: lightColor,
          },
        },
        {
          props: { variant: "whiteBtn" },
          style: {
            minHeight: "2.25rem",
            backgroundColor: "#FFF",
            color: lightColor,
            border: `1px solid ${lightColor}`,
            padding: "4px 15px",
            fontSize: "14px",

            "&:hover": {
              backgroundColor: "#ccd4e6",
            },
          },
        },
      ],
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: defFontFamily,
          border: "0",
          outline: "0",
          boxShadow: "none",
          borderRadius: 3,

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#FFF",

            "& > fieldset": {
              border: "none",
            },
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            height: 0,
            display: "none",
          },
          "& .MuiTab-root": {
            textTransform: "initial",
            fontSize: "0.875",
            fontWeight: 500,
            lineHeight: "1.25rem",
            color: "#262626",
            borderRadius: "100px",
            margin: "5px",
            fontFamily: defFontFamily,
            border: "2px solid transparent",

            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.06)",
            },

            "&.Mui-selected": {
              backgroundColor: "#0071c20f",
              color: lightColor,
              borderColor: lightColor,
              boxShadow: "0 0 0 3px rgb(0 113 194 / 24%)",
            },
          },
        },
      },
    },
  },
});

export default theme;
