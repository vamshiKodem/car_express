import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../screens/home/home";
import { NavBar } from "../screens/navBar/navBar";
import { InvalidScreen } from "../screens/invalidScreen";
import { CarDetailView } from "../screens/carDetailView/carDetailView";

export const NavRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<CarDetailView />} />
        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
