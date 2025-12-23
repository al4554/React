import React, { useState } from "react";

const UpdatingArrays = () => {
  const [friends, setFriends] = useState(["alok", "aryan", "ayush", "avik"]);
  const [newFriend, setNewFriend] = useState("");

  const add = () => {
    if (newFriend.trim() === "") return;
    setFriends([...friends, newFriend]);
    setNewFriend("");
  };

  const remove = () => {
    if (newFriend.trim() === "") return;
    setFriends(friends.filter((friend) => friend != newFriend));
    setNewFriend("");
  };

  const update = () => {
    if (newFriend.trim() === "") return;
    setFriends(
      friends.map((friend) =>
        friend === newFriend ? (friend = "Arjun") : friend
      )
    );
    setNewFriend("");
  };

  return (
    <div>
      {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}

      <input
        type="text"
        name="friend"
        placeholder="write name"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
      />

      <button onClick={add}>Add friends</button>
      <button onClick={remove}>Remove friends</button>
      <button onClick={update}>Update friends</button>
    </div>
  );
};

export default UpdatingArrays;
