//const express = require('express')
import express, { json } from 'express'; // Importar express
import { pokemones } from './utils/pokemones.js'; // Importar la lista de pokemones

/*
* C -> Create -> POST
* R -> Read -> GET
* U -> Update -> PUT o PATCH
* D -> Delete -> DELETE
*/

const app = express() // Instancia de express
const port = 3000 // Puerto en donde va a correr el servidor

app.use(json()) // Middleware para que express entienda JSON

app.get('/', (req, res) => {
    res.send('Hello World!') // Respuesta del servidor
})

app.post('/pokemon/create', (req, res) => {
    try {
        const pokemon = req.body;
        if(!pokemon){
            res.status(400).json,({
                message: 'Pokemon no enviado',
                data: null
            });
        }
        pokemones.push(pokemon);
        res.status(201).json({
            message: 'Pokemon creado',
            data: pokemon
        });
    }catch(error){
        console.error("Error al crear el pokemon", error);
    };
})

app.get('/pokemon/all', (req, res) => {
    try {
        res.status(200).json({
            message: 'Lista de pokemones',
            data: pokemones
        });
    }catch(error){
        console.error("Error al obtener la lista de pokemones", error);
    };
})

app.listen(port, () => {
    console.log(`Server en http://localhost:${port}`); // Mensaje en consola
})

