import { useRef } from "react";

function IndexUseRef() {
 const clear=useRef(null)
  function hendalClick() {
 clear.current.value='';
  }
  return (
    <div>
      <input ref={clear} />
      <button onClick={hendalClick}>clear me</button>
    </div>
  );
}
export default IndexUseRef;
