"use strict";
import { DataSource } from "typeorm"; // Import DataSource from typeorm
import { DATABASE, DB_USERNAME, HOST, PASSWORD } from '.configEnv.js'; // Import DATABASE, DB_USERNAME, HOST, and PASSWORD from configEnv.js    

export const AppDataSource = new DataSource({ // Create a new DataSource
    type: "postgres", // Set the type to postgres
    host: `${HOST}`, // Set the host to the value of HOST
    port: 5432, // Set the port to 5432
    username: `${DB_USERNAME}`, // Set the username to the value of DB_USERNAME
    password: `${PASSWORD}`, // Set the password to the value of PASSWORD
    database: `${DATABASE}`, // Set the database to the value of DATABASE
    entities: ["src/entity/**/*.js"], // Set the entities to the value of src/entity/**/*.ts
    synchronize: true, // Set synchronize to true
    logging: false, // Set logging to false
});

export async function connectDB() { // Create an async function called connectDB
    try {
        await AppDataSource.connectDB(); // Connect to the database
        console.log("Conexión a la base de datos exitosa"); // Log success message
    } catch (error) {
        console.error("Error en configDB.js", error); // Log error message
    }
}
