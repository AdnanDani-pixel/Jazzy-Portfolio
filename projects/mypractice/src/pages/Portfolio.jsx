
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Portfolio = () => {
  useEffect(() => {
    getimages()
  }, [])

  const [images, setimages] = useState([])
  const getimages = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    const data = response.data
    setimages(data)
    console.log(images)
    } catch (error) {
      clg.error(error)
    }
  }
  return (
    <div className='w-full h-screen p-5'>
      <button onClick={getimages} className='px-3 py-1 bg-green-600 text-white '>Get images</button>
      <div className='p-10'>
        {images.map((elem,i)=>{
          return(
            <>
           
          
            <img onClick={()=>{
              window.open(elem.download_url)
            }} className=' relative inline-block m-3 cursor-pointer' key={i} src={elem.download_url} width={300} height={300} alt="" />
             
           
           
            </>
          ) 
          
        })}
      </div>
    </div>
  )
}

export default Portfolio