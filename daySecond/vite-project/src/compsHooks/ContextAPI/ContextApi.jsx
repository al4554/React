import React from 'react'
import { createContext } from 'react'
import CompA from './CompA';

export const data=createContext();
export const data1=createContext();


const ContextApi = () => {
    const name="alok"
    const age=20

  return (
    <data.Provider value={name}>
        <data1.Provider value={age}>
         <CompA/>
        </data1.Provider>     
    </data.Provider>
  )
}

export default ContextApi