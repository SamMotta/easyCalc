import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

/* Routes! */
// Layout Route, Home and Error pages
import Root from './pages/Root'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

// Math Functions
import QuadraticFunction from './pages/functions/QuadraticFunction'
import AffineFunction from './pages/functions/AffineFunction'
import TemperatureConverter from './pages/other/TemperatureConverter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "funcao/funcaoAfim",
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
