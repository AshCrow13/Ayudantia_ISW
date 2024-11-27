import axios from './root.service.js';

export async function getUsers() {
    try {
        const response = await axios.get('/user/all');
        return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteUser(id) {
    try {
        const response = await axios.delete(`/user/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

