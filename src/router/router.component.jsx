import React from "react";
import HomePage from "../views/HomePage";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route element={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
