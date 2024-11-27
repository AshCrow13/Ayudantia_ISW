"use strict";
import User from '../entity/user.entity.js';
import { AppDataSource } from '../config/configDb.js';

export async function isAdmin(req, res, next) {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const userFound = await userRepository.findOneBy({ email: req.user.email });

        if (!userFound){
            return res.stayus(404).json({
                message: 'User not found'
            });
        }

        const rolUser = userFound.rol;

        if(rolUser !== 'admiistrador'){
            return res.status(403).json({
                message: 'You do not have the necessary permissions'
            });
        }

        next();
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}
