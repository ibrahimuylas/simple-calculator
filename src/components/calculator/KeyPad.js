import "./KeyPad.css";
import React from "react";
import Key from "./Key";
import { EvaluateExpression } from "../../services/calculator-service.js";
import { CalculatorOperations } from "../../constants/calculator";

const KeyPad = ({ onChange }) => {
  const [result, setResult] = React.useState("");
  const handleOnClick = (e) => {
    let output = result;

    if (e.value === "=") {
      output = EvaluateExpression(result);
    } else if (e.value === "AC") {
      output = "";
    } else output += e.value;

    setResult(output);
    onChange(output);
  };

  return (
    <div className="keypad">
      <div className="keypad-row">
        <Key
          className="key-w3"
          value={CalculatorOperations.AllClear}
          onClick={handleOnClick}
        />
        <Key value={CalculatorOperations.Division} onClick={handleOnClick} />
      </div>
      <div className="keypad-row">
        <Key value={7} onClick={handleOnClick} />
        <Key value={8} onClick={handleOnClick} />
        <Key value={9} onClick={handleOnClick} />
        <Key
          value={CalculatorOperations.Multiplication}
          onClick={handleOnClick}
        />
      </div>
      <div className="keypad-row">
        <Key value={4} onClick={handleOnClick} />
        <Key value={5} onClick={handleOnClick} />
        <Key value={6} onClick={handleOnClick} />
        <Key value={CalculatorOperations.Subtraction} onClick={handleOnClick} />
      </div>
      <div className="keypad-row">
        <Key value={1} onClick={handleOnClick} />
        <Key value={2} onClick={handleOnClick} />
        <Key value={3} onClick={handleOnClick} />
        <Key value={CalculatorOperations.Addition} onClick={handleOnClick} />
      </div>
      <div className="keypad-row">
        <Key className="key-w2" value={0} onClick={handleOnClick} />
        <Key value={CalculatorOperations.Dot} onClick={handleOnClick} />
        <Key value={CalculatorOperations.Equality} onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default KeyPad;
