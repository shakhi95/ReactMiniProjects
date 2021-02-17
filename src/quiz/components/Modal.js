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
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="card w-50 shadow py-3 px-4 text-center">
        <h3 className="text-primary mb-3">
          {rate < 50 ? "You Lost !!" : "You Won !!"}
        </h3>
        <h6>You Answered {rate}% of All Questions</h6>
        <button className="btn btn-sm btn-warning mt-5" onClick={handleClick}>
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Modal;
