import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext(); // Provider - Consumer

const initialState = {
  loading: false,
  total: 0,
  itemCount: 0,
  cartList: [],
};

const AppProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const upByOne = (id) => {
    dispatch({ type: "UP_ONE", payload: id });
  };

  const downByOne = (id) => {
    dispatch({ type: "DOWN_ONE", payload: id });
  };

  const fetchData = async () => {
    //
    dispatch({ type: "SET_LOADING" });
    const responde = await fetch(
      "https://course-api.com/react-useReducer-cart-project"
    );
    const cartList = await responde.json();
    dispatch({ type: "SHOW_FETCHED", payload: cartList });
  };

  useEffect(() => {
    dispatch({ type: "GET_SUM" });
  }, [state.cartList]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, clearAll, removeItem, upByOne, downByOne }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalState };
