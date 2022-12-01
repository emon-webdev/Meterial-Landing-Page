import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../components/Layout/SectionTitle";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{my:'4rem'}}>
      {/* heading section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SectionTitle
          title="Here are some of "
          colored="our works"
          sx={{
            textAlign: "text-left",
          }}
        />
        <Box>
          <Tabs value={value} onChange={handleChange} centered sx={{

          }}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default OurWorks;
