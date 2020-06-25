import { combineReducers } from "redux";

import appStore from './appStore'
import homeStore from './homestore'
import authStore from "./authStore";
import themeStore from "./themeStore";
import questionStore from "./questionStore";

const creatRootReducer = combineReducers({
  appStore,
  homeStore,
  authStore,
  themeStore,
  questionStore,
});

export default creatRootReducer;
