import React, { useState } from 'react'

//ye concat krega -> 5+72-> 572
// const CounterSimple = () => {
//     const [nums,setNums]=useState("")
//     const [value,setValue]=useState("")
//   return (
//     <div> 
//         <input type="number" name="nums" placeholder='enter the number' value={value} 
//         onChange={(e)=>setValue( (e.target.value))}/>
//         <button onClick={()=>setNums(nums+1)}>Increase by one</button>
//         <button onClick={()=>setNums(nums-1)}>Decrease by one</button>
//         <button onClick={()=>setNums(nums+value)}>Increase by value</button>
//         <button onClick={()=>setNums(nums-value)}>Decrease by value</button>
//         <br />
//         <h3>{nums}</h3>
//     </div>
//   )
// }


 
// const CounterSimple = () => {
//     const [nums,setNums]=useState(0)
//     const [value,setValue]=useState(0)
//   return (
//     <div> 
//         <input type="number" name="nums" placeholder='enter the number' value={value} 
//         onChange={(e)=>setValue( Number(e.target.value))}/>
//         <button onClick={()=>setNums(nums+1)}>Increase by one</button>
//         <button onClick={()=>setNums(nums-1)}>Decrease by one</button>
//         <button onClick={()=>setNums(nums+value)}>Increase by value</button>
//         <button onClick={()=>setNums(nums-value)}>Decrease by value</button>
//         <br />
//         <h3>{nums}</h3>
//     </div>
//   )
// }

//if you wnat placeHolder you need to put empty string there -> but for math you need number so to handle both


const CounterSimple = () => {
    const [nums,setNums]=useState(0)
    const [value,setValue]=useState("")
  return (
    <div> 
        <input type="number" name="nums" placeholder='enter the number' value={value} 
        onChange={(e)=>setValue( Number(e.target.value))}/>
        <button onClick={()=>setNums(nums+1)}>Increase by one</button>
        <button onClick={()=>setNums(nums-1)}>Decrease by one</button>
        <button onClick={()=>setNums(nums+Number(value || 0))}>Increase by value</button>
        <button onClick={()=>setNums(nums-Number(value || 0))}>Decrease by value</button>
        <br />
        <h3>{nums}</h3>
    </div>
  )
}

export default CounterSimple