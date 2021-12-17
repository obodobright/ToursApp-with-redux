import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TourDetails } from "./Component/TourDetails";
import Tours from "./Component/tours";

export const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tours />} />
        <Route path="/tourDetails/:id" element={<TourDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
