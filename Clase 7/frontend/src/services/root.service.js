import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api'; // Se obtiene la URL de la API desde el archivo .env

const instance = axios.create({ // Se crea una instancia de axios con la URL de la API
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    //withCredentials: true, // Se habilita el envío de cookies en las peticiones
});

/*
instance.interceptors.request.use((config) => { // Se agrega un interceptor para agregar el token a las peticiones
    const token = cookies.get('jwt-auth', { path: '/' });
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
(error) => Promise.reject(error)
);
*/

export default instance;