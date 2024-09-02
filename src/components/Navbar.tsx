import React from "react";
import { Box, Button, Grid2, styled, Typography } from "@mui/material";
import image006 from "../assets/image006.png";
import { Link, useLocation } from "react-router-dom";

const NavBarBox = styled(Box)`
  min-width: 100%;
  position: fixed;
  z-index: 10;
  top: 0%;
  padding: 2vh 2vw;
  background: #2c2d30;
  opacity: 0.7;
`;

const NavBarLook = styled(Grid2)`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (max-width: 1024px) {
    align-items: center;
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavBarBox>
      <NavBarLook
        container
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img src={image006} alt="Dacmac Logo"></img>
        <Grid2 container spacing={3} alignItems={"center"}>
          <Link to="/">
            <Button>
              <Typography
                color="white"
                fontSize={currentPath === "/" ? "1.3rem" : "1rem"}
              >
                HOME
              </Typography>
            </Button>
          </Link>
          <Link to="/about">
            <Button>
              <Typography
                color="white"
                fontSize={currentPath === "/about" ? "1.3rem" : "1rem"}
              >
                ABOUT
              </Typography>
            </Button>
          </Link>
          <Link to="/services">
            <Button>
              <Typography
                color="white"
                fontSize={currentPath === "/services" ? "1.3rem" : "1rem"}
              >
                SERVICES
              </Typography>
            </Button>
          </Link>
          <Link to="/contact">
            <Button>
              <Typography
                color="white"
                fontSize={currentPath === "/contact" ? "1.3rem" : "1rem"}
              >
                CONTACT
              </Typography>
            </Button>
          </Link>
        </Grid2>
      </NavBarLook>
    </NavBarBox>
  );
};

export default Navbar;
