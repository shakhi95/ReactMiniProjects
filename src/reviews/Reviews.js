import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import data from "./data";

const Reviews = () => {
  //
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = data[index];

  const nextReview = () => {
    const checkedValue = index + 1 === data.length ? 0 : index + 1;

    setIndex(checkedValue);
  };

  const prevReview = () => {
    const checkedValue = index - 1 === -1 ? data.length - 1 : index - 1;
    setIndex(checkedValue);
  };

  const randomReview = () => {
    let value = Math.floor(Math.random() * data.length);

    if (value === index) {
      setIndex(value === 3 ? value - 1 : value + 1);
    } else {
      setIndex(value);
    }
  };

  return (
    <div className="container-fluid bg-info min-vh-100 pt-3">
      <div className="row">
        <div className="col-sm-8 col-md-6 mx-auto">
          <div className="bg-white my-5 border rounded p-4 text-center shadow">
            <h4 className="text-primary">Your Reviews</h4>
            <hr />
            <div
              className="position-relative mb-3"
              style={{ display: "inline-block" }}
            >
              <img
                className="rounded-circle"
                src={image}
                alt="ds"
                style={{ height: "100px", width: "100px", objectFit: "cover" }}
              />
              <FaQuoteRight className="position-absolute top-0 start-0 " />
            </div>
            <h6 className="text-info">{name.toUpperCase()}</h6>
            <small className="text-muted">{job.toUpperCase()}</small>
            <br />
            <br />
            <p>{text}</p>
            <div>
              <button
                className="btn btn-outline-primary p-0 pb-1 mx-1"
                onClick={prevReview}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-outline-primary p-0 pb-1 mx-1"
                onClick={nextReview}
              >
                <FaChevronRight />
              </button>
            </div>
            <button className="btn btn-sm btn-info mt-3" onClick={randomReview}>
              Suprise Me !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
