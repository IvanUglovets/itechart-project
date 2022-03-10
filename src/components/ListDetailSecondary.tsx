import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";

const ListDetailSecondary = () => {
  const { country } = useAppSelector((state) => state.detailCountrySlice);

  return (
    <ul className="info__list">
      <li>
        <span className="info-list-item-static">Top Level Domain: </span>
        <span className="info-list-item-dynamic">
          {" "}
          {country?.topLevelDomain &&
            country?.topLevelDomain.map((item) => (
              <span key={item}>{item}</span>
            ))}
        </span>
      </li>
      <li>
        <span className="info-list-item-static">Currencies: </span>
        <span className="info-list-item-dynamic">
          {" "}
          {country?.currencies.map((item) => (
            <span key={item.code}>{item.name}</span>
          ))}
        </span>
      </li>
      <li>
        <span className="info-list-item-static">Languages: </span>
        <span className="info-list-item-dynamic">
          {" "}
          {country?.languages.map((item) => (
            <span key={item.name}>{item.name} </span>
          ))}
        </span>
      </li>
    </ul>
  );
};

export default ListDetailSecondary;
