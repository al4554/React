import React, { useContext } from "react";
import { data, data1 } from "./ContextApi";

// const CompC = () => {
//   return (
//     <data.Consumer>
//     {
//         (name) => <h1>hello this is {name}</h1>
//     }
//     </data.Consumer>
//   );
// };

//data.comsumer ko apne andar function chahiye wuth argument as the data given
// const CompC = () => {
//   return (
//     <data.Consumer>
//       {(name) => {
//         return (
//           <data1.Consumer>
//             {(age) => (
//               <h1>
//                 hello this is {name} and my age is {age}
//               </h1>
//             )}
//           </data1.Consumer>
//         );
//       }}
//     </data.Consumer>
//   );
// };



const CompC = () => {
    const name=useContext(data)
    const age=useContext(data1)

  return (
     <h1>my name is {name} and my age is {age}</h1>
  );
};
export default CompC;
