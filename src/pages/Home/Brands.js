import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";
import Brand1 from "../../img/brand1.png";
import Brand2 from "../../img/brand2.png";
import Brand3 from "../../img/brand3.png";
import Brand4 from "../../img/brand4.png";
import Brand5 from "../../img/brand5.png";

const BrandsWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
//   flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "& > img": {
      marginBottom: "1rem",
    },
  },
}));

const Brands = () => {
  return (
    <BrandsWrapper SX={{}}>
      <img src={Brand1} alt="" srcset="" />
      <img src={Brand2} alt="" srcset="" />
      <img src={Brand3} alt="" srcset="" />
      <img src={Brand4} alt="" srcset="" />
      <img src={Brand5} alt="" srcset="" />
    </BrandsWrapper>
  );
};

export default Brands;
