import React, { useState, useEffect } from "react";

import TourDetails from "./TourDetails";
import Spinner from "./Spinner";

const ToursList = () => {
  //
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Error");
        }
      })
      .then((res) => {
        setTours(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const renderTours = () => {
    return tours.map((tour) => {
      return <TourDetails tour={tour} key={tour.id} deleteTour={deleteTour} />;
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-info py-5 text-center min-vh-100">
      <h1>OUR TOURS : {tours.length}</h1>
      <div className="container">{renderTours()}</div>
    </div>
  );
};

export default ToursList;
