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
        padding: "0 40px",
      }}
      mt={8}
    >
      <Search />
      <SelectFilter />
    </Box>
  );
};

export default SearchFiltersBox;
