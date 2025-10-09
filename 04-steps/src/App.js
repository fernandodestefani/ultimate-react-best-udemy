import { useState } from "react";

export default function App() {
  // define the state variable using the state function
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const today = new Date();
  const date = new Date(today);
  date.setDate(today.getDate() + count)

  // event handler functions
  function handleStepDecrease() {
    setStep((s) => s - 1);
  }

  function handleStepIncrease() {
    setStep((s) => s + 1);
  }

  function handleCountDecrease() {
    setCount((c) => c - step)
  } 

  function handleCountIncrease() {
    setCount((c) => c + step)
  }

  let message;
  if (count === 0) message = "Today is";
  else if (count > 0) message = `${count} day${count > 1 ? "s" : ""} from today is`;
  else message = `${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} ago was`;

  return (
    <div className="container">
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleCountIncrease}>+</button>
      </div>

      <p>{message} {date.toDateString()}</p>
      {/* days from ; days ago was */}
    </div>
  );
}
