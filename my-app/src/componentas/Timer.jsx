import { useState, useRef } from "react";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(null);
  function handleStart() {
    if (intervalId.current !== null) return;
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    intervalId.current = id;
  }
  function handleStop() {
    clearInterval(intervalId.current);
    intervalId.current=null
  }

  return (
    <>
      <p>{seconds}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
     
    </>
  );
}
