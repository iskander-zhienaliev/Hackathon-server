import express from 'express';
import {addFileController} from "../controllers/fileController";

const router = express.Router();

router.get('/docs', addFileController);

export default router;