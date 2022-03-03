import React, {useEffect, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {searchCountry} from "../redux/slices/searchSlice";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (search){
      dispatch(searchCountry(search))
    }
  },[search])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };



  return (
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
  );
};

export default Search;
