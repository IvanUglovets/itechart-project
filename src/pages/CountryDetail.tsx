import React, { useEffect } from "react";
import Button from "../components/Button";
import InfoDetail from "./../components/InfoDetail";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOneCountry } from "../redux/thunk/getOneCountry";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import Box from "@mui/material/Box";

const CountryDetail = () => {
  const { country } = useAppSelector((state) => state.detailCountrySlice);
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { name } = useParams();
  useEffect(() => {
    dispatch(getOneCountry(name!));
  }, [name]);

  const goBack = () => {
    history(-1);
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        maxWidth: "1280px",
        margin: "0 auto",
        marginTop: "6rem",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button onClick={goBack} className="detail__button-back">
          <KeyboardBackspaceIcon sx={{ marginRight: "10px" }} /> Back
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InfoDetail country={country} />
      </Box>
    </Box>
  );
};

export default CountryDetail;
