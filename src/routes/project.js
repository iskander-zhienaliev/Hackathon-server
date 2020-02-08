import express from 'express';
import {createController} from "../controllers/projectController";

const router = express.Router();

router.post('/', createController);

export default router;