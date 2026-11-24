import { useState } from "react";
function Index() {
  const [inputValue, setInputValue] = useState("");
  function hendalClick() {
 setInputValue('')
  }
  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={hendalClick}>clear me</button>
    </div>
  );
}
export default Index;
