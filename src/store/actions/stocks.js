import * as types from "../types";

export default function appActions(state, dispatch) {
  return {
    setCurrentStock: (currentStock) => {
      dispatch({
        type: types.SET_CURRENT_STOCK,
        currentStock,
      });
    },
  };
}
