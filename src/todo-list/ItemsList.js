import React, { useState, useEffect } from "react";

import Item from "./Item";
import Alert from "./Alert";

const getListLS = () => {
  let itemList;
  if (localStorage.getItem("react-todo") === null) {
    itemList = [];
  } else {
    itemList = JSON.parse(localStorage.getItem("react-todo"));
  }

  return itemList;
};

const ItemsList = () => {
  //
  const [itemName, setItemName] = useState("");
  const [itemsList, setItemsList] = useState(getListLS());
  const [alert, setAlert] = useState({
    visibility: "hidden",
    color: "",
    mssg: "",
  });
  const [isEdit, setIsEdit] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!itemName) {
      //
      showAlert("visible", "warning", "Please Type SomeThing !");
      //
    } else if (isEdit) {
      //
      setItemsList(
        itemsList.map((item) => {
          if (item.id === isEdit) {
            item.name = itemName;
          }
          return item;
        })
      );
      setIsEdit(null);
      setItemName("");
      showAlert("visible", "success", "Item Edited");
      //
    } else {
      //
      setItemsList([
        ...itemsList,
        {
          id: new Date().getTime().toString(),
          name: itemName,
          state: "unDone",
        },
      ]);
      setItemName("");
      showAlert("visible", "success", "Item Added !");
      //
    }
  };

  const renderedList = () => {
    return itemsList.map((item) => {
      return (
        <Item
          key={item.id}
          {...item}
          removeItem={removeItem}
          checkItem={checkItem}
          editItem={editItem}
        />
      );
    });
  };

  const showAlert = (visibility = "hidden", color = "", mssg = "") => {
    setAlert({ visibility, color, mssg });
  };

  const clearAll = () => {
    setItemsList([]);
    showAlert("visible", "danger", "All Deleted !");
  };

  const removeItem = (id) => {
    setItemsList(itemsList.filter((item) => item.id !== id));
    showAlert("visible", "danger", "One Item Deleted !");
  };

  const checkItem = (id, state) => {
    setItemsList(
      itemsList.map((item) => {
        if (item.id === id) {
          item.state = state === "done" ? "unDone" : "done";
        }
        return item;
      })
    );

    if (state === "unDone") {
      showAlert("visible", "success", "Well Done !");
    }
  };

  const editItem = (id, name) => {
    setIsEdit(id);
    setItemName(name);
  };

  useEffect(() => {
    localStorage.setItem("react-todo", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <div className=" container-fluid min-vh-100 bg-info py-5">
      <div className="row">
        <div className="col-sm-10 col-md-6 mx-auto">
          <div className="card text-center p-4">
            <h4 className="text-primary mb-3">
              Your <span className="fw-bold h1">TODO</span> List !
            </h4>
            <form
              className="d-flex flex-wrap align-items-center mt-3"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                className="form-control w-auto flex-fill m-2"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g. Code sth...."
              />
              <div className="mx-auto">
                <button className="btn btn-primary">
                  {isEdit ? "Edit" : "Add Task"}
                </button>
              </div>
            </form>
            {alert.visibility === "visible" ? (
              <Alert alert={alert} showAlert={showAlert} />
            ) : (
              <div
                className="alert my-2 p-0 alert-danger"
                style={{ visibility: "hidden" }}
              >
                <small>test</small>
              </div>
            )}
            <div className={`${itemsList.length === 0 ? "d-none" : ""}`}>
              {renderedList()}
              <button
                className="btn btn-danger btn-sm px-5 mt-3"
                onClick={clearAll}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
