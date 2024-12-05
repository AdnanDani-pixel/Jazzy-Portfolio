import axios from 'axios'
import React, { useState } from 'react'

const Pic = () => {
        
  const [images, setimages] = useState([])

     const generateImage = async () => {
      try {
        const response = await axios.get('https://picsum.photos/seed/v2/list')
      const data = response.data
      console.log(images)
      setimages(data)
      } catch (error) {
        console.error("Error")
      }
     }
  return (
    <div className='w-full h-screen '>
    <button  onClick={()=>{
      generateImage()
    }} 
  className='px-3 py-1 bg-green-400 rounded-md mt-5 ml-5' >click</button>

  <div className='p-5 mt-5'>
       {images.map((elem, i)=>{
         return (
          <>
          <h1 key={i}>{elem.author}</h1>
          <img height={400} width={400} src={elem.download_url } alt="" />
          </>
         ) 
       })}
  </div>
    </div>
  )
}

export default Pic