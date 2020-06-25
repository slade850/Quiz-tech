import bcrypt from "bcrypt";
import userQueries from "./queries";
import jwt from "jsonwebtoken";
import apiConfig from "../../../apiConfig.json";

const userService = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      let { email, pseudo, password, passConfirm } = body;
      console.log("*****body ***", body);
      if (
        typeof email !== "string" ||
        typeof pseudo !== "string" ||
        typeof password !== "string" ||
        typeof passConfirm !== "string"
      ) {
        reject({ status: 400, message: "please enter a string in all fields" });
      }
      if (password === passConfirm) {
        bcrypt
          .genSalt()
          .then((salt) => bcrypt.hash(password, salt))
          .then((hashedPassword) =>
            userQueries.register({ email, pseudo, hashedPassword })
          )
          .then((user) => resolve({ status: 201, message: "new user created" }))
          .catch((err) => reject({ status: 401, message: err }));
      } else {
        reject({ status: 400, message: "unmatched password" });
      }
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      let { formLogin, password } = body;
      if (typeof formLogin !== "string" || typeof password !== "string") {
        reject({ status: 400, message: "please enter a string in all fields" });
      }
      userQueries
        .login(formLogin)
        .then((result) => {
          if (bcrypt.compareSync(password, result.password)) {
            let token = jwt.sign(
              { id: result.id, pseudo: result.pseudo, role: result.role },
              apiConfig.SECRET_TOKEN,
              { expiresIn: 3600 }
            );
            resolve({
              status: 200,
              message: "user is logged in",
              token: token,
            });
          }
          reject({ status: 401, message: "wrong password entered" });
        })
        .catch((err) =>
          reject({
            status: 401,
            message: "login error, reverify your information",
          })
        );
    });
  },
  getById: async (id) => {
    let users = await userQueries.getUser(id);
    console.log("users", users);

    let resultat = [];

    let user = users[0];
    console.log("avatar", user.avatar_id);
    let avatar = await userQueries.getAvatar(user.avatar_id);
    resultat.push({ ...user, avatar });

    return {
      status: 200,
      result: resultat,
    };
  },
};

export default userService;
