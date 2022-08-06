import { ThemeProvider } from "@emotion/react";
import React from "react";
import Navigation from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
}

export default App;
