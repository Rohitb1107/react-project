import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    if (counter < 0) {
      return;
    }
    setCounter(counter + value);
  };

  return (
    <div className="items">
      <span>Books:</span>
      <button className="addBook" onClick={() => handleChange(1)}>
        +
      </button>
      <button
        className="remBook"
        onClick={() => {
          if (counter > 0) {
            handleChange(-1);
          }
        }}
      >
        -
      </button>
      <span className="totalBooks">{counter}</span>
    </div>
  );
}
