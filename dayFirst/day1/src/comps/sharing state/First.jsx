import React, { useState } from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

const First = () => {
    const [count,setCount]=useState(0)

  return (
    <div> 
         <ComponentOne count={count} onClickHandler={()=>setCount(count+1)} />
         <ComponentTwo count={count} onClickHandler={()=>setCount(count-1)} />
    </div>
  )
}

export default First