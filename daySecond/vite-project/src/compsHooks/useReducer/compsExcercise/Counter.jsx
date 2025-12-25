import React, { useReducer, useState } from 'react'
const initial={count :0}
//switch case me reducer me hmesha return no break required
const reducer=(state,action)=>{
    console.log(action)
    switch (action.type) {
        case "increase":
           return {...state,count:state.count+1}
        case "decrease":
           return {...state,count:state.count-1}
        case "increaseByVal":
           return {...state,count:state.count+action.payload}
        case "decreaseByVal":
           return {...state,count:state.count-action.payload}
        default:
           return state
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initial)
    const [value,setValue]=useState(0)

    const handleIncreaseByVal= ()=>{
        dispatch({type:"increaseByVal",
            payload:value})
        setValue(0)
    }
    const handleDecreaseByVal= ()=>{
        dispatch({type:"decreaseByVal",
            payload:value})
        setValue(0)
    }


  return (
    <div>
        <input type="number" value={value} onChange={(e)=>setValue(Number(e.target.value))} />
        <button onClick={()=>dispatch({type:"increase"})}>increase by one</button>
        <button onClick={()=>dispatch({type:"decrease"})}>decrease by one</button>
        <button onClick={handleIncreaseByVal}>increase by value</button>
        <button onClick={handleDecreaseByVal}>decrease by value</button>
        <h2>{state.count}</h2>
    </div>
  )
}

export default Counter