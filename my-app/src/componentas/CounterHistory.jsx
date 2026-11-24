import { useRef, useState } from "react";

export default function CounterHistory() {
  const previous = useRef(5);
  const [carrent, setCarrent] = useState(5);
  function handleIncrease() {
    previous.current = carrent;
    setCarrent((prev) => prev + 1);
  }
  function handleInprev() {
    previous.current = carrent;
    setCarrent((prev) => prev - 1);
  }
  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleInprev}>-1</button>
      <p>Current: {carrent}</p>
      <p>Previous: {previous.current}</p>
    </div>
  );
}
