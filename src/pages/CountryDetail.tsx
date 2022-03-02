import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCountry } from "./../redux/thunk/getOneCountry";
import { useAppDispatch } from "./../hooks/useAppDispatch";
import { useAppSelector } from "./../hooks/useAppSelector";

const CountryDetail = () => {
  const { country } = useAppSelector((state) => state.detailCountrySlice);
  const dispatch = useAppDispatch();
  const { name } = useParams();
  useEffect(() => {
    if (name) dispatch(getOneCountry(name));
  }, [name, dispatch]);

  console.log(country);

  return <div>{country?.name}</div>;
};

export default CountryDetail;
