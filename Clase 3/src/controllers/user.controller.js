"use strict";
import User from '../entity/user.entity.js';
import { AppDataSource } from '../config/configDB.js';

export async function createUser(req, res) {
    try {
        const userRepository = AppDataSource.getRepository(User); // Obtengo el repositorio de la entidad User
        const user = req.body; // Obtengo el body de la petición
        if (!user) {
            return res.status(400).json({ 
                message: 'User is required', 
                data: null
            })
        }
        const newUser = userRepository.create({ // Creo una nueva instancia de User
            nombre: user.nombre,
            rut: user.rut,
            email: user.email
        });
        const userSaved = await userRepository.save(newUser); // Guardo el nuevo usuario
        res.status(201).json({
            message: 'User created successfully',
            data: userSaved
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function getUser(req, res){
    try {
        const userRepository = AppDataSource.getRepository(User); // Obtengo el repositorio de la entidad User
        const id = req.params.id; // Obtengo el id de la petición
        const userFound = await userRepository.findOne({
            where: {
                id: id
            }  
        }); // Busco el usuario por id
        if (!userFound) { // Si no se encuentra el usuario
            return res.status(404).json({
                message: 'User not found',
                data: null
            });
        }
        res.status(200).json({ // Si se encuentra el usuario
            message: 'User found',
            data: userFound
        });    
    } catch (error) {
        console.error("Error: ", error);        
    }
}

export async function getUsers(req, res){
    try {
        const userRepository = AppDataSource.getRepository(User); // Obtengo el repositorio de la entidad User
        const users = await userRepository.find(); // Obtengo todos los usuarios
        if (!users) { // Si no se encuentran usuarios
            return res.status(404).json({
                message: 'Users not found',
                data: null
            });
        }
        res.status(200).json({ // Si se encuentran usuarios
            message: 'Users found',
            data: users
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}
