import { useRef,useState } from "react";

export default function ClickCounter() {
  const click = useRef(0);
  const [saveClick, setSaveClick] = useState(0);
  function handleClick(){
    click.current++;
  }
  function handleShow(){
    setSaveClick(click.current)
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleShow}>Show Total Clicks {saveClick}</button>
    </div>
  );
}
