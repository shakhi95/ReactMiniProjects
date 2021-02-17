import React from "react";

import backImg from "./images/hero.svg";
import phoneImg from "./images/phone.svg";
import { useGlobalState } from "./context";

const Hero = () => {
  //
  const { closeDrop } = useGlobalState();

  return (
    <div
      className="min-vh-100 bg-light"
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundRepeat: "no-repeat",
      }}
      onMouseOver={closeDrop}
    >
      <div className="container pt-5">
        <div className="row align-content-center align-items-center pt-5">
          <div className="ps-md-5 col-md-6">
            <h1 className="fs-1">Payments infrastructure for the internet</h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button className="btn btn-sm btn-dark">Start Now !</button>
          </div>
          <div className="col-md-6 text-center d-none d-md-block">
            <img
              src={phoneImg}
              alt="hero"
              className="h-50"
              style={{ width: "40%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
