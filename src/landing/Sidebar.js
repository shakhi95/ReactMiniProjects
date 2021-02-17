import React from "react";

import { useGlobalState } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  //
  const { closeSidebar, isSidebarOpen } = useGlobalState();

  return (
    <div
      className="modal p-3 p-sm-5 d-block d-md-none"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(7, 0, 10, 0.63)",
        transform: `${isSidebarOpen ? "scale(1)" : "scale(0)"}`,
        transition: "transform 0.7s",
      }}
    >
      <div className="card h-100 py-3 py-sm-5" style={{ overflowY: "auto" }}>
        <button
          type="button"
          className="btn-close ms-auto me-5"
          onClick={closeSidebar}
        ></button>
        <div className="container px-5">
          {sublinks.map((link, index) => {
            return (
              <div key={index} className="my-3">
                <h4 className="text-uppercase text-info">{link.page}</h4>
                <div className="row px-3">
                  {link.links.map((sublink, index) => {
                    return (
                      <div key={index} className="col-sm-6 my-1">
                        <div className="d-flex">
                          <small className="text-primary">{sublink.icon}</small>
                          <h6 className="ms-2 text-capitalize">
                            {sublink.label}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
