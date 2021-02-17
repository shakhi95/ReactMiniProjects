import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";

import data from "./data";

const ReviewsAnime = () => {
  //
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //
    const slide = setInterval(() => {
      nextReview();
    }, 5000);

    return () => {
      clearInterval(slide);
    };
  }, [index]);

  const nextReview = () => {
    const checkedValue = index + 1 === data.length ? 0 : index + 1;
    setIndex(checkedValue);
  };

  const prevReview = () => {
    const checkedValue = index - 1 === -1 ? data.length - 1 : index - 1;
    setIndex(checkedValue);
  };

  const renderedList = () => {
    return data.map((item, itemIndex) => {
      //
      const trans = () => {
        if (itemIndex > index) {
          return { transform: "translateX(100%)", opacity: "0" };
        } else if (itemIndex === index) {
          return { transform: "translateX(0)", opacity: "1" };
        } else if (itemIndex < index) {
          return { transform: "translateX(-100%)", opacity: "0" };
        }
      };

      return (
        <div
          key={item.id}
          className="carousel-item active"
          style={{
            ...trans(),
            transition: "transform 0.6s ease-in-out,opacity 0.3s ease-in-out",
          }}
        >
          <img
            src={item.image}
            className="rounded-circle border border-3 border-primary mb-3"
            alt={item.name}
            width="100"
            height="100"
            style={{ objectFit: "cover" }}
          />
          <h6 className="text-uppercase text-primary">{item.name}</h6>
          <small className="text-capitalize">{item.job}</small>
          <p className="text-muted fst-italic my-3 w-75 mx-auto">{item.text}</p>
          <FaQuoteRight className="fs-1 mt-3 text-danger" />
        </div>
      );
    });
  };

  return (
    <div className="container-fluid bg-info min-vh-100 py-5">
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto">
          <div className="bg-warning border rounded py-4 px-1 px-md-4 text-center shadow">
            <h3 className="mb-5">Reviews !</h3>
            <div className="carousel">
              <div className="carousel-inner">{renderedList()}</div>

              <button
                className="border-0 bg-transparent carousel-control-prev"
                onClick={prevReview}
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="border-0 bg-transparent carousel-control-next"
                onClick={nextReview}
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAnime;
