import express from 'express';
import { generateGradientHeading } from '../controllers/generateGradientHeading';

const router = express.Router();

router.get('/gradient', generateGradientHeading);

export default router;