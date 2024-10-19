import { Box, Button, Grid2, styled, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import truck from "../assets/trucks.jpeg";
import truckdriver1 from "../assets/test1.jpeg";
import truckdriver2 from "../assets/test2.jpeg";
import truckdriver3 from "../assets/test3.jpeg";
import face1 from "../assets/face1.jpeg";
import face2 from "../assets/face2.jpeg";
import face3 from "../assets/face3.jpeg";
import face4 from "../assets/face4.jpeg";
import face5 from "../assets/face5.jpeg";
import face6 from "../assets/face6.jpeg";
import face7 from "../assets/face7.jpeg";
import sales from "../assets/sales.jpeg";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

const CustomButton = styled(Button)`
  min-width: 40px;
  width: 100%;
  background-color: transparent;
  text-transform: none;
  border: 1px solid #000;
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:active {
    background-color: #000;
    color: #fff;
  }
`;

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
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
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

const ScrollingContainer = styled(Box)`
  display: flex;
  overflow-x: hidden;
  width: 100%;
`;

const ScrollingContent = styled(Box)`
  display: flex;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

function Home() {
  const firstPageRef = useRef<HTMLDivElement>(null);
  const secondPageRef = useRef<HTMLDivElement>(null);
  const thirdPageRef = useRef<HTMLDivElement>(null);
  const fourthPageRef = useRef<HTMLDivElement>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [truckdriver1, truckdriver2, truckdriver3];
  const faces = [
    { src: face1, name: "John Doe", rank: "CEO" },
    { src: face2, name: "Jane Smith", rank: "Sales" },
    { src: face3, name: "Alice Johnson", rank: "Administration" },
    { src: face4, name: "Bob Brown", rank: "Administration" },
    { src: face5, name: "Charlie Davis", rank: "Operations" },
    { src: face6, name: "Diana Evans", rank: "Sales" },
    { src: face7, name: "Frank Green", rank: "Operations" },
  ];

  const handleDownClickPage1 = () => {
    if (firstPageRef.current) {
      firstPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownClickPage2 = () => {
    if (secondPageRef.current) {
      secondPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownClickPage3 = () => {
    if (thirdPageRef.current) {
      thirdPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownClickPage4 = () => {
    if (fourthPageRef.current) {
      fourthPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        backgroundColor: "#e6e6e8",
      }}
    >
      <Navbar
        page1Click={handleDownClickPage1}
        page2Click={handleDownClickPage2}
        page3Click={handleDownClickPage3}
      />
      <Grid2
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
        }}
        ref={firstPageRef}
      >
        <TruckBackgroundContainer>
          <img src={truck} alt="Truck"></img>
        </TruckBackgroundContainer>
        <Box
          onClick={handleDownClickPage2}
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
      </Grid2>
      <Grid2
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"2vh 0vw"}
        spacing={2}
        sx={{
          backgroundColor: "#e6e6e8",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
        ref={secondPageRef}
      >
        <Grid2
          container
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid2>
            <Box sx={{ overflow: "hidden" }}>
              <img src={sales} alt={`truckdriver`} width={"40%"} />
            </Box>
          </Grid2>
          <Grid2
            sx={{
              maxWidth: "600px",
              marginLeft: "80px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              We move, so you don't have to
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "15px",
              }}
            >
              At the heart of every thriving business lies efficient movement of
              goods, services, and time. At Dacmac Logistics, we understand that
              logistics is more than just transport; it’s the lifeblood of your
              operations.
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "15px",
              }}
            >
              We make it simple, seamless, and reliable, whether you’re sending
              freight within your town or shipping pallets across the country.
              With cutting-edge technology, a fleet of state-of-the-art
              vehicles, and a dedicated team, we take the weight off your
              shoulders.
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "15px",
              }}
            >
              So while we’re moving, you can focus on what matters most: growing
              your business. Leave the logistics to us. We move, so you don’t
              have to.
            </Typography>
            <Grid2
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CustomButton
                sx={{
                  marginTop: "20px",
                  alignItems: "flex-end",
                  width: "200px",
                  color: "#000",
                  ":hover": {
                    color: "#fff",
                  },
                }}
              >
                <Typography>Contact Us</Typography>
              </CustomButton>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          sx={{
            position: "absolute",
            top: "calc(183vh)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={handleDownClickPage3}
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
                color: "black",
                opacity: 0.8,
                fontSize: "3rem",
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
      <Grid2
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"2vh 0vw"}
        spacing={2}
        sx={{
          backgroundColor: "black",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          borderRadius: "26px 26px 26px 26px",
        }}
        ref={thirdPageRef}
      >
        <Grid2
          sx={{
            width: "100%",
            marginLeft: "50px",
            marginTop: "-60px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "60px",
              color: "white",
            }}
          >
            Meet The Team
          </Typography>
        </Grid2>
        <ScrollingContainer>
          <ScrollingContent>
            {faces.concat(faces).map((image, index) => (
              <Grid2
                container
                sx={{
                  display: "flex",
                  marginRight: "20px",

                  width: "300px",
                }}
              >
                <Grid2
                  sx={{
                    display: "flex",
                    height: "400px",
                    width: "300px",
                  }}
                >
                  <img
                    src={image.src}
                    alt={`scrolling-image-${index}`}
                    style={{
                      borderRadius: "16px",
                    }}
                  />
                </Grid2>
                <Grid2>
                  <Grid2>
                    <Typography
                      sx={{
                        fontFamily: "Outfit",
                        color: "#e6e6e8",
                        fontSize: "24px",
                        marginTop: "10px",
                      }}
                    >
                      {image.name}
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography
                      sx={{
                        color: "white",
                        marginTop: "6px",
                      }}
                    >
                      {image.rank}
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            ))}
          </ScrollingContent>
        </ScrollingContainer>
        <Grid2
          sx={{
            position: "absolute",
            top: "calc(283vh)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={handleDownClickPage4}
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
        </Grid2>
      </Grid2>
      <Grid2
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"2vh 0vw"}
        spacing={2}
        sx={{
          backgroundColor: "#e6e6e8",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
        ref={fourthPageRef}
      >
        <Grid2></Grid2>
      </Grid2>
    </Box>
  );
}

export default Home;
