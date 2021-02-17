import React from "react";
import {
  FaRegTrashAlt,
  FaPencilAlt,
  FaRegCircle,
  FaRegCheckCircle,
} from "react-icons/fa";

const Item = ({ name, state, id, removeItem, checkItem, editItem }) => {
  //

  return (
    <div className="d-flex align-items-center border rounded my-2 py-2 px-3">
      <div
        className="d-flex align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => checkItem(id, state)}
      >
        {state === "done" ? (
          <FaRegCheckCircle className="text-primary fs-6 my-0" />
        ) : (
          <FaRegCircle className="text-primary fs-6 my-0" />
        )}
      </div>
      <h6 className="text-capitalize m-0 ms-2">{name}</h6>
      <div className="d-flex align-items-center ms-auto">
        <FaPencilAlt
          className="text-warning fs-6 my-0"
          style={{ cursor: "pointer" }}
          onClick={() => editItem(id, name)}
        />
        <FaRegTrashAlt
          className="text-danger fs-6 my-0 ms-2"
          style={{ cursor: "pointer" }}
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default Item;
