import express from 'express';
const router = express.Router();
import userController from './controller'

router.get("/", (req, res)=> res.send('hello'));
router.post('/register', userController.register)


export default router;
