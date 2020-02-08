import express from 'express';
import {
    getAllController,
    getByIdController,
    getPersonalController,
    updateController
} from "../controllers/childrenController";
import passport from 'passport';

const router = express.Router();

router.get('/', getAllController);
router.get('/personal', passport.authenticate('jwt', {session: false}), getPersonalController);
router.put('/', passport.authenticate('jwt', {session: false}), updateController);
router.get('/:id',passport.authenticate('jwt',{session:false}), getByIdController);

export default router;