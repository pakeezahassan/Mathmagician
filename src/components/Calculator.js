import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "%") {
      const percentage = (parseFloat(input) / 100).toString();
      setInput(percentage);
      setResult(percentage);
    } else {
      setInput(input + value);
    }
  };

  const createButton = (value) => (
    <button key={value} onClick={() => handleClick(value)}>
      {value}
    </button>
  );

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="input" />
      <div className="keypad">
        {[...Array(10).keys()].map((num) => createButton(num.toString()))}
        {["+", "-", "*", "/", "=", "C", "%"].map((op) => createButton(op))}
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;
