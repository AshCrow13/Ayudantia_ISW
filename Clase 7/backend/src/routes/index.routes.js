import { Router } from "express";
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

router
    .use('/user', userRoutes)
    .use('/auth', authRoutes);

export default router;