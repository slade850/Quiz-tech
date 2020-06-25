import { combineReducers } from "redux";
import authStore from "./authStore";
import themeStore from "./themeStore";
import questionStore from "./questionStore";
const creatRootReducer = combineReducers({
  authStore,
  themeStore,
  questionStore,
});

export default creatRootReducer;
