import express from 'express';
import {getAllController, updateController} from "../controllers/partnerController";
import passport from "passport";
const router = express.Router();

router.get('/', getAllController);
router.put('/', passport.authenticate('jwt', {session:false}), updateController);

export default router;