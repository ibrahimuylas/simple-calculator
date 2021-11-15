import "./Key.css";
import React from "react";

const Key = ({ value, onClick, className = "" }) => {
  return (
    <button
      data-testid={`key-${value}`}
      className={`key ${className}`}
      onClick={() => onClick({ value })}
    >
      {value}
    </button>
  );
};

export default Key;
