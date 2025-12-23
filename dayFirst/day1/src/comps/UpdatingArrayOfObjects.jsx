import React, { useState } from 'react'

const UpdatingArrayOfObjects = () => {
    const [movies,setMovies]=useState([
        { index:1,
          movie:"dhurandhar",
          rating:10
        },
        {   index:2,
            movie:"pathan",
            rating:0
        }
    ])

    const increase=(idx)=>{
        setMovies(movies.map((obj,i)=> i===idx ? ({...obj,rating:obj.rating+1}) : obj))
    }
    
    const decrease=(idx)=>{
        setMovies(movies.map((obj,i)=>i===idx ? ({...obj,rating:obj.rating-1}):obj))
    }

  return (
    <div>
        {
            movies.map((obj,idx)=>(
                <div key={idx}>
                    <h1>movieName:{obj.movie}</h1>

                    <h2>movieRating:{obj.rating}</h2>
                     <button onClick={()=>increase(idx)}>increase</button>
                    <button onClick={()=>decrease(idx)}>decrease</button>
                </div>
            ))
        }
    </div>
  )
}

export default UpdatingArrayOfObjects