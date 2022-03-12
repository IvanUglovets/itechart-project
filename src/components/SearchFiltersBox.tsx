import React from "react";
import Search from "./Search";
import Box from "@mui/material/Box";
import SelectFilter from "./SelectFilter";

const SearchFiltersBox = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
          flexWrap: "wrap"
      }}
    >
      <Search />
      <SelectFilter />
    </Box>
  );
};

export default SearchFiltersBox;
