import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(1); //hooks
  //destructuring
  //React.useState => [value, setvalue]
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };

  const handleDouble = (value) => {
    setCounter(counter * value);
  };

  return (
    <>
      <h1>Counter</h1>

      <h2 style={{ color: counter % 2 === 0 ? "green" : "red" }}>{counter}</h2>             
      <button onClick={() => handleIncrement(1)}>Add</button>
      <button onClick={() => handleIncrement(-1)}>Reduce</button>
      <button onClick={() => handleDouble(2)}>Double</button>
    </>
  );
}