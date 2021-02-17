import React from "react";

const UserDetails = ({ img, name, proUrl, deleteOne, id }) => {
  return (
    <div className="row">
      <div className="col-sm-8 col-md-6 mx-auto">
        <div className="d-flex flex-wrap py-2 px-3 bg-light my-2 align-items-center shadow-sm border rounded">
          <img
            src={img}
            alt={name}
            className="rounded-circle me-3"
            height="50px"
            width="50px"
          />
          <div>
            <h5>{name}</h5>
            <a
              href={proUrl}
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <small>View ProFile</small>
            </a>
          </div>
          <button
            className="btn btn-sm btn-warning ms-auto"
            onClick={() => deleteOne(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
