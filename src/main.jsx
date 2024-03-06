import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from "./router"
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
