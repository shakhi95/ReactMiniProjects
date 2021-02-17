import React from "react";

import Spinner from "./Spinner";
import CartItem from "./CartItem";
import { useGlobalState } from "./context";

const CartList = () => {
  //
  const { loading, cartList, clearAll, total } = useGlobalState();

  const renderList = () => {
    return cartList.map((item) => {
      return <CartItem key={item.id} {...item} />;
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid min-vh-100 py-5 text-center bg-light">
      <h1 className="text-uppercase">your bag</h1>
      {cartList.length === 0 ? (
        <h6 className="text-capitalize mt-3 text-danger">
          is currently empty !
        </h6>
      ) : (
        <div className="row">
          <div className="col-sm-10 col-md-7 mx-auto ">
            <div className="mt-5">
              {renderList()}
              <hr />
              <div className="d-flex justify-content-between fw-bolder px-3">
                <h5>Total :</h5>
                <h5>${total}</h5>
              </div>
              <button
                className="btn btn-sm btn-outline-danger mt-3 px-5 shadow"
                onClick={clearAll}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
