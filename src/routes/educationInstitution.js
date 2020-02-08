import express from 'express';
import {getAllController} from '../controllers/educationInstitutionController'

const router = express.Router();

router.get('/', getAllController);

export default router;