import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

/* Routes! */
// Layout Route, Home and Error pages
import Root from './pages/Root'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

// Physics
import TemperatureConverter from './pages/physics/TemperatureConverter'

// Mathematics
import QuadraticFunction from './pages/functions/QuadraticFunction'
import AffineFunction from './pages/functions/AffineFunction'
import CrossMultiplication from './pages/other/CrossMultiplication'

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
      {
        path: "outro/regraTres",
        element: <CrossMultiplication />
      },
    ]
  },

])


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
