import React, { useState } from 'react'

const TodoList = () => {
    const [title, settitle] = useState('')
    const [dec, setdec] = useState('')
    const [mainTask, setmainTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setmainTask([...mainTask, {title, dec}])
        settitle('')
        setdec('')
        console.log(mainTask)
    }

    let renderTask = <h2>No Task Available</h2>;

   if(mainTask.length>0){
    renderTask = mainTask.map((t, i ) => {
        return (
            <li className='list-none'>
                <div className='flex justify-between items-center mb-4'>
                 <h2>{t.title}</h2>
                 <h2>{t.dec}</h2>
              </div>
            </li>
        )
    })
   }
    
  return (
    <div className='h-screen w-[100%] py-4'>
        <h1 className='bg-black  text-white p-10 w-full text-center text-4xl'>Todo List</h1>

        <form onSubmit={submitHandler}>
            <input type="text"
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }}
             placeholder='Enter Your Task Here'
             className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
             />
            <input type="text"
            value={dec}
            onChange={(e)=>{
                setdec(e.target.value)
            }}
             placeholder='Enter Your Description Here'
             className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
             />
             <button
             className='text-white bg-black px-3 py-2 text-2xl rounded-md'
             >Add a Task</button>
        </form>
        <div className='bg-zinc-400 p-10 w-full'>
            {renderTask}
        </div>
    </div>
  )
}

export default TodoList