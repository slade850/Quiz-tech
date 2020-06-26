import { combineReducers } from "redux";
import api, { addAuth } from "../utils/api";
import { setUserLocalStorage } from "../utils/local-storage";

export const doLogin = (body) => {
  // On lance le fetch user - DOING LOGIN
  //Call d'api ->  DOING LOGIN
  // Reponse ok -> user
  // user -> SET_AUTH_USER
  // token -> SET_AUTH_TOKEN
  // LOGIN FINI
  // LOGIN FAILED
  return (dispatch) => {
    dispatch({ type: "DOING_LOGIN" });

    return api
      .post("user/login", body)
      .then((response) => {
        console.log("#####response", response.data);
        dispatch({ type: "SET_USER", payload: response.data.user });
        dispatch({ type: "SET_AUTH_MESSAGE", payload: response.data.message });
        addAuth(response.data.user.token);
        setUserLocalStorage(response.data);
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        dispatch({
          type: "SET_AUTH_MESSAGE",
          payload: err.response.data.message,
        });
        setUserLocalStorage(response.data);
      });
    // .finally((res) =>
    //   setTimeout(() => {
    //     dispatch({ type: "CLEAR_AUTH_MESSAGE" });
    //   }, 2000)
    // );
  };
};

const defaultUserState = {
  isLogged: false,
  detail: {},
  // notes: {},
  // promotionNotes: {},
};

const user = (state = defaultUserState, action) => {
  const userAction = {
    SET_USER: { ...state, isLogged: true, detail: action.payload },
    SET_USER_LOGGED: { ...state, isLogged: action.payload },
    // SET_USER_NOTES: { ...state, notes: action.payload },
    // SET_USER_PROMOTION_NOTES: { ...state, promotionNotes: action.payload },
    CLEAR_USER: defaultUserState,
  };

  return userAction[action.type] || state;
};

const authMessage = (state = "", action) => {
  const authMessageAction = {
    SET_AUTH_MESSAGE: action.payload,
    CLEAR_AUTH_MESSAGE: "",
  };
  return authMessageAction[action.type] || state;
};

const authFunction = (state = false, action) => {
  const authFunctionAction = {
    DOING_LOGIN: true,
  };
  return authFunctionAction[action.type] || state;
};

const authReducer = combineReducers({
  user,
  authMessage,
  authFunction,
});

export default authReducer;
