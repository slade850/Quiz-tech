import questionQueries from "./queries";

const questionService = {
  getQuestionsByTheme: (id) => {
    return new Promise((resolve, reject) => {
      questionQueries
        .getQuestionsByTheme(id)
        .then((result) => resolve({ status: 200, result: result }))
        .catch((err) => reject({ status: 400, message: err }));
    });
  },
  answersByTheme: async (id) => {
    let questions = await questionQueries.getQuestionsByTheme(id);

    let resultat = [];
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i];
      let answers = await questionQueries.answersByQuestion(questions[i].id);
      resultat.push({ ...question, answers });
    }
    return {
      status: 200,
      result: resultat,
    };
  },
};

export default questionService;
