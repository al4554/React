import { useState } from "react";

const First = () => {
  // Use a function to compute the initial state
  const [count, setCount] = useState(() => {
    // This function will only run on the initial render
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

//    const increment = () => {
//     const newNum=count+1;
//     setCount(newNum);
//   };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default  First;
