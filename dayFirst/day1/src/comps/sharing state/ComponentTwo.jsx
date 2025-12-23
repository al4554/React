import React from "react";

const ComponentTwo = ({ count, onClickHandler }) => {
  return (
    <div>
      <strong>{count}</strong>
      <button onClick={onClickHandler}>decrease</button>
    </div>
  );
};

export default ComponentTwo;
