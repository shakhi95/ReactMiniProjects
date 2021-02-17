import React from "react";
import { useGlobalValues } from "../context";

const Modal = () => {
  //
  const { allQue, setIsSetupOpen, setIsModalOpen, correct } = useGlobalValues();

  const rate = (correct / allQue.length) * 100;

  const handleClick = () => {
    setIsModalOpen(false);
    setIsSetupOpen(true);
  };

  return (
    <div
      className="vh-100 vw-100 container-fluid py-5"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="row h-100 align-items-center">
        <div className="col-md-6 mx-auto">
          <div className="card shadow py-3 px-4 text-center">
            <h3 className="text-primary mb-3">
              {rate < 50 ? "You Lost !!" : "You Won !!"}
            </h3>
            <h6>You Answered {rate}% of All Questions</h6>
            <button
              className="btn btn-sm btn-warning mt-5"
              onClick={handleClick}
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
