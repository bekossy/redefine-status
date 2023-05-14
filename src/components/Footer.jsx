import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Footer = () => {
  const Footer = styled(Box)({
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    padding: "20px"
  });
  return (
    <Footer component={"footer"}>
      <Box maxWidth={1000} width={"100%"} m={"0 auto"}>
        <Typography variant="body2">
          Copyright {new Date().getFullYear()} | Redefine Status.
        </Typography>
      </Box>
    </Footer>
  );
};

export default Footer;
