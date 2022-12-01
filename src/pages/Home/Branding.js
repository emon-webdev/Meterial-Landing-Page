import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
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
  alignItems: "center",
}));

const Branding = () => {
  return (
    <BrandingWrapper>
      <Stack spacing={4}>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "60px",
            letterSpacing: "0.1rem",
            fontWeight: "bold",
          }}
        >
          Let’s Grow Your Brand To The Next Level
        </Typography>
        <Typography sx={{
          my:'23px'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{" "}
        </Typography>
        <Button sx={{width:"170px", height:'45px', background:'#111430', color:'white'}}>Hire us</Button>
      </Stack>
      <Box sx={{display:['none', 'none', 'block']}}>
        <img src={PromoImg} alt="" srcset="" />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
