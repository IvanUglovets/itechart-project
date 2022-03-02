import React, { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import Grid from "@mui/material/Grid";
import CountryItem from "./CountryItem";
import { Box } from "@mui/material";

const ListCountrys: FC = () => {
  const { countrysList } = useAppSelector((state) => state.countrysSlice);
  return (
    <Box mt={4}>
      <Grid
        container
        spacing={3}
        columns={16}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {countrysList &&
          countrysList.map((country) => (
            <CountryItem key={country.name} country={country} />
          ))}
      </Grid>
    </Box>
  );
};

export default ListCountrys;
