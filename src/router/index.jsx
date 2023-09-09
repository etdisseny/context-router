import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import LayoutPrivate from "../layout/LayoutPrivate";

// aqui creamos la constante con todas las rutas
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true, //esto significa que tiene la misma ruta que el path del padre
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate />, //este sera el layout de rutas protegidas, solo puedes entrar si estas logueado
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
