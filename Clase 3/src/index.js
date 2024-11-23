import express, { json } from 'express'; // Import express 
import { PORT, HOST } from './config/configEnv.js'; // Import PORT and HOST from config.js
import { connectDB } from './config/configDB.js'; // Import connectDB from configDB.js
import indexRoutes from './routes/index.routes.js'; // Import index routes

async function setupServer() {
    try {
        const app = express(); // Create express app
        app.use(json()); // Middleware for parsing request body
        app.use('/api', indexRoutes); // Middleware for routing
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en: http://${HOST}:${PORT}/api`); // Start server
        });
    } catch (error) {
        console.error("Error en index.js", error); // Error handling
    }
}

async function setupAPI() { 
    try {
        await connectDB(); // Connect to database
        await setupServer(); // Setup server
    } catch (error) {
        console.error("Error en index.js", error); // Error handling
    }
}

setupAPI() 
    .then(() => console.log("API configurada")) // Success message
    .catch((error) => {
        console.error("Error en index.js", error) // Error handling
    });
