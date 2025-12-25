import React from 'react'
import UseFetch from '../../UseFetch'

const First = () => {
    const [data,loading,error]=UseFetch( "https://jsonplaceholder.typicode.com/posts")

    if(loading)return <p>...loading..please wait</p>
    if(error)return <p>error:{error.message}</p>
    if (!Array.isArray(data)) return null;//very important in async ones kyunki baar baar hoga
    //  render to data null bhi de skta h usme map lgane pr error aaega

  return (
    <div> 
        {
            data.map((item,idx)=> (
                <li key={idx}>
                     {idx+1}={item.title}
                </li>
            ))
        }
    </div>
  )
}

export default First