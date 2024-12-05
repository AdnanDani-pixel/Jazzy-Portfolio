import React, { useRef, useState } from 'react'
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = (reference) => {
  const notify = () => {
    toast(' successfully clicked', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
  }

  const ref = useRef(null)
  
  const [a,b] = useState(false)
  return (
    <div ref={ref} className='w-full h-screen flex items-center justify-center'>
       <h1 className='mr-5 text-3xl'>{a === false ? "please click" : " clicked "}</h1>
       {/* <button className='px-3 py-1 bg-green-400 rounded-md' onClick={()=>b(!a)}>click</button> */}
       <button className='px-3 py-1 bg-green-400 rounded-md' onClick={(()=>{
         notify()
       })} >click</button>
       <ToastContainer />

        <motion.div   drag
         
          
          className='h-[200px] w-[200px] bg-lime-200 rounded-md '></motion.div>
       <motion.div   drag    className='w-[200px] h-[200px] bg-black rounded-sm'></motion.div>
    </div>
  )
}

export default Home