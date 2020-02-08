import express from 'express';
import {authController, registrationController} from "../controllers/authController";

const router = express.Router();

router.post('/registration', registrationController);
router.post('/login', authController);

export default router;