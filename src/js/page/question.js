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

  function checkValid(validity){
    if(validity){
      console.log('bravo');
    } else{
      console.log('Mauvaise réponse');
    }
  }
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
    <div className="question-container">
      {questions.map((question, i) => {
        return (
          <div className="question" key={i}>
            <div className="question-type">{question.type}</div>
            <div >{question.id} {question.title}</div>              
            {question.answers.map((answer, index) => (
              <div key={index} onClick={()=> checkValid(answer.answer_is_valid)}>{answer.content}</div>
            ))
            }
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
