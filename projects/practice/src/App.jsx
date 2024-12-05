import React from 'react'
import "./style.css"
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { Contact } from './Pages/Contact';
import AppLayout from './components/layout/AppLayout';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);  

  return (
    <><KindeProvider
      clientId="408a2d5810ef4d01b3686a633d451e28"
      domain="https://webpractice.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
    <RouterProvider router={router} />
	</KindeProvider>
  </>
  )
  
}

export default App