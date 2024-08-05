"use client";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { getDesignTokens } from "@/theme/theme.js";
import store from "@/redux/store";

const theme = createTheme(getDesignTokens("light"));

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
