import express from "express";
const router = express.Router();
import userController from "./controller";
import authorize from "../../helper/authorize";

router.get("/", (req, res) => res.send("hello"));
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", authorize(["player"]), userController.getById);

export default router;
