import apiConfig from "../apiConfig.json";
// require('dotenv').config({path: ('apiConfig.env')});
import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/routes";
import themeRoutes from "./modules/theme/routes";
import questionRoutes from "./modules/questions/routes";
const port = apiConfig.SERVER_PORT;
require("./config/database");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/api/", (req, res) => {
  res.send("wellcome to quiz-tech API");
});

app.use("/api/user", userRoutes);
app.use("/api/theme", themeRoutes);
app.use("/api/question", questionRoutes);

app.listen(port, console.log(`server started on port ${port}`));
