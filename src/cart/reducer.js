const reducer = (state, action) => {
  //
  switch (action.type) {
    case "CLEAR_ALL":
      return { ...state, cartList: [] };

    case "REMOVE_ITEM":
      const newList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartList: newList };

    case "UP_ONE":
      const newList1 = state.cartList.map((item) => {
        if (item.id === action.payload) {
          item.amount++;
          return item;
        }
        return item;
      });
      return { ...state, cartList: newList1 };

    case "DOWN_ONE":
      const newList2 = state.cartList.map((item) => {
        if (item.id === action.payload) {
          if (item.amount === 0) {
            return item;
          }
          item.amount--;
          return item;
        }
        return item;
      });
      return { ...state, cartList: newList2 };

    case "GET_SUM":
      let amount = 0;
      let total = 0;

      state.cartList.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.price * item.amount;
      });

      return {
        ...state,
        itemCount: amount,
        total: parseFloat(total.toFixed(2)),
      };

    case "SET_LOADING":
      return { ...state, loading: true };

    case "SHOW_FETCHED":
      return { ...state, cartList: action.payload, loading: false };

    default:
      console.log("none");
      return state;
  }
};

export default reducer;
