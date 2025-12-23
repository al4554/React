import React from "react";
import { obj,imgs } from "./Articles";

const Cards = () => {
    const style={
        height:"200px",width:"200px"
    }
  return (
    <div className="flex gap-10 flex-wrap">
      {obj.map((food, idx) => (
        <div key={idx} >
          <section>
            <img src={imgs[0]} alt="" style={style} />
            <h1>{food.name}</h1>
          </section>
          <small>{food.description}</small>
          <div>{food.star}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
