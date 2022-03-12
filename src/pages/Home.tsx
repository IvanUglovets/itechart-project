import React from "react";
import ListCountries from "../components/ListCountries";
import Box from "@mui/material/Box";
import SearchFiltersBox from "../components/SearchFiltersBox";
import { useAppSelector } from "../hooks/useAppSelector";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { isLoading } = useAppSelector((state) => state.countrysSlice);
  return (
    <>
      {isLoading ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <p>Loading...</p>
        </h1>
      ) : (
        <Box component="section" mt={6} sx={{ padding: "0 40px" }}>
          <SearchFiltersBox />
          <ListCountries />
        </Box>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Home;
