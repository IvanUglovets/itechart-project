import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";

const ListDetailMain = () => {
  const { country } = useAppSelector((state) => state.detailCountrySlice);
  return (
    <ul className="info__list" style={{ marginRight: "100px" }}>
      <li>
        <span className="info-list-item-static">Native Name: </span>
        <span className="info-list-item-dynamic"> {country?.nativeName}</span>
      </li>
      <li>
        <span className="info-list-item-static">Population: </span>
        <span className="info-list-item-dynamic"> {country?.population}</span>
      </li>
      <li>
        <span className="info-list-item-static">Region: </span>
        <span className="info-list-item-dynamic"> {country?.region}</span>
      </li>
      <li>
        <span className="info-list-item-static">Sub Region: </span>
        <span className="info-list-item-dynamic"> {country?.subregion}</span>
      </li>
      <li>
        <span className="info-list-item-static">Capital: </span>
        <span className="info-list-item-dynamic"> {country?.capital}</span>
      </li>
    </ul>
  );
};

export default ListDetailMain;
