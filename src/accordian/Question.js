import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Question = ({ que }) => {
  //
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="card my-3 py-2 px-3 shadow-sm">
      <div
        className="d-flex justify-content-between align-items-center user-select-none"
        onClick={() => setIsActive(!isActive)}
        style={{ cursor: "pointer" }}
      >
        <h6 className="m-0">{que.title}</h6>
        <div className="text-primary">
          {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
        </div>
      </div>
      {isActive ? (
        <p className="mt-3 text-muted">
          <small>{que.info}</small>
        </p>
      ) : null}
    </div>
  );
};
//
export default Question;
