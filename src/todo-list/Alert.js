import React, { useEffect } from "react";

const Alert = ({ alert, showAlert }) => {
  //
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  return (
    <div
      className={`alert my-2 p-0 alert-${alert.color}`}
      style={{ visibility: alert.visibility }}
    >
      <small>{alert.mssg}</small>
    </div>
  );
};

export default Alert;
