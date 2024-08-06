export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    common: {
      main: mode == "dark" ? "#000000" : "#FFFFFF",
    },
    background: {
      default: "#f0f2ff",
    },
    primary: {
      main: "#00aaff",
    },
    secondary: {
      main: "#171b36",
    },
    success: {
      main: "#4BCDC4",
    },
    error: {
      main: "#FF0060",
    },
    shadow: {
      main: "#44495d",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});
