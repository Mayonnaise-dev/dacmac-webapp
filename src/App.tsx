import { Box, styled } from "@mui/material";

import Home from "./pages/Home";

const BackgroundContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background: #ffffff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow-y: scroll;
  position: absolute;
`;

function App() {
  return (
    <BackgroundContainer>
      <Home />
    </BackgroundContainer>
  );
}

export default App;
