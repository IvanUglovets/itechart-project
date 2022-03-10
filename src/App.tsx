import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { RoutePaths } from "./routes/routes";
import { useAuth } from "./hooks/useAuth";

const App: FC = () => {
  const { isAuth } = useAuth();
  return (
    <>
      <Header />
      {isAuth ? (
        <Routes>
          <Route path={RoutePaths.Home} element={<Home />} />
          <Route
            path={`${RoutePaths.Country}/:name`}
            element={<CountryDetail />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={RoutePaths.Home} element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
