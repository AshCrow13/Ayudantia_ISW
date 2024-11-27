import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "@services/user.service.js";
import { deleteDataAlert, showSuccessAlert } from "../utils/alerts";

export default function Users() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const response = await getUsers(); 
            setUsers(response);           
        } catch (error) {
            console.error('Error', error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const result = await deleteDataAlert();
            
            if (result.isConfirmed) {
                const response = await deleteUser(id);
                console.log(response);
                showSuccessAlert('Usuario eliminado', 'El usuario ha sido eliminado correctamente');
                await fetchUsers();
            }


        } catch (error) {
            console.error('Error', error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    
    return (
        <div>
            <h1>Usuarios</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <div key={user.id}>
                            <li>
                                <p>Nombre completo: {user.nombreCompleto}</p>
                                <p>Rut: {user.rut} </p>
                                <p>Correo electronico: {user.email}</p>
                                <p>Rol: {user.rol}</p>
                            </li>
                            <button onClick={() => handleDelete(user.id)}>Eliminar usuario</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No hay usuarios</p>
            )}
        </div>
    )
}