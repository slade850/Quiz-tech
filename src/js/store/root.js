import { combineReducers } from "redux";
import authStore from "./authStore";
import themeStore from "./themeStore";

const creatRootReducer = combineReducers({
  authStore,
  themeStore,
});

export default creatRootReducer;
