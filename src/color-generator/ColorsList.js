import React, { useState, useRef } from "react";
import Values from "values.js";
import { v4 as uuidv4 } from "uuid";

import ColorBox from "./ColorBox";

const ColorList = () => {
  //
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    if (color.length < 3) {
      inputRef.current.classList.add("is-invalid");
    } else {
      inputRef.current.classList.remove("is-invalid");
    }

    try {
      const colors = new Values(color);
      inputRef.current.classList.remove("is-invalid");
      setColorList(colors.all(10));
    } catch {
      inputRef.current.classList.add("is-invalid");
      setColorList([]);
    }
  };

  const renderList = () => {
    return colorList.map((color, index) => {
      return (
        <ColorBox
          key={uuidv4()}
          {...color}
          hex={`#${color.hex}`}
          index={index}
        />
      );
    });
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="text-primary">Color Generator !</h2>
      <div className="row">
        <div className="col-md-8 mx-auto my-3">
          <div className="card p-3 bg-light">
            <form
              className="d-flex justify-content-center align-items-center flex-wrap"
              onSubmit={onSubmit}
            >
              <label className="fw-bold" htmlFor="colorName">
                <small> Type a Valid Color :</small>
              </label>
              <input
                className="form-control form-control-sm w-auto flex-fill m-2 my-sm-0"
                type="text"
                id="colorName"
                placeholder='"red" or "rgb(255, 0, 0)" or "#ff0000"'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                ref={inputRef}
              />
              <button className="btn btn-sm btn-outline-primary" type="submit">
                Generate
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${colorList.length === 0 ? "d-none" : ""}`}>
        <small>* Click To Copy</small>
        <hr />
      </div>
      {renderList()}
    </div>
  );
};

export default ColorList;
