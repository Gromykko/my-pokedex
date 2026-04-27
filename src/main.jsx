import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Pokedex from './pages/Pokedex'
import PokemonDetails from './pages/PokemonDetails'
import About from './pages/About'
import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Pokedex /> },
      { path: "/pokemon/:name", element: <PokemonDetails /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)