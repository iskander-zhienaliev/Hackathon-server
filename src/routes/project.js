import express from 'express';
import {
    createController,
    getAllController,
    getByIdController,
    updateController
} from "../controllers/projectController";
import passport from "passport";

const router = express.Router();

router.get('/', getAllController);
router.post('/', passport.authenticate('jwt', {session: false}), createController);
router.put('/', passport.authenticate('jwt',{session:false}), updateController);
router.get('/:id', passport.authenticate('jwt', {session:false}), getByIdController);

export default router;