import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("#fff");

  const handlePageClick = () => {
    setShowInput(false);
    setBgColor("#fff");
  };

  const handleContainerClick = (e) => {
    e.stopPropagation(); // prevent page click
  };

  const handleSearchClick = (e) => {
    e.stopPropagation(); // prevent page click
    setShowInput(true);
    setBgColor("#1a1a1a");
  };

  return (
    <section
      className="page"
      style={{ backgroundColor: bgColor }}
      onClick={handlePageClick}
    >
      <div className="container" onClick={handleContainerClick}>
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={handleSearchClick} />
        )}
      </div>
    </section>
  );
}

export default HiddenSearchBar;
