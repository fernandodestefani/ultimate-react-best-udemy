import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("")
  const [tip, setTip] = useState(0)
  const [friendTip, setFriendTip] = useState(0)

  function handleReset() {
    setBill("");
    setTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onBill={setBill}/>
      <SelectPercentage text="How did you like the service?" percentage={tip} onSelect={setTip} />
      <SelectPercentage text="How did your friend like the service?" percentage={friendTip} onSelect={setFriendTip}/>
      <Output bill={bill} tip={tip} friendTip={friendTip}/>
      <Reset bill={bill} onReset={handleReset}/>
    </div>
  );
}

function BillInput({bill, onBill}) {
  return (
    <div className="input-row">
      <p>How much was the bill?</p>
      <input type="number" placeholder="$" value={bill} onChange={(e) => onBill(e.target.value)}></input>
    </div>
  );
}

function SelectPercentage({ text, percentage, onSelect }) {
  return (
    <div className="input-row">
      <p>{text}</p>
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({bill, tip, friendTip}) {
  if (!bill) return null
  const averageTip = (tip + friendTip)/2;
  const tipAmount = Math.round(Number(bill) * averageTip / 100);
  const total = Number(bill) + tipAmount;

  return (
    <div className="output">
      <h3>{`You pay $${total} ($${bill} + $${tipAmount} tip)`}</h3>
    </div>
  );
}

function Reset({bill, onReset}) {
  if (!bill) return null

  return (
    <div className="input-row">
      <button style={{padding: "1px 3px", cursor: "pointer"}} onClick={onReset}>Reset</button>
    </div>
  );
}
