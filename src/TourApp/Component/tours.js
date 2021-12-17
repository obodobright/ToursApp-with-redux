import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Tour from "./Tour";
import "./tour.css";
import { useFetch } from "../hooks/useFetch";
import { IsLoading } from "../hooks/isLoading";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";
  const { loading, fetchTours, error } = useFetch();
  const tour = useSelector((state) => state.tour.tours);

  const fetchTour = async () => {
    fetchTours(url);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  return (
    <div className="Container">
      <div className="Wrapper">
        <h1>Tours App </h1>
        {loading && <IsLoading />}
        {error}
        <Tour tour={tour} />
      </div>
    </div>
  );
};

export default Tours;
