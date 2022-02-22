import { combineReducers } from "redux";
import homeReducer from "./smarthome/reducer";

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
