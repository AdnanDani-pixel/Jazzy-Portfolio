import React, { useRef } from 'react'

import { motion } from "framer-motion"

const About = () => {
  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef} className='h-screen w-full flex justify-center items-center'>
      <motion.div drag dragConstraints={constraintsRef}   className='min-h-[250px] p-5 w-[350px] absolute  bg-[#FFDA00] rounded-[30px]'>
           <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nostrum recusandae excepturi odit cupiditate quidem ratione quasi eligendi optio quod dolore nobis sint fugit, quo ea harum porro deserunt ducimus.</p>
          <div className='w-full flex gap-4 mt-3 items-center'>
           <img className='rounded-full h-10' src="https://www.superhi.com/_next/image?url=%2Ftestimonials%2Famy_lima.png&w=96&q=75" alt="" />
            <h3>Amilia alison</h3>
           </div>
      </motion.div>
    </motion.div>
  )
}

export default About