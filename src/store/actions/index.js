import stocksActions from "./stocks";

export const useActions = (state, dispatch) => ({
  ...stocksActions(state, dispatch),
});
