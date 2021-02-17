import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalState } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
  //
  const { removeItem, upByOne, downByOne } = useGlobalState();

  return (
    <div className="card my-2 py-2 px-3">
      <div className="d-flex align-items-center user-select-none">
        <div style={{ width: "10%" }}>
          <img src={img} alt={title} className="img-fluid" />
        </div>
        <div className="d-flex flex-column align-items-start ms-2">
          <h6 className="text-primary text-capitalize text-start">{title}</h6>
          <small className="text-muted fw-bold">${price}</small>
          <small
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => removeItem(id)}
          >
            Remove
          </small>
        </div>
        <div className="d-flex flex-column align-items-center ms-auto me-3">
          <FaAngleUp
            className="fs-3 text-info"
            style={{ cursor: "pointer" }}
            onClick={() => upByOne(id)}
          />
          <h6 className="m-0 my-1 fw-bold user-select-none">{amount}</h6>
          <FaAngleDown
            className="fs-3 text-info"
            style={{ cursor: "pointer" }}
            onClick={() => downByOne(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
