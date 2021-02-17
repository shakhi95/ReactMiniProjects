import React from "react";
import { useGlobalValue } from "./conext";

import { links, socials } from "./data";

const Sidebar = () => {
  //
  const { closeSidebar, isSidebarOpen } = useGlobalValue();

  return (
    <div
      className={`modal ${isSidebarOpen ? "d-block" : ""}`}
      style={{ backgroundColor: "rgba(7, 0, 10, 0.63)" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-light min-vh-100">
            <div className="p-3 d-flex flex-column h-100">
              <button
                type="button"
                className="btn-close ms-auto"
                onClick={closeSidebar}
              ></button>
              <h4 className="text-center">Slider + Modal</h4>
              <hr className="text-primary my-2" />
              {links.map((link) => {
                return (
                  <div
                    key={link.id}
                    className="d-flex py-1 my-2"
                    style={{ cursor: "pointer" }}
                  >
                    {link.icon}
                    <h6 className="text-uppercase ms-2">{link.text}</h6>
                  </div>
                );
              })}
              <div className="mt-auto mb-2 d-flex justify-content-around">
                {socials.map((social) => {
                  return (
                    <a key={social.id} href={social.url}>
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
