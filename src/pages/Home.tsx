import { Box, styled } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import truck from "../assets/trucks.jpeg";

const TruckBackgroundContainer = styled(Box)`
  width: 100%;
  height: 80vh;
  position: relative;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(44, 45, 48, 0) 0%,
      rgba(44, 45, 48, 1) 100%
    );
  }
`;

const JumpingIcon = styled(KeyboardDoubleArrowDownIcon)`
  animation: jump 1.5s infinite;

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

function Home() {
  const handleDownClick = () => {};
  return (
    <>
      <TruckBackgroundContainer>
        <img src={truck} alt="Truck"></img>
      </TruckBackgroundContainer>
      <Box
        onClick={handleDownClick}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8vh",
          cursor: "pointer",
        }}
      >
        <JumpingIcon
          sx={{
            color: "white",
            opacity: 0.8,
            fontSize: "3rem",
          }}
        />
      </Box>
    </>
  );
}

export default Home;
