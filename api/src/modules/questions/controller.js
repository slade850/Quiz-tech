import questionService from "./service";

const questionController = {
  getQuestionsByTheme: (req, res) => {
    questionService
      .getQuestionsByTheme(req.params.id)
      .then((result) => res.status(result.status).send(result.result))
      .catch((err) => res.status(err.status).send(err.message));
  },
  answersByTheme: (req, res) => {
    questionService
      .answersByTheme(req.params.id)
      .then((result) => res.status(result.status).send(result.result))
      .catch((err) => res.status(err.status).send(err.message));
  },
};

export default questionController;
