import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import PromoImg from "../../img/promo.png";
const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "#FBD062",
  padding: theme.spacing(2),
  margin: "4rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  display: "flex",
  justifyContent: "space-between",
}));

const Branding = () => {
  return (
    <BrandingWrapper>
      <Box></Box>
      <Box>
        <img src={PromoImg} alt="" srcset="" />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
