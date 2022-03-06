import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCountry } from "../redux/thunk/getOneCountry";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import Box from "@mui/material/Box";

const CountryDetail = () => {
  const { country } = useAppSelector((state) => state.detailCountrySlice);
  const dispatch = useAppDispatch();
  const { name } = useParams();
  useEffect(() => {
          dispatch(getOneCountry(name!));
  }, [name]);

    return (
      <Box component="section" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div>
            {country?.name}
        </div>
      </Box>
  );
};

export default CountryDetail;
