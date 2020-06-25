import { combineReducers } from "redux";
import api from "../utils/api";
import { setUserLocalStorage } from "../utils/local-storage";

export const getThemes = () => {
  return (dispatch) => {
    return api
      .get("theme")
      .then((response) => {
        console.log("#####response", response.data);
        dispatch({ type: "SET_THEME", payload: response.data });
        //dispatch({ type: "SET_AUTH_MESSAGE", payload: response.data.message });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
};

const theme = (state = [], action) => {
  const themeAction = {
    SET_THEME: action.payload,
    CLEAR_THEME: [],
  };

  return themeAction[action.type] || state;
};

const themeReducer = combineReducers({
  theme,
});

export default themeReducer;
