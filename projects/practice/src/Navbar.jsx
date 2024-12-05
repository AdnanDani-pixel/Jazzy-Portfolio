import React from 'react'
import { FaCartShopping, FaChessKing } from "react-icons/fa6";
import { Bs0SquareFill,Bs3CircleFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <>
    <div className='h-[80px] w-[100%] bg-red-500 flex  justify-between items-center px-20'> 
        <div className="logo ">Logo</div>
        {/* <div className="links flex gap-[20px] items-center ">
         {["Home","About","Contact","Portfolio", <FaCartShopping /> ,<FaChessKing />, <Bs3CircleFill />, <Bs0SquareFill />].map((e) => <a href='#'>{e}</a> )}
        
        </div> */}
    </div>
    </>

 
  )
}

export default Navbar


