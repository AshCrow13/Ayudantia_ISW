"user strict";
import {
    loginService,
    registerService
} from "../services/auth.service.js";

export async function login(req, res) {
    try {
        const { body } = req;
        const accessToken = await loginService(body);

        res.cookie("jwt", accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ 
            message: "Login success",
            token: accessToken
        });
    } catch (error) {
        res.status(500).json("Error al iniciar sesion", error);
    }
}

export async function register(req, res) {
    try {
        const { body } = req;
        const userRegister = await registerService(body);

        res.status(201).json({
            message: "User registered",
            user: userRegister
        });
    } catch (error) {
        res.status(500).json("Error al registrar usuario", error);
    }
}

export async function logout(req, res) {
    try {
        res.clearCookie("jwt", { httpOnly: true });
        res.status(200).json({ message: "Logout success" });
    } catch (error) {
        res.status(500).json("Error al cerrar sesion", error);
    }
}

