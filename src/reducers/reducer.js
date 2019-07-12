import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import timerReducer from "./timerReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  timer: timerReducer
});

export default rootReducer;
