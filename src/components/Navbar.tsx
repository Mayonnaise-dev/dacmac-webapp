import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import image006 from "../assets/image006.png";

const NavBarBox = styled(Box)`
  min-width: 100%;
  position: fixed;
  z-index: 10;
  top: 0%;
  padding: 2vh 2vw;
  background: #2c2d30;
  opacity: 0.8;
`;

const NavBarLook = styled(Grid)`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (max-width: 1024px) {
    align-items: center;
  }
`;

interface NavbarProps {
  page1Click: () => void;
  page2Click: () => void;
  page3Click: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  page1Click,
  page2Click,
  page3Click,
}) => {
  return (
    <NavBarBox>
      <NavBarLook
        container
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img src={image006} alt="Dacmac Logo"></img>
        <Grid container spacing={3} alignItems={"center"}>
          <Button onClick={page1Click}>
            <Typography fontFamily={"Outfit"} color="white">
              HOME
            </Typography>
          </Button>

          <Button>
            <Typography fontFamily={"Outfit"} color="white">
              ABOUT
            </Typography>
          </Button>

          <Button>
            <Typography fontFamily={"Outfit"} color="white">
              SERVICES
            </Typography>
          </Button>

          <Button>
            <Typography fontFamily={"Outfit"} color="white">
              CONTACT US
            </Typography>
          </Button>
        </Grid>
      </NavBarLook>
    </NavBarBox>
  );
};

export default Navbar;
