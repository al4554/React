import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
   const increment = () => {
      setCount(count + 1)
      console.log("hello")
   };
    const decrement = () => {
      setCount(count - 1);
      console.log("hello2")
    }
   

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
