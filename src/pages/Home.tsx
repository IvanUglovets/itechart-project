import React, { useEffect } from "react";
import ListCountrys from "../components/ListCountrys";
import SearchFiltersBox from "../components/SearchFiltersBox";
import { getAllCountrys } from "../redux/thunk/getAllCountrys";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

const Home = () => {
  const { isLoading } = useAppSelector((state) => state.countrysSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCountrys());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <SearchFiltersBox />
          <ListCountrys />
        </>
      )}
    </>
  );
};

export default Home;
