import ReactDOM from 'react-dom/client'; // Import the createRoot method from the ReactDOM client
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import the createBrowserRouter and RouterProvider methods from the react-router-dom library
import Users from '@pages/Users.jsx';
import ErrorPage from '@pages/Error404.jsx';
import Home from '@pages/Home.jsx';

const router = createBrowserRouter([ // Create a router with the createBrowserRouter method
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/obtener/usuarios',
    element: <Users />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render( // Render the RouterProvider component with the router prop
  <RouterProvider router={router} />
);