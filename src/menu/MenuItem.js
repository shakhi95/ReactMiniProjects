import React from "react";

import img from "./images/item-1.jpeg";

const MenuItem = ({ item }) => {
  //
  return (
    <div className="row my-4">
      <div className="col-sm-4 px-sm-0">
        <img
          src="https://raw.githubusercontent.com/shakhi95/iranDecor-Store/main/src/assets/hero-bcg-2.jpeg"
          alt={item.title}
          style={{
            width: "100%",
            height: "130px",
            objectFit: "cover",
            border: "1px solid grey",
          }}
        />
      </div>
      <div className="col-sm-8">
        <div className="d-flex justify-content-between align-items-center flex-wrap pt-2 pt-sm-0">
          <h6 className="m-0 text-primary text-capitalize">{item.title}</h6>
          <small>${item.price}</small>
        </div>
        <hr className="my-2" />
        <small className="text-muted">{item.desc}</small>
      </div>
    </div>
  );
};

export default MenuItem;
