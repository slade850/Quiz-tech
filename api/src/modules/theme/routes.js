import express from 'express';
const router = express.Router();
import themeController from './controller'

router.get("/", themeController.getAll);


export default router;
