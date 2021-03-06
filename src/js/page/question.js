import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getQuestionsByThemes } from "../store/questionStore";
import { useParams } from "react-router-dom";

const Questions = () => {
  let { id } = useParams();
  console.log({id});
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionStore.question);
  useEffect(() => {
    dispatch(getQuestionsByThemes({ id }))
      .then((res) => {
        console.log(" questions recupérés avec success");
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  console.log("mes questions", questions);
  //   const displayThemes = themes.map((theme, index) => (
  //     <div key={index}>{theme.title}</div>
  //   ));
  return (
    <div>
      {questions.map((question, i) => {
        return (
          <div className="question" key={i}>
            {question.id} {question.title}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
