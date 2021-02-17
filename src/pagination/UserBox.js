import React from "react";

const UserBox = ({ avatar_url, html_url, login }) => {
  return (
    <div className="card my-2 py-2 px-3">
      <div className="mx-auto">
        <img
          src={avatar_url}
          alt={login}
          className="img-fluid rounded-circle border border-2 border-primary"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
      <h6 className="text-uppercase text-primary my-3">{login}</h6>
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-sm btn-outline-danger w-100 py-0"
      >
        See Profile
      </a>
    </div>
  );
};

export default UserBox;
