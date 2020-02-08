import express from 'express';
import {addFileController, getListController} from "../controllers/fileController";

const router = express.Router();

router.get('/docs', addFileController);
router.get('/list', getListController);

export default router;