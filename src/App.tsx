import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { RoutePaths } from "./routes/routes";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={RoutePaths.Home} element={<Home />}></Route>
        <Route
          path={`${RoutePaths.Country}/:name`}
          element={<CountryDetail />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
