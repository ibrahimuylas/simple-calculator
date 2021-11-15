import "./Output.css";
import React from "react";

const Output = ({ result }) => {
  return (
    <div className="output">
      <input data-testid="calculator-output" value={result} readOnly />
    </div>
  );
};

export default Output;
