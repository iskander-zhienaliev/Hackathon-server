import express from 'express';
import passport from "passport";
import {getAllController, getByIdController, getByRegionController} from "../controllers/tourConroller";

const router = express.Router();

router.get('/:id', getByIdController);
router.get('/', getAllController);
router.get('/', passport.authenticate('jwt', {session:false}), getByRegionController);

export default router;