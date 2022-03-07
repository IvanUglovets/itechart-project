import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { regions } from "../models/regions";
import { filterCountrysByRegion } from "../redux/thunk/filterCountrysByRegion";
import { useAppDispatch } from "../hooks/useAppDispatch";

const SelectFilter = () => {
  const [region, setRegion] = useState<string>("All");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(filterCountrysByRegion(region));
  }, [region]);

  const handleChange = (e: SelectChangeEvent) => {
    setRegion(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Filter"
          value={region}
          onChange={handleChange}
        >
          {regions.map((currentRegion, index) => (
            <MenuItem key={index} value={`${currentRegion}`}>
              {currentRegion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
