import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalState } from "./context";

const Navbar = () => {
  //
  const { itemCount } = useGlobalState();

  return (
    <div className="bg-primary text-white px-sm-5 shadow">
      <div className="px-5 py-2 d-flex justify-content-between align-items-center">
        <h3>BuyCart !</h3>
        <button type="button" className="btn btn-primary position-relative">
          <FaShoppingBag className="fs-4" />
          <span className="position-absolute badge rounded-pill bg-danger">
            {itemCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
