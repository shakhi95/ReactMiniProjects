import React from "react";

import { useGlobalState } from "./context";
import sublinks from "./data";

const Navbar = () => {
  //
  const { openSidebar, openDrop, closeDrop } = useGlobalState();

  const showDrop = (e) => {
    const page = e.target.textContent;
    const itemRect = e.target.getBoundingClientRect();
    const center = (itemRect.left + itemRect.right) / 2;
    const bottom = itemRect.bottom;

    openDrop(page, { center, bottom });
  };

  const hideDrop = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeDrop();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-transparent position-absolute w-100"
      onMouseOver={hideDrop}
    >
      <div className="container">
        <h2 className="fw-bold">
          <a
            className="navbar-brand text-uppercase"
            href="#"
            style={{
              textShadow:
                "2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)",
            }}
          >
            Test Brand!
          </a>
        </h2>
        <button className="navbar-toggler" type="button" onClick={openSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div
            className="navbar-nav mx-auto"
            style={{ transform: "translateX(-3rem)" }}
          >
            {sublinks.map((link, index) => {
              return (
                <a
                  key={index}
                  className="nav-link text-capitalize fw-bold active px-3"
                  href="#"
                  onMouseOver={showDrop}
                >
                  {link.page}
                </a>
              );
            })}
          </div>
          <button className="btn btn-sm btn-dark">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
