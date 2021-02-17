import React, { useState, useEffect } from "react";

import { useFetch } from "./useFetch";
import paginate from "./utilities";
import UserBox from "./UserBox";
import Spinner from "./Spinner";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const Pagination = () => {
  //
  const { data, loading } = useFetch(url);
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setUsers(paginate(data)[page]);
  }, [loading, page]);

  const renderList = () => {
    return users.map((user, index) => {
      return (
        <div key={user.id} className="col-sm-6 col-md-4 col-lg-3">
          <UserBox {...user} />
        </div>
      );
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      if (oldPage === 0) {
        return 0;
      }
      return oldPage - 1;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      if (oldPage === paginate(data).length - 1) {
        return paginate(data).length - 1;
      }
      return oldPage + 1;
    });
  };

  const renderPagination = () => {
    return (
      <nav className="mb-5">
        <ul className="pagination justify-content-center flex-wrap">
          <li
            className={`page-item ${page === 0 && "disabled"}`}
            onClick={prevPage}
          >
            <button className="page-link">Previous</button>
          </li>
          {paginate(data).map((_, index) => {
            return (
              <li
                key={index}
                className={`page-item ${index === page && "active"}`}
                onClick={() => setPage(index)}
              >
                <button className="page-link ">{index + 1}</button>
              </li>
            );
          })}
          <li
            className={`page-item ${
              paginate(data).length - 1 === page && "disabled"
            }`}
            onClick={nextPage}
          >
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid bg-info py-5 min-vh-100">
      <div className="text-center">
        <h1>Pagination</h1>
        <hr />
        {loading || renderPagination()}
        <div className="row">{renderList()}</div>
      </div>
    </div>
  );
};

export default Pagination;
