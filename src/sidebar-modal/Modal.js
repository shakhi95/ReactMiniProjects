import React from "react";
import { useGlobalValue } from "./conext";

const Modal = () => {
  //
  const { closeModal, isModalOpen } = useGlobalValue();

  return (
    <div
      className={`modal pt-5 ${isModalOpen ? "d-block" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(7, 0, 10, 0.63)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header py-1 bg-light">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer py-1 bg-light">
            <button
              type="button"
              className="btn btn-sm btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-sm btn-primary">
              Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
