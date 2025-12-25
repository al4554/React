import React, { useState } from 'react'

const ToDo = () => {
    const [toDos,setToDos]=useState([])
    const [inputToDo,setInputToDo]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    if(inputToDo.trim()=="")return
    setToDos([...toDos,inputToDo])
    setInputToDo("")
}
    
    const  handleChange=(e)=>(
        setInputToDo(e.target.value)
    )

  return (
    <div>
        <h1>To Do list</h1>
        <form onSubmit={handleSubmit}>

           <input type="text"
            value={inputToDo} 
            onChange={handleChange}
            placeholder='add a new ToDo'
            name='todo'/>

           <button  type='submit'>Add ToDo</button>
        </form>
        
        <ul>
            {
                toDos.map((curr,idx)=>(
                    <li key={idx}>{curr}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ToDo
