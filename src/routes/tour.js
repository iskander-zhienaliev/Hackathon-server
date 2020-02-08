import express from 'express';
import passport from "passport";
import {
    createController,
    getAllController,
    getByIdController,
    getByRegionController
} from "../controllers/tourConroller";

const router = express.Router();

router.get('/', getAllController);
router.get('/region', passport.authenticate('jwt', {session:false}), getByRegionController);
router.get('/:id', getByIdController);
router.post('/', passport.authenticate('jwt', {session: false}), createController);

export default router;