import Swal from 'sweetalert2';

export async function deleteDataAlert() {
    return Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
    })
}

export const showSuccessAlert = (tittleMessage, message) => {
    Swal.fire(
        tittleMessage,
        message,
        'success'
    )
};