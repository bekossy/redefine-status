import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar setMode={setMode} mode={mode} />
          <Home />
          <Main />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
