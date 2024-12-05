import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  
  const [name,setName] = useState("Adnan")
  return (
    <>
    <Header user={name} />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout