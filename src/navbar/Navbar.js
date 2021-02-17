import React, { useState } from "react";

import { links, social } from "./data";

const Navbar = () => {
  //
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#none">
          TEST!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${show ? "d-block" : "d-none"}`}
        >
          <div className="navbar-nav ms-auto">
            {links.map((link, index) => {
              return (
                <a
                  key={link.id}
                  className={`nav-link text-capitalize ${
                    index === 0 ? "active" : ""
                  }`}
                  href="#none"
                >
                  {link.text}
                </a>
              );
            })}
          </div>
          <div className="navbar-nav ms-auto flex-row justify-content-center justify-content-md-start">
            {social.map((socia) => {
              return (
                <a
                  key={socia.id}
                  className="nav-link mx-2 m-md-0"
                  href={socia.url}
                >
                  {socia.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
