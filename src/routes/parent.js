import express from 'express';
import {getAllController} from "../controllers/parentController";

const router = express.Router();

router.get('/', getAllController);

export default router;