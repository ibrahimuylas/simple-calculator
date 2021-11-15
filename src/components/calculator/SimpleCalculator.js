import React from "react";
import KeyPad from "./KeyPad";
import Output from "./Output";
import "./SimpleCalculator.css";

const SimpleCalculator = () => {
  const [result, setResult] = React.useState("");
  const handleOnChange = (result) => {
    setResult(result);
  };
  return (
    <div data-testid="simple-calculator" className="simple-calculator">
      <h2 className="simple-calculator-title">Simple Calculator</h2>
      <Output result={result} />
      <KeyPad onChange={(value) => handleOnChange(value)} />
    </div>
  );
};

export default SimpleCalculator;
