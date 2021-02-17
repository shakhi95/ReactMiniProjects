import React, { useState } from "react";

import data from "./data";
import Catg from "./Catg";
import MenuItem from "./MenuItem";

const catg = ["All", ...new Set(data.map((item) => item.category))];

const Menu = () => {
  //
  const [selectedList, setSelectedList] = useState(data);

  const catgSelection = (catg) => {
    if (catg === "All") {
      setSelectedList(data);
      return;
    }
    setSelectedList(data.filter((item) => item.category === catg));
  };

  const renderedList = () => {
    return selectedList.map((item) => {
      return (
        <div className="col-md-6" key={item.id}>
          <MenuItem item={item} />
        </div>
      );
    });
  };

  return (
    <div className="container py-5">
      <div className="text-center">
        <h1>Our Menu</h1>
        <hr
          className=" mx-auto text-primary"
          style={{ height: "0.15rem", opacity: "1", width: "10%" }}
        />
      </div>
      <Catg catgList={catg} catgSelection={catgSelection} />
      <div className="row">{renderedList()}</div>
    </div>
  );
};

export default Menu;
