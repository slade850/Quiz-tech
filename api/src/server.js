require("dotenv").config({ path: "apiConfig.env" });
import config from "../../api/config.json";

import express from "express";
import cors from "cors";
require("./config/database");

import userRoute from "./modules/user/routes";

const port = config.SERVER_PORT;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRoute);

app.get("/api/", (req, res) => {
  res.send("wellcome to quiz-tech API");
});

app.listen(port, console.log(`server started on port ${port}`));
