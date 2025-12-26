import React, { useState } from "react";
import "./index.css";

function ToggleBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonBg, setButtonBg] = useState("white");

  function handleClick() {
    const isWhite = backgroundColor === "white";

    setBackgroundColor(isWhite ? "#1b1b1b" : "white");
    setTextColor(isWhite ? "#ffa31a" : "#1b1b1b");
    setButtonBg(isWhite ? "#1b1b1b" : "white");
  }

  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonBg,   // ✅ FIX HERE
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "white" ? "Black Theme" : "White Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
}

export default ToggleBackgroundColor;
