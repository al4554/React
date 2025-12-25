import React from 'react'
import {createPortal} from 'react-dom'

const Popup = ({data,copied}) => {
  const comp= document.querySelector("#check")
   
  if(!comp){
    console.log("fat gaya")
  }

  return createPortal(
    <div>
      //ye extreme right me ab jaega kyunki ab nya comp wala css lagega jo boy se inherit kr rha
        {copied  && <h3>{data} is copied</h3> }
    </div>,
    comp
  )
}

export default Popup