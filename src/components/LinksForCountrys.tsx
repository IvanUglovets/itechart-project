import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/useAppSelector";

const LinksForCountrys = () => {
  const { country } = useAppSelector((state) => state.detailCountrySlice);
  return (
    <Box>
      <Typography component="div" sx={{ fontWeight: "bold" }}>
        Border Countries:
      </Typography>
    </Box>
  );
};

export default LinksForCountrys;
