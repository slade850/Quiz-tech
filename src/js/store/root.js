import { combineReducers } from "redux";
import authStore from "./authStore";
const creatRootReducer = combineReducers({
  authStore,
});

export default creatRootReducer;
