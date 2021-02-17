import React, { useEffect, useRef, useState } from "react";

import { useGlobalState } from "./context";
import sublinks from "./data";

const Dropdown = () => {
  //
  const [selected, setSelected] = useState(sublinks[0]);
  const dropBox = useRef(null);

  const { isDropOpen, dropProps } = useGlobalState();

  useEffect(() => {
    const { center, bottom } = dropProps.location;
    dropBox.current.style.left = `${center}px`;
    dropBox.current.style.top = `${bottom}px`;

    setSelected(sublinks.find((link) => link.page === dropProps.page));
  }, [dropProps]);

  return (
    <div
      ref={dropBox}
      className={`card p-3 shadow position-absolute ${
        isDropOpen ? "" : "d-none"
      }`}
      style={{
        transform: "translateX(-50%)",
        transition: "left 0.5s",
      }}
    >
      {selected ? (
        <div className="row p-3">
          <h6 className="text-uppercase text-info text-center">
            {selected.page}
          </h6>
          {selected.links.map((link, index) => {
            return (
              <div key={index} className="col-6 my-1">
                <div className="d-flex">
                  <small className="text-primary">{link.icon}</small>
                  <h6 className="ms-2 text-capitalize">{link.label}</h6>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
