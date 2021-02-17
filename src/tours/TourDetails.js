import React, { useState } from "react";

const TourDetails = ({ tour, deleteTour }) => {
  //
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="row">
      <div className="col-sm-9 col-md-6 mx-auto my-5">
        <div className="card">
          <img
            src={tour.image}
            className="card-img-top"
            alt={tour.id}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body text-start">
            <div className="d-flex justify-content-between align-items-center flex-wrap  mb-3">
              <h5 className="card-title">{tour.name}</h5>
              <small className="text-info bg-light border p-1">
                $ {tour.price}
              </small>
            </div>
            <p className="card-text">
              <small>
                {readMore ? tour.info : `${tour.info.substring(0, 200)}. . .`}
              </small>
              <button
                className="btn btn-link p-0 ms-1 text-decoration-none border-0"
                onClick={() => setReadMore(!readMore)}
              >
                <small>{readMore ? "Show Less" : "Read More"}</small>
              </button>
            </p>
            <div className="text-center">
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTour(tour.id)}
              >
                Not Intrested !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
