import React, { useState } from 'react'

const UseToggle = (initialValue=false) => {
    const [value,setValue]=useState(initialValue)
    const toggle=()=>setValue(value=>!value)
  return [value,toggle]
}

export default UseToggle