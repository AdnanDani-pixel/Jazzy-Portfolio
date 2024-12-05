import { AnimatePresence } from 'motion/react';
import { motion } from 'framer-motion';
import { a, div } from 'motion/react-client';
import React, { Children, useState } from 'react'

const Menu = () => {
  return (
    <div className='h-[70vh] py-5 flex items-start justify-center text-white  w-full bg-black'>
      <FlyoutLink href='#' FlyOutContent={PricingContent} >About</FlyoutLink>
      
        
    </div>
  )
};


const FlyoutLink = ({children, href, FlyOutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyOutContent =  FlyOutContent && open
  console.log(showFlyOutContent)

    return (
     <div className='relative w-fit h-fit'  onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
         <a  href={href} className='text-white relative '>
        {children}
      </a>
      <AnimatePresence>
        {showFlyOutContent && (
         <motion.div   initial={{ opacity: 0, y: 15 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 15 }}
         style={{ translateX: "-50%" }}
         transition={{ duration: 0.3, ease: "easeOut" }}
         className="absolute left-1/2 top-12 bg-white text-black" >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute  left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
           <FlyOutContent />
         </motion.div>
        )}
      </AnimatePresence>
      
     </div>
    )
};


const PricingContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
    )
}




export default Menu