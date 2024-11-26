import express, { json } from 'express'; // Module
import indexRoutes from './routes/index.routes.js';
import { PORT, HOST, cookieKey } from './config/configEnv.js';
import { connectDB } from './config/configDb.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import { PassportJwtSetup } from './auth/passport-setup.js';

async function setupServer() {
    try {
        const app = express(); // Instancia express y almacenar sus metodos en app
        
        app.use(json()); // Middleware para parsear el body de las peticiones a json
        app.use(cookieParser()); // Middleware para parsear las cookies
        app.use(morgan("dev")); // Middleware para loggear las peticiones
        
        app.use(session({ // Middleware para manejar las sesiones
            secret: cookieKey, 
            resave: false, 
            saveUninitialized: false,
            cookie: { 
                secure: false,
                httpOnly: true,
                sameSite: "strict",
            }
        }));
        
        app.use(passport.initialize()); // Middleware para inicializar passport
        app.use(passport.session()); // Middleware para manejar las sesiones de passport

        PassportJwtSetup(); // Configurar passport con la estrategia de JWT
        
        app.use('/api', indexRoutes); // Middleware para manejar las rutas de la API

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en: http://${HOST}:${PORT}/api`);
        });
    } catch (error) {
        console.error("Error en index.js -> setupServer(), el error es: ", error);
    }
}

async function setupAPI() {
    try {
        await connectDB();
        await setupServer();
    } catch (error) {
        console.log("Error en index.js -> setupApi(), el error es: ", error);
    }
}

setupAPI()
    .then(() => console.log("=> API iniciada exitosamente"))
    .catch((error) => {
        console.log("Error en index.js -> setupAPI(), el error es:", error);
    });