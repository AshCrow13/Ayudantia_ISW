"use strict";
import { Router } from "express";
import {
    login,
    register,
    logout
} from '../controllers/auth.controller.js';

const router = Router();

router 
    .post('/login', login) // * http://localhost:3000/api/auth/
    .post('/register', register)
    .get('/logout', logout);

export default router;

