import { combineReducers } from "redux";
// import errorReducer from "./errorReducer";
import returnsReducer from "./returnsReducer";

export default combineReducers({
  //   errors: errorReducer,
  returns: returnsReducer
});
