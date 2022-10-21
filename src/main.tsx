import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

/* Routes! */
// Layout Route and Index
import Root from './pages/Root'
import Home from './pages/Home'

// Math Functions
import QuadraticFunction from './pages/functions/QuadraticFunction'
import AffineFunction from './pages/functions/AffineFunction'
import TemperatureConverter from './pages/other/TemperatureConverter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Rota desconhecida!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "funcao/funcaoQuadratica",
        element: <QuadraticFunction />
      },
      {
        path: "funcoes/funcaoAfim",
        element: <AffineFunction />
      },
      {
        path: "fisica/temperatura",
        element: <TemperatureConverter />
      },
    ]
  },

])


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
