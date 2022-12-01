import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, colored }) => {
  return (
    <Typography
      sx={{
        fontSize: "40px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {title} {colored && <span sx={{ color: "#7AB259" }}>{colored}</span>}
    </Typography>
  );
};

export default SectionTitle;
