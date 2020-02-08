import express from 'express';
import {getAllController} from "../controllers/tourOperatorController";

const router = express.Router();

router.get('/',getAllController);

export default router;