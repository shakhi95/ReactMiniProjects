import React, { useState, useEffect } from "react";

import UserDetails from "./UserDetails";

const UsersList = () => {
  //
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error("Error");
        }
      })
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  const deleteOne = (id) => {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  };

  const deleteAll = () => {
    setUsers([]);
  };

  const renderUsers = users.map(({ html_url, avatar_url, login, id }) => {
    return (
      <UserDetails
        img={avatar_url}
        name={login}
        proUrl={html_url}
        key={id}
        id={id}
        deleteOne={deleteOne}
      />
    );
  });

  return (
    <div className="container-fluid bg-info py-5 min-vh-100">
      {renderUsers}
      <div className="text-center">
        <button className="btn btn-danger my-3" onClick={deleteAll}>
          Clear All !
        </button>
      </div>
    </div>
  );
};

export default UsersList;
