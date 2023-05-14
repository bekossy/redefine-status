import { Box, Typography, styled } from "@mui/material";
import redefineImg from "../assets/redefineImg.webp";
import React from "react";

const Home = () => {
  const HomeContainer = styled(Box)(({ theme }) => ({
    background: `rgba(0, 0, 0, 0.6) url(${redefineImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "darken",
    backgroundAttachment: "fixed",
    paddingBottom: "100px",
    height: "700px",
    width: "100%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 2,
  }));

  return (
    <HomeContainer>
      <Typography variant="h1" fontWeight={700}>
        🌟
      </Typography>
      <Typography variant="h1" fontWeight={700}>
        Redefine status
      </Typography>
      <Typography fontStyle={"italic"}>
        How We Can Correct Mankind’s Leaderboard
      </Typography>
    </HomeContainer>
  );
};

export default Home;
