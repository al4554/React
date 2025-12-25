import React, { useCallback, useEffect, useState } from 'react'

const SecondUseEffect = () => {
    const [data,setData]=useState([])
    // useEffect(() => {
    //         const getData= async ()=>{
    //            const response= await fetch("https://jsonplaceholder.typicode.com/posts") 
    //            const data=await response.json()
    //            if(data && data.length)setData(data)     
    //         }
    //       getData()
    //       }, [])

    //better method to write(proffesional)
//useCallback ka pdhna h 

//useCallBack important h as ->
//getData is recreated on every render
//Dependency array sees a new function reference
//Effect runs again
//setData triggers render
//Effect runs again…
//💥 This can cause an infinite loop

    const getData=useCallback(  async ()=>{
               const response= await fetch("https://jsonplaceholder.typicode.com/posts") 
               const data=await response.json()
               if(data && data.length)setData(data)     
            })

     useEffect(() => {
          getData()
          }, [getData])

  return (
    <div>
        {
            data.map((obj,idx)=>(
            <div key={idx}>
                <h3>userId:{obj.userId}</h3>
                <h3>id:{obj.id}</h3>
                <h3>title:{obj.title}</h3>
                <h3>body:{obj.body}</h3>
            </div>
          ))
        }
     </div>
  )
}

export default SecondUseEffect