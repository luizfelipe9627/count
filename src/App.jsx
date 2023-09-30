import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = React.useState(0);
  const [shake, setShake] = React.useState(false);

  function increment() {
    if (count === 10) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1 className="title">Contador</h1>
      <div className={`counter ${shake ? "shake" : ""}`}>
        <div className="contentCounter">
          <Button event={decrement} className="buttonDecrement">-</Button>
          <span>{count}</span>
          <Button event={increment} className="buttonIncrement">+</Button>
        </div>

        <div className="contentReset">
          <Button event={reset} className="buttonReset">Limpar</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
