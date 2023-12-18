import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Categories from './pages/Categories.jsx'
import Accessories from './pages/Accessories.jsx'
import Product from './pages/product.jsx'
import Comptes from './pages/Comptes.jsx'
import Panier from './pages/Panier.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/categories',
      element:<Categories/> 
    },
    {
      path:'/accessoires',
      element:<Accessories/>
    },
    {
      path:'/accessoires/:id',
      element:<Product/>
    },
    {
      path:'/compte',
      element:<Comptes/>
    },
    {
      path:'/panier',
      element:<Panier/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
