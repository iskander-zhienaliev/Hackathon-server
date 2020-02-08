import express from 'express';
import {getAllController, getPersonalController, updateController} from "../controllers/parentController";
import passport from "passport";

const router = express.Router();

router.get('/', getAllController);
router.get('/personal', passport.authenticate('jwt', {session:false}), getPersonalController);
router.put('/', passport.authenticate('jwt', {session:false}), updateController);

export default router;