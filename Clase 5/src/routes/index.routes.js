import { Router } from "express";
import userRoutes from './user.routes.js';
import authRoutes from "./user.routes.js";

const router = Router();

router
    .use('/user', userRoutes)
    .use('/auth', authRoutes);

export default router;