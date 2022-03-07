import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(13);
  const [counter1, setCounter1] = useState(10);
  const [counter2, setCounter2] = useState(44);
  const [counter3, setCounter3] = useState(78);

  const changeBook = (value) => {
    if (counter < 0) {
      return;
    }
    setCounter(counter + value);
  };

  const changePen = (value) => {
    if (counter1 < 0) {
      return;
    }
    setCounter1(counter1 + value);
  };

  const changeNotebook = (value) => {
    if (counter2 < 0) {
      return;
    }
    setCounter2(counter2 + value);
  };

  const changeInkPen = (value) => {
    if (counter3 < 0) {
      return;
    }
    setCounter3(counter3 + value);
  };

  var totalCount = counter + counter1 + counter2 + counter3;

  return (
    <div className="items">
      <span>Books:</span>
      <button className="addBook" onClick={() => changeBook(1)}>
        Add
      </button>
      <button
        className="remBook"
        onClick={() => {
          if (counter > 0) {
            changeBook(-1);
          }
        }}
      >
        Remove
      </button>
      <span className="totalBooks">{counter}</span>

      <span>Pens:</span>
      <button className="addPen" onClick={() => changePen(1)}>
        Add
      </button>
      <button
        className="remPen"
        onClick={() => {
          if (counter1 > 0) {
            changePen(-1);
          }
        }}
      >
        Remove
      </button>
      <span className="totalPens">{counter1}</span>

      <span>Notebooks:</span>
      <button className="addNotebook" onClick={() => changeNotebook(1)}>
        Add
      </button>
      <button
        className="remNotenotebook"
        onClick={() => {
          if (counter2 > 0) {
            changeNotebook(-1);
          }
        }}
      >
        Remove
      </button>
      <span className="totalNotebook">{counter2}</span>

      <span>InkPens:</span>
      <button className="addInkpen" onClick={() => changeInkPen(1)}>
        Add
      </button>
      <button
        className="remInkpen"
        onClick={() => {
          if (counter3 > 0) {
            changeInkPen(-1);
          }
        }}
      >
        Remove
      </button>
      <span className="totalInkpens">{counter3}</span>

      <div className="total">
        <h1>{totalCount}</h1>
      </div>
    </div>
  );
}
