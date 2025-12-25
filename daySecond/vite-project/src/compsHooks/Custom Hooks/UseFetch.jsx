import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data,setData]=useState(null)

    useEffect(()=>{
     fetch(url)
     .then(response=>response.json())
     .then(gotData=>setData(gotData))

    },[url])
  return  [data]//hooks generally return array like in useState you return [count,setCount] making oit flexible 
}

export default UseFetch