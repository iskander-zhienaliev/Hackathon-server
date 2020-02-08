import express from 'express';
import {getAllController} from "../controllers/partnerController";

const router = express.Router();

router.get('/', getAllController);

export default router;