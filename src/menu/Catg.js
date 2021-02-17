import React, { useState } from "react";

const Catg = ({ catgList, catgSelection }) => {
  //
  const [active, setActive] = useState("All");

  const renderCatg = () => {
    return catgList.map((catg) => {
      //
      const state = catg === active ? "active" : null;

      return (
        <button
          key={catg}
          className={`btn btn-outline-success border-0 mx-1 ${state}`}
          onClick={() => {
            setActive(catg);
            catgSelection(catg);
          }}
        >
          {catg}
        </button>
      );
    });
  };
  return <div className="text-center my-5">{renderCatg()}</div>;
};

export default Catg;
