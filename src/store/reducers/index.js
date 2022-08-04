import combineReducer from "./combine";
import stocks from "./stocks";
const reducer = combineReducer({
  stocks,
});

export default reducer;
