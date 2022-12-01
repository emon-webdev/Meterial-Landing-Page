import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/Home/Header";

const Layout = () => {
  return (
    <Box>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;