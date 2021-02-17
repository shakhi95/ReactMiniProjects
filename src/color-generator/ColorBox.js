import React from "react";

const ColorBox = (props) => {
  //
  const rgb = props.rgb.join(",");

  const moveToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="row rounded py-2 px-2 my-1 mx-1"
      style={{
        backgroundColor: props.hex,
        color: props.index > 9 ? "white" : "black",
      }}
    >
      <div className="col-2 col-sm-2">
        <small className="text-center">{props.weight + "%"}</small>
      </div>
      <div className="col-5 col-sm-4">
        <small
          className="text-center"
          style={{ cursor: "pointer" }}
          title="Copy To Clipboard"
          onClick={() => moveToClipboard(`rgb(${rgb})`)}
        >{`RGB(${rgb})`}</small>
      </div>
      <div className="col-5 col-sm-4">
        <small
          className="text-center text-uppercase"
          style={{ cursor: "pointer" }}
          title="Copy To Clipboard"
          onClick={() => moveToClipboard(props.hex)}
        >
          {props.hex}
        </small>
      </div>
      <div className="d-none d-sm-block col-sm-2">
        <small className="text-center text-uppercase">{props.type}</small>
      </div>
    </div>
  );
};

export default ColorBox;
