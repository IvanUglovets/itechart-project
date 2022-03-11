import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/useAppSelector";
import { filterByCode } from "../redux/thunk/filterByCode";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";

const LinksForCountries = () => {
  const history = useNavigate();
  const { country } = useAppSelector((state) => state.detailCountrySlice);
  const { borders } = useAppSelector((state) => state.codeSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (country?.borders?.length! > 0)
      dispatch(filterByCode(country?.borders!));
  }, [country?.borders]);

  return (
    <Box sx={{ width: "600px" }}>
      <Typography component="div" sx={{ fontWeight: "bold" }}>
        Border Countries:{" "}
        {borders &&
          borders.map((item) => (
            <button
              className="link__countrys"
              key={item.name}
              onClick={() => history(`/country/${item.name}`)}
            >
              {item.name}
            </button>
          ))}
      </Typography>
    </Box>
  );
};

export default LinksForCountries;
