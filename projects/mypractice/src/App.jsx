import React, { useRef } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Reveal from './pages/Reveal'
import AppLayout from './components/layout/AppLayout'
import TodoList from './pages/TodoList'
import Pic from './pages/Pic'
import { i } from 'motion/react-client'
import FlyoutLink from './pages/FlyoutLink'
import Menu from './pages/Menu'

function App() {
  
  

 const router = createBrowserRouter([
  {
   path: '/',
   element: <AppLayout />,
   children : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
       path: '/contact',
       element: <Reveal /> 
      },
      {
        path: '/images',
        element: <Portfolio />
      },
      {
        path: '/todolist',
        element: <TodoList />
      },
      
      {
        path: '/flyout',
        element: <FlyoutLink />
      },
      {
        path: '/pic',
        element: <Pic />
      },
      {
        path: '/menu',
        element: <Menu />
      },
     
   ],
  },
  
 ])
 const ref = useRef(null)
  return (
    < >
    <div ref={ref} reference={ref} className='w-full h-screen'>
     <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App
