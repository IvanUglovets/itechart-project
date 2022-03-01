import React, { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";

const ListCountrys: FC = () => {
  const { countrysList } = useAppSelector((state) => state.countrysSlice);
  return (
    <div>
      {countrysList && countrysList.map((country) => <div>{country.name}</div>)}
    </div>
  );
};

export default ListCountrys;
