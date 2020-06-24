import db from "../../config/database";

const questionQueries = {
  getQuestionsByTheme: (id) => {
    return new Promise((resolve, reject) => {
      let sqlQuery = `SELECT * FROM questions WHERE theme_id=?`;
      db.query(sqlQuery, [id], (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  },
  answersByQuestion: (idQuestion) => {
    return new Promise((resolve, reject) => {
      let sqlQuery = `SELECT answers.id as answer_id, answers.content as answer_content FROM answers, answer_question WHERE answers.id=answer_question.answer_id AND answer_question.question_id=?`;
      db.query(sqlQuery, [idQuestion], (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  },
};

export default questionQueries;
