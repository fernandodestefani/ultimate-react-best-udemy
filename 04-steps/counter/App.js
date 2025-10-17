import { useState } from "react";

export default function App() {
  // define the state variable using the state function
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // event handler functions
  function handleCountDecrease() {
    setCount((c) => c - step);
  }

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  let message;
  if (count === 0) message = "Today is";
  else if (count > 0)
    message = `${count} day${count > 1 ? "s" : ""} from today is`;
  else
    message = `${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} ago was`;

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p>{step}</p>
      </div>

      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountIncrease}>+</button>
      </div>

      <p>
        {message} {date.toDateString()}
      </p>
      {/* days from ; days ago was */}

      {(step !== 1 || count !== 0) && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
