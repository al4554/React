import React from 'react'
import UseFetch from './UseFetch'

const FirstCustomHooks = () => {
  const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <div> 
        {data && data.map((item)=>{
          return (
            <ul key={item.id}>
                  <li>{item.title}</li>
            </ul>
          )
        })

        }
    </div>
  )
}

export default FirstCustomHooks