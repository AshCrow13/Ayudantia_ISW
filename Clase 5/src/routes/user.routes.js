import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from '../controllers/user.controller.js';
import { authenticateJwt } from '../middlewares/authentication.middleware.js';
import { isAdmin } from '../middlewares/authorization.middleware.js';

const router = Router();

router
    .use(authenticateJwt) // * Todas las rutas de este archivo requieren autenticación
    .use(isAdmin); // * Todas las rutas de este archivo requieren permisos de administrador

router
    .post('/', createUser) // * http://localhost:3000/api/user/ - post
    .get('/all', getUsers) // * http://localhost:3000/api/user/all - get
    .get('/:id', getUser) // * http://localhost:3000/api/user/:id - get
    .put('/:id', updateUser) // * http://localhost:3000/api/user/:id - put
    .delete('/:id', deleteUser); // * http://localhost:3000/api/user/:id - delete

export default router;