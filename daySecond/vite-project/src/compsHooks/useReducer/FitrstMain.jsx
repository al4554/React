import React, { useReducer } from 'react'

//bahr hi define krna wrna strict nmode ke wjh se dikkat ho skta h 
//dispatch action lega apne andar uske andar whi action object kpo define krna
const initial={count:0}

     const reducer=(state,action)=>{
        switch(action.type){
            case "increment":
                return {
                    ...state,count:state.count+1
                }
             case "decrement":
                return {
                    ...state,count:state.count-1
                }
             case "reset":
                return {
                    ...state,count:0
                }
            default:
                return state
        }
     }

const FitrstMain = () => {
      
     const [state, dispatch] = useReducer(reducer, initial) 

  return (
    <div> 
        <h1>{state.count}</h1>
         <button onClick={()=>dispatch({type:"increment"})}>+</button>
         <button onClick={()=>dispatch({type:"decrement"})}>-</button>
         <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default FitrstMain