import './styles/App.css'; // Importamos el archivo de estilos de la aplicación
import Xcard from './components/XCard.jsx'; // Importamos el componente XCard

const usuarios = [
  {
    userName: 'Juan',
    name: 'Juan Pérez',
    isFollowed: true
  },
  {
    userName: 'Pedro',
    name: 'Pedro Gómez',
    isFollowed: false
  },
  {
    userName: 'Ana',
    name: 'Ana López',
    isFollowed: true
  },
  {
    userName: 'María',
    name: 'María Rodríguez',
    isFollowed: false
  }
];

export default function App() { // Exportamos la función App
  return (
    <section className='App'>
      {
        usuarios.map(({ userName, name, isFollowed }) => (
          <Xcard
            key={userName}
            nombreUser={userName}
            initialIsFollowing={isFollowed}
          >
            {name}
          </Xcard>
        ))
      }      
    </section>
  )
}

