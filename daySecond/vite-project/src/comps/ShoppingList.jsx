// import React, { useState } from "react";

//   
// const ShoppingList = () => {
//   const [itemName, setItemName] = useState("");
//   const [price, setPrice] = useState("");

//   const[list,setList]=useState([])

//   const handleClick=()=>{
//     if(!itemName || !price)return 
//     setList([...list,{itemName,price}])
//     setItemName("")
//     setPrice("")
//   }
    
//   return (
//     <div>
//       <h1>shopping list</h1>
//       <label htmlFor="itemName">
//         item name:
//         <input
//           type="text"
//           onChange={(e)=>setItemName(e.target.value)}
//           placeholder="item Name"
//           name="itemName"
//           value={itemName}
//         />
//       </label>

//       <label htmlFor="price">
//         price:
//         <input 
//           type="number" 
//           onChange={(e)=>setPrice(e.target.value)}
//           placeholder="price"
//           name="price"
//           value={price} 
//         />
//       </label>

//       <button onClick={handleClick}>add item</button>

//       {
//         list.map((obj,idx)=>(
//             <section key={idx}>
//                <h3>Item {idx+1}: {obj.itemName} {obj.price}</h3>
//             </section>
//         ))
//       }
//     </div>

//   );
// };

// export default ShoppingList;



import React, { useState } from "react";

//u can also use form 
const ShoppingList = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  const[list,setList]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    if(!itemName || !price)return 
    setList([...list,{itemName,price}])
    setItemName("")
    setPrice("")
  }
    
  return (
    <div>
      <h1>shopping list</h1>

      <form onSubmit={handleClick}>
 <label htmlFor="itemName">
        item name:
        <input
          type="text"
          onChange={(e)=>setItemName(e.target.value)}
          placeholder="item Name"
          name="itemName"
          value={itemName}
        />
      </label>

      <label htmlFor="price">
        price:
        <input 
          type="number" 
          onChange={(e)=>setPrice(e.target.value)}
          placeholder="price"
          name="price"
          value={price} 
        />
      </label>

      <button type="submit">add item</button>
      </form>
      

      {
        list.map((obj,idx)=>(
            <section key={idx}>
               <h3>Item {idx+1}: {obj.itemName} {obj.price}</h3>
            </section>
        ))
      }
    </div>

  );
};

export default ShoppingList;
