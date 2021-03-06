import { combineReducers } from "redux";
import api from "../utils/api";
import { setUserLocalStorage } from "../utils/local-storage";

export const getQuestionsByThemes = (id) => {

  return (dispatch) => {
    return api
      .get("question/theme/"+id.id+"/answers")
      .then((result) => {
        console.log("#####response", result.data.questions);
        dispatch({ type: "SET_QUESTION", payload: result.data });
        //dispatch({ type: "SET_AUTH_MESSAGE", payload: response.data.message });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
};

const question = (state = [], action) => {
  const questionAction = {
    SET_QUESTION: action.payload,
    CLEAR_QUESTION: [],
  };

  return questionAction[action.type] || state;
};

const questionReducer = combineReducers({
  question,
});

export default questionReducer;
