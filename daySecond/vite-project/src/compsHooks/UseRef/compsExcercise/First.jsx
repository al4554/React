import { useRef, useEffect, useState } from "react";

const First = () => {
    const [count,setCount]=useState(0)
    const timer=useRef(null)
    const startTimer=()=>{
        if(timer.current!==null)return

        timer.current=setInterval(()=>setCount(count=>count+1),1000)
    }

    const stopTimer=()=>{
        clearInterval(timer.current)
        timer.current=null
    }

    //for explanation-> https://chatgpt.com/s/t_694d7478061c8191a82f55bf5b935745
    //https://chatgpt.com/s/t_694d7786e06881918df6dda327f036b9
    //https://chatgpt.com/s/t_694d77a791888191a537fa77f62a48f1
    //https://chatgpt.com/s/t_694d77bac3008191adf1177d6c1d20df
    
    useEffect(()=>{
        if(timer.current===null){
             startTimer()
        }
      

      return ()=>{
        clearInterval(timer.current)
        timer.current=null
    }
    },[])

  return <div>
      <h2>timer:{count}</h2>
      <button onClick={startTimer}>Resume</button>
      <button onClick={stopTimer}>stop</button>
  </div>;
};

export default First;
