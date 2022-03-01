import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
      <div className="wrapper__search">
        <p>
          <SearchIcon />
        </p>
        <input
          value={search}
          onChange={handleSearch}
          className="search-input"
          placeholder="Search for a country..."
        />
      </div>
    </Box>
  );
};

export default Search;
