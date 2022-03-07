import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ICountry } from "../models/ICountry";
import ListDetailMain from "./ListDetailMain";
import ListDetailSecondary from "./ListDetailSecondary";

interface IPropsInfoDetail {
  country: ICountry | null;
}

export const InfoDetail: FC<IPropsInfoDetail> = ({ country }) => {
  if (!country) {
    return null;
  }

  console.log(country);

  return (
    <>
      <Box>
        <img src={country.flag} alt={country.name} className="info__img" />
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "26px", marginBottom: "2rem" }}
          >
            {country.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListDetailMain />
          <ListDetailSecondary />
        </Box>
      </Box>
    </>
  );
};

export default InfoDetail;
