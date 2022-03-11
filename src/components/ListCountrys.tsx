import React, { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import Grid from "@mui/material/Grid";
import CountryItem from "./CountryItem";
import { Box } from "@mui/material";

const ListCountrys: FC = () => {
  const { countrysList } = useAppSelector((state) => state.countrysSlice);
  const { search } = useAppSelector((state) => state.searchSlice);
  const filteredCountrysList = countrysList.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box mt={4}>
      <Grid
        container
        spacing={3}
        columns={16}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {filteredCountrysList &&
          filteredCountrysList.map((country) => (
            <CountryItem key={country.name} country={country} />
          ))}
      </Grid>
    </Box>
  );
};

export default ListCountrys;
