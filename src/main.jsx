import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Search from './Components/Search.jsx'
import MoviesField from './Components/MoviesField.jsx'
import Card from './Components/Card.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:param",
        element: <MoviesField/>
      },
      {
        path:"/movie/:movieID",
        element:<Card/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >

      <App />

    </RouterProvider>
  </React.StrictMode>,
)
