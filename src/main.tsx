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
import LinearFunction from './pages/functions/LinearFunction'

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
        path: "functions/quadraticFunction",
        element: <QuadraticFunction />
      },
      {
        path: "functions/linearFunction",
        element: <LinearFunction />
      }
    ]
  },

])


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
