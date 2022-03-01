import React, { FC } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
