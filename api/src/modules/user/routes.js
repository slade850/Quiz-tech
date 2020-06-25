import express from "express";
const router = express.Router();
import userController from "./controller";
import autorize from "../../helper/autorize";

router.get("/", (req, res) => res.send("hello"));
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", autorize(['player']), userController.getById);

export default router;
