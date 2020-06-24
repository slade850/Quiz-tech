import express from "express";
const router = express.Router();
import userController from "./controller";

router.get("/", (req, res) => res.send("hello"));
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", userController.getById);

export default router;
