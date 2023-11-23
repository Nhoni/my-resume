import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Home from './Pages/Home';
import Competences from './Pages/Competences';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/competences",
    element: <Competences />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
