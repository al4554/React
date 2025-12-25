import React, { useEffect, useState } from 'react'

const FirstUseEffect = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  // const checkSize = () => setSize(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", checkSize);
  //   return () => {
  //     // Before we add render our component again
  //     // this cleanup function will cleanup the component first.
  //     console.log("cleanup");
  //     window.removeEventListener("resize", checkSize);
  //   };
  // });
    
     
//useEffect syntax->
// useEffect(() => {
//   // 1️⃣ effect (setup)

//   return () => {
//     // 2️⃣ cleanup
//   };
// }, []);
//React does this:

//1) Component mounts
// effect runs
// 2)Before component unmounts
// cleanup runs
// 3)Before effect runs again (if deps change)
// cleanup runs again

//🔍 When DO we need return?
//You need return only when your effect creates a side effect that must be undone.
//Examples that REQUIRE cleanup
//1) event listener
//window.addEventListener("resize", handler);
//return () => window.removeEventListener("resize", handler);
//2) interval
//const id = setInterval(fn, 1000);
//return () => clearInterval(id);
//3) subscription
//socket.subscribe();
//return () => socket.unsubscribe();

  useEffect(() => {
    const checkSize = () => setSize(window.innerWidth);
    window.addEventListener("resize", checkSize);
    return () => {
      // Before we add render our component again
      // this cleanup function will cleanup the component first.
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  },[]);

  return (
    <>
      <h2>window</h2>
      <h2>{size}px</h2>
    </>
  );
};

export default FirstUseEffect