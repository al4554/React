import React, { useState } from 'react'

const UpdateObj = () => {
     
    const [movie,setMovie]=useState({
        name:"ddlj",
        rating:0
    })

  return (
    <div>
       {/* {movie} */}
       {/* react can not render object and boolean */}
       <h1>name:{movie.name}</h1>
       <h1>rating:{movie.rating}</h1>

       <button onClick={()=>setMovie({...movie,rating:movie.rating+1})}>increase</button>
       <button onClick={()=>setMovie({...movie,rating:movie.rating-1})}>decrease</button>

    </div>
  )
}

export default UpdateObj