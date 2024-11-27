"use strict";
import User from '../entity/user.entity.js';
import { AppDataSource } from '../config/configDb.js';
import { getUserService } from '../services/user.service.js';

// * Elimine el createUser porque ese código ya lo tenemos en el register

export async function getUser(req, res) {
    try {

        const id = req.params.id;
        const userFound = await getUserService(id);

        if(!userFound) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                data: null
            });
        }

        res.status(200).json({
            message: "Usuario encontrado",
            data: userFound
        });
    } catch (error) {
        console.error('Error al obtener un usuario, el error: ', error);
    }
}

export async function getUsers(req, res) {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();

        if(!users || users.length === 0) {
            return res.status(404).json({
                message: "No se encontraron usuarios",
                data: null
            });
        }

        res.status(200).json({
            message: "Usuarios encontrados",
            data: users
        });
    } catch (error) {
        console.error('Error al obtener un usuarios, el error: ', error);
    }
}

// ! No lo modifico por que la tarea todavia esta pendiente
export async function updateUser(req, res) {
    try {
        const userRepository = AppDataSource.getRepository(User);

        const id = req.params.id;
        const user = req.body;

        const userFound = await userRepository.findOne({
            where: {id}
        });

        if(!userFound) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                data: null
            });
        }

        await userRepository.update(id, user);

        const userData = await userRepository.findOne({
            where: [{
                id: id
            }]
        });

        res.status(200).json({
            message: "Usuario actualizado correctamente",
            data: userData
        })
    } catch (error) {
        console.error("Error al actualizar un usuario: ", error);
        res.status(500).json({ message: "Error interno en el servidor" });
    }
}

// ! No lo modifico por que la tarea todavia esta pendiente
export async function deleteUser(req, res) {
    try {
        const userRepository = AppDataSource.getRepository(User);

        const id = req.params.id;

        const userFound = await userRepository.findOne({
            where: {id}
        });

        if(!userFound) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                data: null
            });
        }

        const userDeleted = await userRepository.remove(userFound);

        res.status(200).json({
            message: "Usuario eliminado correctamente",
            data: userDeleted
        })
    } catch (error) {
        console.error("Error al eliminar un usuario: ", error);
        res.status(500).json({ message: "Error interno en el servidor" });
    }
}