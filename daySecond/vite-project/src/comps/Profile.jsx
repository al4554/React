import React, { useState } from "react";

//using simple state
// const Profile = () => {
//     const [name,setName]=useState("")
//     const [age,setAge]=useState(0)

//   return (
//     <div>

//         <h1>User Profile</h1>
//         <label htmlFor="name">NAME:</label>
//         <input type="text"
//          placeholder='name'
//          name='name'
//          value={name}
//          onChange={(e)=>setName(e.target.value)}/>

//        <label htmlFor="age">AGE:</label>
//         <input type="text"
//         placeholder='age'
//         name='age'
//         value={age}
//         onChange={(e)=>setAge(e.target.value)} />

//         <h1>profile Information:</h1>
//         <h3>name:{name}</h3>
//         <h3>age:{age}</h3>
//     </div>
//   )
// }

// export default Profile

//using object
const Profile = () => {
  const [list, setList] = useState([]);
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
  });

  const handleClick = () => setList([...list, profile]);

  return (
    <div>
      <h1>User Profile</h1>
      <label htmlFor="name">NAME:</label>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />

      <label htmlFor="age">AGE:</label>
      <input
        type="number"
        placeholder="age"
        name="age"
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
      />

      <button onClick={handleClick}>add</button>

      <h1>profiles List:</h1>
      {list.map((obj, idx) => (
        <section key={idx}>
          <h3>profile {idx+1}:</h3>
          <h3>name:{obj.name}</h3>
          <h3>age:{obj.age}</h3>
        </section>
      ))
      }
    </div>
  );
};

export default Profile;
