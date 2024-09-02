import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, styled } from "@mui/material";
import Navbar from "./components/Navbar";

import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const theme = createTheme({
  typography: {
    fontFamily: ["Suse"].join(","),
  },
});

const BackgroundContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background: #2c2d30;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow-y: scroll;
  position: absolute;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BackgroundContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BackgroundContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
