import React, { useState } from "react";
import Popup from "./Popup";

const Copied = () => {
  const [data, setData] = useState("");
  const [copied, setCopied] = useState(false);

  const handleClick = () =>
    navigator.clipboard.writeText(data).then(() => {
      setCopied(true); //upar wala ho jaye to hi ye chalega so .then

      setTimeout(() => {
        setCopied(false);
        setData("");
      }, 3000)
     })
      .catch(() => console.log("not copied"));

  return (
    <div>
      <input
        type="text"
        placeholder="write text"
        name="toCopy"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={handleClick}>Copy</button>
      <Popup data={data} copied={copied} />
    </div>
  );
};

export default Copied;
