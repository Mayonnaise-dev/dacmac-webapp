import { Box, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import truck from "../assets/trucks.jpeg";
import ferrari from "../assets/ferrari.jpg";
import mercedes from "../assets/mercedes.jpg";
import lexus from "../assets/lexus.jpg";

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

const PlateImageLeft = styled(Box)`
  width: 100%;
  height: 35vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(44, 45, 48, 0) 0%,
      rgba(44, 45, 48, 1) 100%
    );
  }
`;

const PlateImageRight = styled(Box)`
  width: 100%;
  height: 35vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(44, 45, 48, 0) 0%,
      rgba(44, 45, 48, 1) 100%
    );
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
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"2vh 0vw"}
        spacing={2}
      >
        <Typography color="white" fontSize={"4rem"}>
          Welcome to Dacmac Logistics
        </Typography>
        <Grid size={7}>
          <PlateImageLeft>
            <img src={ferrari} alt="Ferarri"></img>
          </PlateImageLeft>
        </Grid>
        <Grid size={5}>
          <Typography color="white" fontSize={"1rem"}>
            {" "}
            The Ferrari Enzo is a masterpiece of automotive engineering,
            embodying Ferrari's racing heritage and cutting-edge technology.
            Named after the company's founder, this striking supercar boasts a
            sleek, aerodynamic design with a low, aggressive stance and a
            distinctive, sculpted body. Underneath its carbon fiber skin lies a
            6.0-liter V12 engine, producing an exhilarating 660 horsepower,
            which propels the Enzo from 0 to 60 mph in just 3.4 seconds. Its
            advanced features include a sophisticated F1-style transmission and
            a carbon-ceramic braking system, ensuring exceptional performance
            and handling. The Enzo not only delivers blistering speed but also
            an unforgettable driving experience, making it a coveted icon among
            automotive enthusiasts.
          </Typography>
        </Grid>
        <Grid size={5}>
          <Typography color="white" fontSize={"1rem"}>
            The Mercedes-AMG GT Black Series is a stunning embodiment of extreme
            performance and precision engineering. With its aggressive design
            featuring a prominent front splitter, wide wheel arches, and a bold
            rear wing, this high-performance coupe commands attention on the
            road. Powered by a 4.0-liter twin-turbo V8 engine, it produces a
            thunderous 720 horsepower, propelling the GT Black Series from 0 to
            60 mph in just 3.1 seconds. Its advanced aerodynamics and
            track-tuned suspension deliver unparalleled handling and agility,
            while the meticulously crafted interior offers a blend of luxury and
            sportiness. This car is not just a statement of speed, but a
            testament to Mercedes-AMG’s relentless pursuit of automotive
            excellence.
          </Typography>
        </Grid>
        <Grid size={7}>
          <PlateImageRight>
            <img src={mercedes} alt="mercedes"></img>
          </PlateImageRight>
        </Grid>
        <Grid size={7}>
          <PlateImageLeft>
            <img src={lexus} alt="Lexus"></img>
          </PlateImageLeft>
        </Grid>
        <Grid size={5}>
          <Typography color="white" fontSize={"1rem"}>
            The Lexus LFA is a stunning testament to engineering prowess and
            high-performance luxury. With its sleek, aerodynamic profile and
            distinctive, aggressive styling, the LFA commands attention wherever
            it goes. Powered by a 4.8-liter V10 engine that revs to a thrilling
            9,000 rpm and delivers 552 horsepower, the LFA achieves a 0 to 60
            mph time of just 3.6 seconds. Its advanced carbon fiber construction
            not only enhances its agility but also contributes to an incredibly
            responsive driving experience. The meticulously crafted interior
            combines luxurious materials with a driver-focused design, ensuring
            that every moment behind the wheel is as exhilarating as it is
            refined. The Lexus LFA stands as a rare and remarkable blend of
            performance, innovation, and luxury.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
