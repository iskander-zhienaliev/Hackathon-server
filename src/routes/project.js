import express from 'express';
import {createController, getAllController} from "../controllers/projectController";
import passport from "passport";

const router = express.Router();

router.get('/', getAllController);
router.post('/', passport.authenticate('jwt', {session: false}), createController);

export default router;