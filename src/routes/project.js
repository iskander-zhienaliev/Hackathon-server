import express from 'express';
import {createController, getAllController, updateController} from "../controllers/projectController";
import passport from "passport";

const router = express.Router();

router.get('/', getAllController);
router.post('/', passport.authenticate('jwt', {session: false}), createController);
router.put('/', passport.authenticate('jwt',{session:false}), updateController);

export default router;