import express from 'express';
import passport from "passport";
import {
    consumeController,
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
router.post('/consume', passport.authenticate('jwt', {session:false}), consumeController);

export default router;