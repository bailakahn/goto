import { stocks } from "../initialState";
import * as types from "../types";
const appReducer = (state = stocks, action) => {
  switch (action.type) {
    case types.SET_CURRENT_STOCK:
      return {
        ...state,
        currentStock: action.currentStock,
      };

    default:
      return state;
  }
};

export default appReducer;
