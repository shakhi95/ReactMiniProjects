import React from "react";
import { useGlobalValue } from "./conext";

const Home = () => {
  //
  const { openModal, openSidebar } = useGlobalValue();

  return (
    <div className="min-vh-100 bg-info d-flex justify-content-center align-items-center position-relative">
      <div className="position-absolute" style={{ top: "25px", left: "25px" }}>
        <button
          className="btn btn-outline-warning bg-dark"
          onClick={openSidebar}
        >
          Open Sidebar
        </button>
      </div>
      <div>
        <button className="btn btn-outline-warning bg-dark" onClick={openModal}>
          Open Modal
        </button>
      </div>
    </div>
  );
};

export default Home;
